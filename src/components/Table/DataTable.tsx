import { Props as TableProps, Table } from "./Table";
import { TableCell } from "./TableCell";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { CheckBox } from "../CheckBox/CheckBox";
import cx from "classnames";
import * as React from "react";
import { TablePaginator } from "./TablePaginator";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";

export interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  accessor?: (item: any) => string;
  onSort?: (a: TableRow, b: TableRow) => void;
}

export interface Props {
  rows: any;
  columns: Column[];
  keyField: string;
  multiSelect?: boolean;
}
export interface State {
  checked: TableRow[];
  sortBy?: Column;
  sortDirection: string;
}

export type AllProps = TableProps & Props;

export class DataTable extends React.Component<AllProps, State> {
  state = {
    checked: [],
    sortBy: {} as Column,
    sortDirection: "asc"
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
  _getHeaders() {
    const { columns, multiSelect } = this.props;
    let rowHeaders: TableCell[] = columns.map((col: Column) => {
      if (col.sortable) {
        return (
          <TableCell
            onClick={() =>
              this.setState({
                sortBy: col,
                sortDirection:
                  this.state.sortDirection === "desc" ? "asc" : "desc"
              })
            }
            className="dui-table-cell-sortable"
          >
            {col.label}
            <FontAwesomeIcon icon="fas fa-sort" />
          </TableCell>
        );
      }
      return <TableCell>{col.label}</TableCell>;
    }) as any;

    if (multiSelect) {
      const checkCellClass = cx("dui-table-cell-checkable");
      rowHeaders.unshift((
        <TableCell className={checkCellClass}>
          <CheckBox
            label="xx"
            checked={true}
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
    const { sortBy, sortDirection } = this.state;
    const checkCellClass = cx("dui-table-cell-checkable");

    let rowItems: any[] = [];
    if (sortBy) {
      if (sortBy.accessor) {
        rowItems =
          sortDirection === "asc"
            ? rows.sort(
                (a: Column, b: Column) =>
                  sortBy.accessor!(a) < sortBy.accessor!(b)
              )
            : rows.sort(
                (a: Column, b: Column) =>
                  sortBy.accessor!(a) > sortBy.accessor!(b)
              );
      } else {
        let sortKey = sortBy.key;
        rowItems =
          sortDirection === "asc"
            ? rows.sort((a: Column, b: Column) => {
                return a[sortKey] < b[sortKey];
              })
            : rows.sort((a: Column, b: Column) => {
                return a[sortKey] > b[sortKey];
              });
      }
    } else {
      rowItems = rows;
    }

    let renderedRows = rowItems.map((row: any) => {
      return (
        <TableRow>
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
              const isCustomAccessor = col.accessor;
              if (isCustomAccessor)
                return (
                  <TableCell>{col.accessor && col.accessor(row)}</TableCell>
                );
              return <TableCell>{row[col.key]}</TableCell>;
            }) as any
          }
        </TableRow>
      );
    });
    return renderedRows;
  }
}
