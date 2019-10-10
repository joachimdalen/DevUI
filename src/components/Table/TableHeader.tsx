import cx from "classnames";
import * as React from "react";

interface TableHeaderProps {
  children: React.ReactChild | React.ReactChild[];
}

class TableHeader extends React.Component<TableHeaderProps> {
  public render() {
    const { children } = this.props;
    const headClass = cx("dui-table-header");
    return <div className={headClass}>{children}</div>;
  }
}
export { TableHeaderProps, TableHeader };
