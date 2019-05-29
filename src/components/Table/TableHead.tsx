import * as React from "react";
import { TableRow } from "./TableRow";
import cx from "classnames";
export interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactElement<TableRow>;
}
export class TableHead extends React.Component<Props> {
  public render() {
    const { children } = this.props;
    const headClass = cx("dui-table-head");
    return <thead className={headClass}>{children}</thead>;
  }
}
