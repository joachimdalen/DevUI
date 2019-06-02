import * as React from "react";
import cx from "classnames";
import { SideBarMenu } from "./SideBarMenu";
interface IState {}
interface IProps {
  className?: string;
  compact?: boolean;
  showCompactLabels?: boolean;
}

export class SideBar extends React.Component<IProps, IState> {
  render() {
    const { className, compact = false, showCompactLabels } = this.props;
    const sidebarClass = cx(
      "dui-sidebar",
      className,
      { "dui-sidebar-compact": compact },
      { "dui-sidebar-compact-labels": compact && showCompactLabels }
    );

    return (
      <div className={sidebarClass}>
        <SideBarMenu>{this.props.children}</SideBarMenu>
      </div>
    );
  }
}
