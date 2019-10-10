import * as React from "react";
import { CustomComponent } from "../common";
import cx from "classnames";

interface HeaderItemProps extends CustomComponent {
  onClick?: () => void;
  active?: boolean;
}

class HeaderItem extends React.Component<HeaderItemProps> {
  render() {
    const { children, onClick, component, componentProps, active } = this.props;
    const baseClass = cx("dui-header-item", {
      "dui-header-item-active": active
    });
    if (component) {
      const Component = component;
      return (
        <Component className={baseClass} {...componentProps}>
          {children}
        </Component>
      );
    }
    return (
      <div className={baseClass} onClick={onClick}>
        {children}
      </div>
    );
  }
}
export { HeaderItem, HeaderItemProps };
