import * as React from "react";
import { CustomComponent } from "../common";

interface HeaderBrandProps extends CustomComponent {}

class HeaderBrand extends React.Component<HeaderBrandProps> {
  render() {
    const { children, component, componentProps } = this.props;
    if (component) {
      const Component = component;
      return (
        <Component className="dui-header-brand" {...componentProps}>
          {children}
        </Component>
      );
    }
    return <div className="dui-header-brand">{children}</div>;
  }
}
export { HeaderBrandProps, HeaderBrand };
