import { Props as TableProps, Table } from "./Table";
import { TableCell } from "./TableCell";
import { TableColumnPicker } from "./TableColumnPicker";
import { TableHeader } from "./TableHeader";
import { TablePaginator } from "./TablePaginator";
import { TableRow } from "./TableRow";
import { Column, SearchEntry } from "./TableTypes";
import { CheckBox } from "../CheckBox/CheckBox";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import { TextInput } from "../TextInput/TextInput";
import cx from "classnames";
import * as React from "react";

export interface Props {
  rows: any;
  columns: Column[];
  multiSelect?: boolean;
  onCheck?: (checked: any) => void;
}

export interface State {
  checked: any[];
  sortBy?: Column;
  sortDirection: string;
  search: SearchEntry[];
  visibleColumns: string[];
}
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type AllProps = Omit<TableProps, "children"> & Props;

export class DataTable extends React.Component<AllProps, State> {
  state = {
    checked: [] as any[],
    sortBy: {} as Column,
    sortDirection: "asc",
    search: [] as SearchEntry[],
    visibleColumns: [] as string[]
  };

  componentDidMount() {
    this.setState({
      visibleColumns: this.props.columns.map(i => {
        return i.key;
      })
    });
  }

  public render() {
    const { columns, ...rest } = this.props;
    const hasSearch = columns.find((e: Column) => e.searchable === true);
    return (
      <div>
        {this._getTableHeader() as any}
        <Table {...rest} className={cx({ "dui-table-search": hasSearch })}>
          {this._getHeaders() as any}
          {this._getRows() as any}
        </Table>
      </div>
    );
  }

  _getTableHeader() {
    return (
      <TableHeader>
        <TableColumnPicker
          columns={this.props.columns}
          visibleColumns={this.state.visibleColumns}
          onColumnUpdate={(cols: string[]) =>
            this.setState({ visibleColumns: cols })
          }
        />
        <TablePaginator />
      </TableHeader>
    );
  }

  _handleSearch(key: string, value: string) {
    const { search } = this.state;

    let index = search.findIndex((e: SearchEntry) => e.key === key);
    let data: SearchEntry = {
      key: key,
      value: value
    };
    if (index === -1) {
      let newItems = [...search, data];
      this.setState({ search: newItems });
    } else {
      let newItems = [...search];
      newItems[index] = data;
      this.setState({ search: newItems });
    }
  }
  _sort(col: Column) {
    const { sortDirection } = this.state;
    this.setState({
      sortBy: col,
      sortDirection: sortDirection === "desc" ? "asc" : "desc"
    });
  }
  _checkedChange() {
    const { checked } = this.state;
    const { onCheck } = this.props;
    onCheck && onCheck(checked);
  }

  _toggleItem(item: any) {
    const { onCheck } = this.props;
    const { checked } = this.state;
    const checkIndex = checked.indexOf(item);
    var arrCpy = [...checked];
    if (checkIndex !== -1) {
      arrCpy.splice(checkIndex, 1);
      this.setState({ checked: arrCpy }, () => {
        onCheck && onCheck(checked);
      });
    } else {
      const newItems = [...checked, item];
      this.setState({ checked: newItems }, () => {
        onCheck && onCheck(newItems);
      });
    }
  }

  _toggleAll(): void {
    const { rows } = this.props;
    const { checked } = this.state;
    if (rows.length !== checked.length) {
      this.setState({ checked: rows });
    } else {
      this.setState({ checked: [] });
    }
  }

  _getHeaders() {
    const { columns, rows, multiSelect } = this.props;
    const { search, checked, visibleColumns } = this.state;

    let rowHeaders: TableCell[] = columns
      .filter((i: Column) => visibleColumns.indexOf(i.key) !== -1)
      .map((col: Column) => {
        let searchIndex = this.state.search.findIndex(
          (e: SearchEntry) => e.key === col.key
        );
        if (col.sortable || col.searchable) {
          const cellClass = cx({ "dui-table-cell-sortable": col.sortable });

          return (
            <TableCell key={col.key}>
              {col.sortable ? (
                <div onClick={() => this._sort(col)} className={cellClass}>
                  <span>{col.label}</span>
                  <FontAwesomeIcon icon="fas fa-sort" />
                </div>
              ) : (
                <div>
                  <span>{col.label}</span>
                </div>
              )}
              {col.searchable && (
                <div>
                  <TextInput
                    name="filter"
                    size="small"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      this._handleSearch(col.key, e.target.value)
                    }
                    value={
                      searchIndex === -1
                        ? ""
                        : search[searchIndex] && search[searchIndex]["value"]
                    }
                    placeholder="Search..."
                  />
                </div>
              )}
            </TableCell>
          );
        }
        return <TableCell key={col.key}>{col.label}</TableCell>;
      }) as any;

    if (multiSelect && visibleColumns.length !== 0) {
      const checkCellClass = cx("dui-table-cell-checkable");
      const isChecked = checked.length === rows.length;
      const isIndeterminate = checked.length !== 0 && !isChecked;
      rowHeaders.unshift((
        <TableCell className={checkCellClass}>
          <CheckBox
            label="xx"
            checked={isChecked}
            indeterminate={isIndeterminate}
            onCheckChange={() => this._toggleAll()}
          />
        </TableCell>
      ) as any);
    }
    return (
      <TableRow isHeader={true} bordered={true}>
        {rowHeaders}
      </TableRow>
    );
  }

  _getRows() {
    const { columns, rows, multiSelect } = this.props;
    const {
      sortBy,
      sortDirection,
      search,
      checked,
      visibleColumns
    } = this.state;
    const checkCellClass = cx("dui-table-cell-checkable");

    let rowItems: Column[] = rows;
    if (search.length) {
      search.forEach((e: SearchEntry) => {
        rowItems = rowItems.filter(item => {
          const col = columns.find(i => i.key === e.key);
          if (!col) return false;
          if (col.accessor) {
            return (
              col
                .accessor(item)
                .toLowerCase()
                .indexOf(e.value.toLowerCase()) !== -1
            );
          } else {
            return (
              item[e.key].toLowerCase().indexOf(e.value.toLowerCase()) !== -1
            );
          }
        });
      });
    }
    if (sortBy.key) {
      if (sortBy.accessor) {
        rowItems =
          sortDirection === "asc"
            ? rowItems.sort((a: Column, b: Column) =>
                sortBy.accessor!(a) < sortBy.accessor!(b) ? 0 : 1
              )
            : rowItems.sort((a: Column, b: Column) =>
                sortBy.accessor!(a) > sortBy.accessor!(b) ? 0 : 1
              );
      } else {
        let sortKey = sortBy.key;
        rowItems =
          sortDirection === "asc"
            ? rowItems.sort((a: Column, b: Column) =>
                a[sortKey] < b[sortKey] ? 0 : 1
              )
            : rowItems.sort((a: Column, b: Column) =>
                a[sortKey] > b[sortKey] ? 0 : 1
              );
      }
    }

    let renderedRows = rowItems.map((row: any) => {
      const isRowChecked = checked && checked.indexOf(row) !== -1;
      return (
        <TableRow key={row["key"]} checked={isRowChecked && multiSelect}>
          {multiSelect && visibleColumns.length !== 0 && (
            <TableCell className={checkCellClass}>
              <CheckBox
                label="xx"
                checked={isRowChecked}
                onCheckChange={() => this._toggleItem(row)}
              />
            </TableCell>
          )}
          {
            columns
              .filter((i: Column) => visibleColumns.indexOf(i.key) !== -1)
              .map((col: Column) => {
                const isCustomRenderer = col.renderer;
                if (isCustomRenderer)
                  return (
                    <TableCell key={row[col.key]}>
                      {col.renderer && col.renderer(row)}
                    </TableCell>
                  );
                return (
                  <TableCell key={row[col.key]}>
                    {row[col.key] || (col.accessor && col.accessor(row))}
                  </TableCell>
                );
              }) as any
          }
        </TableRow>
      );
    });
    return renderedRows;
  }
}
