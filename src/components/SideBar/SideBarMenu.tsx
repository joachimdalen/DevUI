import cx from 'classnames';
import * as React from 'react';
export interface SideBarMenuProps {
  className?: string;
  children?: React.ReactNode;
}

export const SideBarMenu: React.FunctionComponent<SideBarMenuProps> = ({
  children,
  className
}: SideBarMenuProps) => <div className={cx('dui-sidebar-menu', className)}>{children}</div>;
