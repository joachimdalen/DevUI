import cx from 'classnames';
import * as React from 'react';
export interface SideBarMenuProps {
  className?: string;
}

export const SideBarMenu: React.FunctionComponent<SideBarMenuProps> = ({ children, className }) => (
  <div className={cx('dui-sidebar-menu', className)}>{children}</div>
);
