import * as React from "react";
import cx from "classnames";
interface OverflowMenuItemProps {
  className?: string;
  onClick?: () => void;
  children: any;
}
const OverflowMenuItem = ({
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
export { OverflowMenuItem, OverflowMenuItemProps };
