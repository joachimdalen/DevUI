import * as React from "react";
import cx from "classnames";
import { BreadcrumbItem } from "./BreadcrumbItem";
import { Crumb } from "./BreadcrumbTypes";

interface BreadcrumbProps {
  className?: string;
  crumbs?: Crumb[];
}

class Breadcrumb extends React.Component<BreadcrumbProps> {
  public render() {
    const { children, crumbs, className } = this.props;
    return (
      <div className={cx("dui-breadcrumb", className)}>
        {crumbs && crumbs.length
          ? crumbs.map((crumb: Crumb) => {
              return (
                <BreadcrumbItem
                  text={crumb.label}
                  path={crumb.path}
                  key={crumb.path}
                />
              );
            })
          : children}
      </div>
    );
  }
}
export { BreadcrumbProps, Breadcrumb };
