import * as React from "react";
import cx from "classnames";
export interface SideBarAddonProps {
  className?: string;
}
export class SideBarAddon extends React.Component<SideBarAddonProps> {
  static defaultProps: Partial<SideBarAddonProps> = {};
  render() {
    const { className } = this.props;
    const addonClass = cx("dui-sidebar-addon", className);
    return <div className={addonClass}>{this.props.children}</div>;
  }
}
