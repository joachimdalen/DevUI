import * as React from "react";
import { CustomComponent } from "components/common";

export interface HeaderItemProps extends CustomComponent {
  onClick?: () => void;
}

export class HeaderItem extends React.Component<HeaderItemProps> {
  render() {
    const { children, onClick, component, componentProps } = this.props;
    if (component) {
      const Component = component;
      return (
        <Component className="dui-header-item" {...componentProps}>
          {children}
        </Component>
      );
    }
    return (
      <div className="dui-header-item" onClick={onClick}>
        {children}
      </div>
    );
  }
}
