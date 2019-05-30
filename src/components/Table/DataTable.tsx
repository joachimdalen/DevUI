import { Props as TableProps, Table } from "./Table";
import { TableCell } from "./TableCell";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { CheckBox } from "../CheckBox/CheckBox";
import cx from "classnames";
import * as React from "react";
import { TablePaginator } from "./TablePaginator";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import { TextInput } from "../TextInput/TextInput";

export interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  searchable?: boolean;
  accessor?: (item: any) => string;
  renderer?: (item: any) => React.ReactNode;
  onSort?: (a: TableRow, b: TableRow) => void;
}

export interface Props {
  rows: any;
  columns: Column[];
  keyField: string;
  multiSelect?: boolean;
}

export interface SearchEntry {
  key: string;
  value: string;
}

export interface State {
  checked: TableRow[];
  sortBy?: Column;
  sortDirection: string;
  search: SearchEntry[];
}

export type AllProps = TableProps & Props;

export class DataTable extends React.Component<AllProps, State> {
  state = {
    checked: [] as any[],
    sortBy: {} as Column,
    sortDirection: "asc",
    search: [] as SearchEntry[]
  };

  public render() {
    const { ...rest } = this.props;
    return (
      <div>
        {this._getTableHeader() as any}
        <Table {...rest}>
          {this._getHeaders() as any}
          {this._getRows() as any}
        </Table>
      </div>
    );
  }

  _getTableHeader() {
    return (
      <TableHeader>
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

  _getHeaders() {
    const { columns, rows, multiSelect } = this.props;
    const { search, checked } = this.state;
    //  const hasSearch = columns.find((e: Column) => e.searchable === true);
    let rowHeaders: TableCell[] = columns.map((col: Column) => {
      let searchIndex = this.state.search.findIndex(
        (e: SearchEntry) => e.key === col.key
      );
      if (col.sortable) {
        return (
          <TableCell className="dui-table-cell-sortable" key={col.key}>
            <div onClick={() => this._sort(col)}>
              <span>{col.label}</span>
              <FontAwesomeIcon icon="fas fa-sort" />
            </div>
            {col.searchable && (
              <div>
                <TextInput
                  name="filter"
                  size="small"
                  onChange={e => this._handleSearch(col.key, e.target.value)}
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

    if (multiSelect) {
      const checkCellClass = cx("dui-table-cell-checkable");
      rowHeaders.unshift((
        <TableCell className={checkCellClass}>
          <CheckBox
            label="xx"
            checked={false}
            indeterminate={
              checked.length !== 0 && checked.length !== rows.length
            }
            onCheckChange={() => console.log("1")}
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
    const { sortBy, sortDirection, search } = this.state;
    const checkCellClass = cx("dui-table-cell-checkable");

    let rowItems: Column[] = rows;

    if (search.length) {
      search.forEach((e: SearchEntry) => {
        rowItems = rowItems.filter(item => item[e.key].indexOf(e.value) !== -1);
      });
    }
    if (sortBy) {
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
      return (
        <TableRow key={row["key"]}>
          {multiSelect && (
            <TableCell className={checkCellClass}>
              <CheckBox
                label="xx"
                checked={false}
                onCheckChange={() => console.log("1")}
              />
            </TableCell>
          )}
          {
            columns.map((col: Column) => {
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
