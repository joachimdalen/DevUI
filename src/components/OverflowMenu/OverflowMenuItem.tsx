import cx from 'classnames';
import * as React from 'react';
export interface OverflowMenuItemProps {
  className?: string;
  onClick?: () => void;
  children: any;
}
export const OverflowMenuItem = ({
  className,
  children,
  onClick,
  ...rest
}: OverflowMenuItemProps): React.ReactElement => (
  <div className={cx('dui-overflow-menu-item', className)} onClick={onClick} {...rest}>
    {children}
  </div>
);
