import cx from "classnames";
import * as React from "react";

export interface Props {
  children: React.ReactChild | React.ReactChild[];
}

export class TableHeader extends React.Component<Props> {
  public render() {
    const { children } = this.props;
    const headClass = cx("dui-table-header");
    return <div className={headClass}>{children}</div>;
  }
}
