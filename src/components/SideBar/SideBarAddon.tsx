import * as React from "react";
import cx from "classnames";
interface SideBarAddonProps {
  className?: string;
}
class SideBarAddon extends React.Component<SideBarAddonProps> {
  static defaultProps: Partial<SideBarAddonProps> = {};
  render() {
    const { className } = this.props;
    const addonClass = cx("dui-sidebar-addon", className);
    return <div className={addonClass}>{this.props.children}</div>;
  }
}
export { SideBarAddonProps, SideBarAddon };
