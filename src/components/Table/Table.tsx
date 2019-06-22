import * as React from "react";
import { TableRow } from "./TableRow";
import cx from "classnames";
export interface Props extends React.HTMLAttributes<HTMLTableElement> {
  children: React.ReactElement<TableRow> | React.ReactElement<TableRow>[];
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  className?: string;
}
export class Table extends React.Component<Props> {
  public render() {
    const {
      children,
      bordered = false,
      striped = false,
      hoverable = false,
      className = ""
    } = this.props;
    const tableClass = cx(
      "dui-table",
      className,
      { "dui-table-bordered": bordered },
      { "dui-table-striped": striped },
      { "dui-table-hoverable": hoverable }
    );

    return <div className={tableClass}>{children}</div>;
  }
}
