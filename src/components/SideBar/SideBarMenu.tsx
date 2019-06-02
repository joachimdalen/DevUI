import * as React from "react";
import cx from "classnames";
interface IState {}
interface IProps {
  className?: string;
}

export class SideBarMenu extends React.Component<IProps, IState> {
  render() {
    const { children, className = "" } = this.props;
    const menuClass = cx("dui-sidebar-menu", className);
    return <div className={menuClass}>{children}</div>;
  }
}


