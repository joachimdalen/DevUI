import * as React from "react";
import cx from "classnames";
export interface Props {
  icon: string;
  margin?: boolean;
  marginDirection?: "left" | "right";
  animate?: boolean;
  animationType?: "spin" | "pulse";
  size?: "normal" | "large" | "xlarge";
  className?: string;
}

const FontAwesomeIcon = ({
  icon,
  margin = false,
  marginDirection,
  animate = false,
  animationType,
  size = "normal",
  className = ""
}: Props) => {
  const animationClass = animationType === "spin" ? "fa-spin" : "fa-pulse";
  const marginClass =
    marginDirection === "left" ? "dui-icon-ml" : "dui-icon-mr";
  const isDefaultSize = size === "normal";
  const sizeClass = isDefaultSize ? "" : size === "large" ? "fa-2x" : "fa-3x";
  return (
    <i
      className={cx(
        "dui-icon",
        className,
        icon,
        sizeClass,
        { [animationClass]: animate },
        { [marginClass]: margin }
      )}
    />
  );
};
export default FontAwesomeIcon;
