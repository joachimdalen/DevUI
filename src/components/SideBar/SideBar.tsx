import * as React from "react";
import cx from "classnames";
import { SideBarMenu } from "./SideBarMenu";
import { SideBarAddon } from "./SideBarAddon";
interface IState {}

export type AddonLocation = "top" | "bottom";
interface IProps {
  className?: string;
  compact?: boolean;
  showCompactLabels?: boolean;
  animate?: boolean;
  addon?: React.ReactElement<SideBarAddon>;
  addonLocation?: AddonLocation;
}

export class SideBar extends React.Component<IProps, IState> {
  static defaultProps: Partial<IProps> = {
    compact: false,
    animate: false
  };
  render() {
    const {
      className,
      compact,
      animate,
      showCompactLabels,
      addon,
      addonLocation
    } = this.props;
    const sidebarClass = cx(
      "dui-sidebar",
      className,
      { "dui-sidebar-compact": compact },
      { "dui-sidebar-animate": animate && !compact },
      { "dui-sidebar-compact-labels": compact && showCompactLabels }
    );
    const shouldShowAddon = compact === false && React.isValidElement(addon);
    return (
      <div className={sidebarClass}>
        {shouldShowAddon && addonLocation === "top" && addon}
        <SideBarMenu>{this.props.children}</SideBarMenu>
        {shouldShowAddon && addonLocation === "bottom" && addon}
      </div>
    );
  }
}
