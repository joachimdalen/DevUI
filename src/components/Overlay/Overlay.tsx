import * as React from "react";
import cx from "classnames";
import { Color } from "csstype";
export interface OverlayProps {
  className?: string;
  visible: boolean;
  backgroundColor?: Color;
}
export const Overlay: React.FunctionComponent<OverlayProps> = ({
  children,
  visible,
  className, backgroundColor
}) => {
  const baseClass = cx("dui-overlay", className);
  return visible ? <div className={baseClass} style={{ backgroundColor: backgroundColor }}>{children}</div> : null;
};
