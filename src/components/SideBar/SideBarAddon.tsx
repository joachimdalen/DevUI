import cx from 'classnames';
import * as React from 'react';

export interface SideBarAddonProps {
  className?: string;
  children?: React.ReactNode;
}
export const SideBarAddon: React.FunctionComponent<SideBarAddonProps> = ({
  children,
  className
}: SideBarAddonProps) => <div className={cx('dui-sidebar-addon', className)}>{children}</div>;
