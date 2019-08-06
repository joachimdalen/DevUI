import * as React from "react";
import cx from "classnames";
import { CustomComponent } from "components/common";

export interface BreadcrumbItemProps extends CustomComponent {
  className?: string;
  text: string;
}

export class BreadcrumbItem extends React.Component<BreadcrumbItemProps> {
  public render() {
    const { text, className } = this.props;
    return <div className={cx("dui-breadcrumb-item", className)}>{text}</div>;
  }
}
