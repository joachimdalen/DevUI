import * as React from "react";
import { TableCell } from "./TableCell";
import cx from "classnames";
export interface Props extends React.HTMLAttributes<HTMLTableRowElement> {
  children: TableCell[];
  bordered?: boolean;
  checked?: boolean;
}
export class TableRow extends React.Component<Props> {
  public render() {
    const { children, bordered = false, checked = false } = this.props;
    const rowClass = cx(
      "dui-table-row",
      { "dui-table-row-bordered": bordered },
      { "dui-table-row-checked": checked }
    );
    return <tr className={rowClass}>{children}</tr>;
  }
}
