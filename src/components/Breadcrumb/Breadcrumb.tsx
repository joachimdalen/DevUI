import * as React from "react";
import cx from "classnames";

export interface BreadcrumbProps {
  className?: string;
}

export class Breadcrumb extends React.Component<BreadcrumbProps> {
  public render() {
    const { children, className } = this.props;
    return <div className={cx("dui-breadcrumb", className)}>{children}</div>;
  }
}
