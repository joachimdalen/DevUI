import * as React from "react";
import cx from "classnames";
interface IState {}
interface SideBarMenuProps {
  className?: string;
}

class SideBarMenu extends React.Component<SideBarMenuProps, IState> {
  static defaultProps: Partial<SideBarMenuProps> = {
    className: ""
  };
  render() {
    const { children, className } = this.props;
    const menuClass = cx("dui-sidebar-menu", className);
    return <div className={menuClass}>{children}</div>;
  }
}
export { SideBarMenu, SideBarMenuProps };
