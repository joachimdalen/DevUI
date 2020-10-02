import cx from 'classnames';
import * as React from 'react';

import { SideBarAddon } from './SideBarAddon';
import { SideBarMenu } from './SideBarMenu';
interface IState {}

export type SideBarAddonLocation = 'top' | 'bottom';
export interface SideBarProps {
  className?: string;
  compact?: boolean;
  showCompactLabels?: boolean;
  animate?: boolean;
  addon?: React.ReactElement<typeof SideBarAddon>;
  addonLocation?: SideBarAddonLocation;
}

export class SideBar extends React.Component<SideBarProps, IState> {
  static defaultProps: Partial<SideBarProps> = {
    compact: false,
    animate: false
  };
  render() {
    const { className, compact, animate, showCompactLabels, addon, addonLocation } = this.props;
    const sidebarClass = cx(
      'dui-sidebar',
      className,
      { 'dui-sidebar-compact': compact },
      { 'dui-sidebar-animate': animate && !compact },
      { 'dui-sidebar-compact-labels': compact && showCompactLabels }
    );
    const shouldShowAddon = compact === false && React.isValidElement(addon);
    return (
      <div className={sidebarClass}>
        {shouldShowAddon && addonLocation === 'top' && addon}
        <SideBarMenu>{this.props.children}</SideBarMenu>
        {shouldShowAddon && addonLocation === 'bottom' && addon}
      </div>
    );
  }
}
