import * as React from "react";
import { TableRow } from "./TableRow";
import cx from "classnames";
export interface Props extends React.HTMLAttributes<HTMLTableElement> {
  children: TableRow[];
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  caption?: string;
  captionLocation?: "bottom" | "top";
}
export class Table extends React.Component<Props> {
  public render() {
    const {
      children,
      caption,
      captionLocation,
      bordered = false,
      striped = false,
      hoverable = false
    } = this.props;
    const tableClass = cx(
      "dui-table",
      { "dui-table-bordered": bordered },
      { "dui-table-striped": striped },
      { "dui-table-hoverable": hoverable }
    );

    return (
      <table className={tableClass}>
        {caption && captionLocation === "top" && this._getCaption()}
        {children}
        {caption && captionLocation === "bottom" && this._getCaption()}
      </table>
    );
  }
  _getCaption() {
    const { caption } = this.props;
    return <caption>{caption}</caption>;
  }
}
