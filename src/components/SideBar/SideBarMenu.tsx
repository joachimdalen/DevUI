import * as React from "react";
import cx from "classnames";
export interface SideBarMenuProps {
  className?: string;
}

export const SideBarMenu: React.FunctionComponent<SideBarMenuProps> = ({
  children,
  className,
}) => <div className={cx("dui-sidebar-menu", className)}>{children}</div>;
