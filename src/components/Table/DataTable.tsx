import { Props as TableProps, Table } from "./Table";
import { TableCell } from "./TableCell";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";
import { CheckBox } from "../CheckBox/CheckBox";
import cx from "classnames";
import * as React from "react";

export interface Column extends React.HTMLAttributes<HTMLTableColElement> {
  key: string;
  label: string;
  sortable?: boolean;
  accessor?: (item: any) => string;
  onSort?: (direction: string) => any;
}

export interface Props {
  rows: TableRow[];
  columns: Column[];
  keyField: string;
  multiSelect?: boolean;
}

export type AllProps = TableProps & Props;

export class DataTable extends React.Component<AllProps> {
  public render() {
    const { ...rest } = this.props;
    return (
      <Table {...rest}>
        {this._getHeaders() as any}
        {this._getRows() as any}
      </Table>
    );
  }

  _getHeaders() {
    const { columns, multiSelect } = this.props;
    let rowHeaders: TableCell[] = columns.map((col: Column) => {
      return <TableCell isHeader={true}>{col.label}</TableCell>;
    }) as any;

    if (multiSelect) {
      const checkCellClass = cx("dui-table-cell-checkable");
      rowHeaders.unshift((
        <TableCell isHeader={true} className={checkCellClass}>
          <CheckBox
            label="xx"
            checked={true}
            onCheckChange={() => console.log("1")}
          />
        </TableCell>
      ) as any);
    }
    return (
      <TableHead>
        <TableRow bordered={true}>{rowHeaders}</TableRow>
      </TableHead>
    );
  }

  _getRows() {
    const { columns, rows, multiSelect } = this.props;
    const checkCellClass = cx("dui-table-cell-checkable");
    let renderedRows = rows.map((row: TableRow) => {
      return (
        <TableRow>
          {multiSelect && (
            <TableCell isHeader={true} className={checkCellClass}>
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
