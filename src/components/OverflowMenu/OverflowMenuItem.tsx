import * as React from "react";
import cx from "classnames";
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
}: OverflowMenuItemProps) => (
  <div
    className={cx("dui-overflow-menu-item", className)}
    onClick={onClick}
    {...rest}
  >
    {children}
  </div>
);
