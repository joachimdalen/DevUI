import * as React from "react";
import cx from "classnames";
export interface Props {
  className?: string;
  onClick?: () => void;
}
export class TableCell extends React.Component<Props> {
  public render() {
    const { children, className, ...rest } = this.props;
    const cellClass = cx("dui-table-cell", className);
    return (
      <div className={cellClass} {...rest}>
        {children}
      </div>
    );
  }
}
