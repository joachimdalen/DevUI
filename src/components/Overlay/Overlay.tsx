import * as React from "react";
import cx from "classnames";
interface OverlayProps {
  className?: string;
  visible: boolean;
}
const Overlay: React.FunctionComponent<OverlayProps> = ({
  children,
  visible,
  className
}) => {
  const baseClass = cx("dui-overlay", className);
  return visible ? <div className={baseClass}>{children}</div> : null;
};

export { OverlayProps, Overlay };
