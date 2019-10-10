import cx from "classnames";
import * as React from "react";
import { CustomComponent } from "../common";
interface HeaderUserMenuItemProps extends CustomComponent {
  className?: string;
  isHeader?: boolean;
  onClick: () => void;
}

class HeaderUserMenuItem extends React.Component<HeaderUserMenuItemProps> {
  static defaultProps: Partial<HeaderUserMenuItemProps> = {
    isHeader: false
  };
  render() {
    const {
      children,
      className,
      isHeader,
      onClick,
      component,
      componentProps
    } = this.props;
    const baseClass = cx(
      "dui-header-user-menu-item",
      { "dui-header-user-menu-item-header": isHeader },
      className
    );
    if (component) {
      const Component = component;
      return (
        <Component className={baseClass} onClick={onClick} {...componentProps}>
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
export { HeaderUserMenuItemProps, HeaderUserMenuItem };
