import * as React from "react";
import cx from "classnames";
export interface Props extends React.HTMLAttributes<HTMLTableCellElement>{
  isHeader?: boolean;
  className?: string;
}
export class TableCell extends React.Component<Props> {
  public render() {
    const { children, className, isHeader } = this.props;
    const cellClass = cx(
      "dui-table-cell",
      {
        "dui-table-cell-header": isHeader
      },
      className
    );

    if (isHeader) return <th className={cellClass}>{children}</th>;
    return <td className={cellClass}>{children}</td>;
  }
}
