import cx from 'classnames';
import * as React from 'react';
export interface SideBarAddonProps {
  className?: string;
}
export const SideBarAddon: React.FunctionComponent<SideBarAddonProps> = ({
  children,
  className
}) => <div className={cx('dui-sidebar-addon', className)}>{children}</div>;
