import * as React from "react";
import cx from "classnames";
export interface Props {
  className?: string;
}
export class SideBarAddon extends React.Component<Props> {
  static defaultProps: Partial<Props> = {};
  render() {
    const { className } = this.props;
    const addonClass = cx("dui-sidebar-addon", className);
    return <div className={addonClass}>{this.props.children}</div>;
  }
}
