import { TableProps, Table } from "./Table";
import { TableCell } from "./TableCell";
import { TableColumnPicker } from "./TableColumnPicker";
import { TableHeader } from "./TableHeader";
import { TablePaginator } from "./TablePaginator";
import { TableRow } from "./TableRow";
import { Column, SearchEntry } from "./TableTypes";
import { CheckBox } from "../CheckBox/CheckBox";
import { FontAwesomeIcon } from "../FontAwesomeIcon/FontAwesomeIcon";
import { TextInput } from "../TextInput/TextInput";
import cx from "classnames";
import * as React from "react";
import { Empty } from "../Empty/Empty";
import { Omit } from "../common";

interface InternalDataTableProps {
  rows: any[];
  columns: Column[];
  multiSelect?: boolean;
  paginationEnabled?: boolean;
  paginationPageSize?: number;
  showColumnPicker?: boolean;
  showEmpty?: boolean;
  emptyComp?: React.ReactElement<Empty>;
  onCheck?: (checked: any) => void;
}

interface DataTableState {
  checked: any[];
  sortBy?: Column;
  sortDirection: string;
  search: SearchEntry[];
  visibleColumns: string[];
  from: number;
  to: number;
}
type DataTableProps = Omit<TableProps, "children"> & InternalDataTableProps;

class DataTable extends React.Component<DataTableProps, DataTableState> {
  state = {
    checked: [] as any[],
    sortBy: {} as Column,
    sortDirection: "",
    search: [] as SearchEntry[],
    visibleColumns: [] as string[],
    from: 1,
    to: this.props.paginationPageSize || 15
  };

  static defaultProps: Partial<DataTableProps> = {
    showEmpty: false,
    emptyComp: (
      <Empty
        header="No data"
        image={<FontAwesomeIcon icon="fa-inbox" iconStyle="solid" />}
      />
    )
  };

  componentDidMount() {
    this.setState({
      visibleColumns: this.props.columns.map(i => {
        return i.key;
      })
    });
  }

  render() {
    const { columns, rows, emptyComp, showEmpty, ...rest } = this.props;
    const hasSearch = columns.find((e: Column) => e.searchable === true);
    const emptyItem = showEmpty ? emptyComp : null;
    const shouldShowEmpty = !rows || rows.length === 0;
    return (
      <div className="dui-table-wrapper">
        {this._getTableHeader()}
        <Table {...rest} className={cx({ "dui-table-search": hasSearch })}>
          {this._getHeaders() as any}
          {this._getRows() as any}
        </Table>
        {shouldShowEmpty && emptyItem}
      </div>
    );
  }

  _setVisibleColumns = (cols: string[]) => {
    this.setState({ visibleColumns: cols });
  };

  _getTableHeader() {
    const {
      paginationEnabled = false,
      paginationPageSize = 15,
      showColumnPicker = false,
      rows
    } = this.props;
    const { from, to } = this.state;
    const shouldShowHeader = paginationEnabled || showColumnPicker;
    if (!shouldShowHeader) return null;
    return (
      <TableHeader>
        {showColumnPicker &&
          ((
            <TableColumnPicker
              columns={this.props.columns}
              visibleColumns={this.state.visibleColumns}
              onColumnUpdate={this._setVisibleColumns}
              forcedColumns={this.props.columns
                .filter(i => i.forceVisible === true)
                .map(i => i.key)}
            />
          ) as any)}
        {paginationEnabled &&
          ((
            <TablePaginator
              from={from}
              to={to}
              totalItems={rows.length}
              pageLimit={paginationPageSize}
              onPageChange={this._onPaginatorPageChange}
            />
          ) as any)}
      </TableHeader>
    );
  }
  _onPaginatorPageChange = (from: number, to: number) => {
    this.setState({ from, to });
  };

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
    const { onCheck } = this.props;
    onCheck && onCheck(this.state.checked);
  }

  _toggleItem(item: any) {
    const { onCheck } = this.props;
    const checkIndex = this.state.checked.indexOf(item);
    var arrCpy = [...this.state.checked];
    if (checkIndex !== -1) {
      arrCpy.splice(checkIndex, 1);
      this.setState({ checked: arrCpy }, () => {
        onCheck && onCheck(this.state.checked);
      });
    } else {
      const newItems = [...this.state.checked, item];
      this.setState({ checked: newItems }, () => {
        onCheck && onCheck(newItems);
      });
    }
  }

  _toggleAll(): void {
    const { rows, onCheck } = this.props;
    const { checked } = this.state;
    if (rows.length !== checked.length) {
      this.setState({ checked: rows }, () => {
        onCheck && onCheck(this.state.checked);
      });
    } else {
      this.setState({ checked: [] }, () => {
        onCheck && onCheck(this.state.checked);
      });
    }
  }

  _getSortIcon = (key: string) => {
    const { sortDirection, sortBy } = this.state;
    if (!sortDirection || sortBy.key !== key) return "fa-sort";
    if (sortDirection === "asc") return "fa-sort-alpha-down";
    return "fa-sort-alpha-up";
  };

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
                  <FontAwesomeIcon
                    iconStyle="solid"
                    icon={this._getSortIcon(col.key)}
                  />
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
                    prefix={
                      <FontAwesomeIcon iconStyle="solid" icon="fa-search" />
                    }
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
        return <TableCell>{col.label}</TableCell>;
      }) as any;

    if (multiSelect && visibleColumns.length !== 0) {
      const checkCellClass = cx("dui-table-cell-checkable");
      const isChecked = checked.length === rows.length;
      const isIndeterminate = checked.length !== 0 && !isChecked;
      rowHeaders.unshift((
        <TableCell className={checkCellClass}>
          <CheckBox
            variant="blue"
            checked={isChecked}
            indeterminate={isIndeterminate}
            onCheckChange={() => this._toggleAll()}
          />
        </TableCell>
      ) as any);
    }
    return (
      <TableRow isHeader={true} bordered={true}>
        {rowHeaders as any}
      </TableRow>
    );
  }

  _getRows() {
    const {
      columns,
      rows,
      multiSelect,
      paginationEnabled = false
    } = this.props;
    const {
      sortBy,
      sortDirection,
      search,
      checked,
      visibleColumns,
      from,
      to
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

    if (paginationEnabled) {
      rowItems = rowItems.slice(from - 1, to);
    }

    let renderedRows =
      rowItems &&
      rowItems.map((row: any) => {
        const isRowChecked = checked && checked.indexOf(row) !== -1;
        return (
          <TableRow checked={isRowChecked && multiSelect}>
            {multiSelect && visibleColumns.length !== 0 && (
              <TableCell className={checkCellClass}>
                <CheckBox
                  variant="blue"
                  checked={isRowChecked}
                  onCheckChange={() => this._toggleItem(row)}
                />
              </TableCell>
            )}
            {
              columns
                .filter((i: Column) => visibleColumns.indexOf(i.key) !== -1)
                .map((col: Column) => {
                  const cellValue = col.renderer
                    ? col.renderer(row)
                    : col.accessor
                    ? col.accessor(row)
                    : row[col.key];
                  return (
                    <TableCell className={cx(col.className)}>
                      {cellValue}
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
export { DataTable, DataTableProps, Column };
