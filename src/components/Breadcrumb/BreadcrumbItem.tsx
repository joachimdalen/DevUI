import * as React from "react";
import cx from "classnames";
import { CustomComponent } from "../common";

export interface BreadcrumbItemProps extends CustomComponent {
  className?: string;
  text: string;
  path?: string;
}

export class BreadcrumbItem extends React.Component<BreadcrumbItemProps> {
  public render() {
    const { text, className, path, component, componentProps } = this.props;
    const baseClass = cx("dui-breadcrumb-item", className);
    if (component) {
      const Component = component;
      return (
        <Component className={baseClass} {...componentProps}>
          {text}
        </Component>
      );
    }

    return (
      <a className={baseClass} href={path}>
        {text}
      </a>
    );
  }
}
