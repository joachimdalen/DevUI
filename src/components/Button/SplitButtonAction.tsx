import * as React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "../FontAwesomeIcon/FontAwesomeIcon";

export interface SplitButtonActionProps {
  label: string;
  icon?: string;
  onClick: () => void;
  className?: string;
}

const SplitButtonAction = ({
  label,
  icon,
  onClick,
  className
}: SplitButtonActionProps) => (
  <div
    className={cx("dui-split-button-actions-item", className)}
    onClick={onClick}
  >
    {icon && <FontAwesomeIcon icon={icon} iconStyle="solid" />}
    {label}
  </div>
);

export { SplitButtonAction };
