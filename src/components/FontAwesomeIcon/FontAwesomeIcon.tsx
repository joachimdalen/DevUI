import * as React from "react";
import cx from "classnames";
export interface Props {
  icon: string;
  margin?: boolean;
  marginDirection?: "left" | "right";
  animate?: boolean;
  animationType?: "spin" | "pulse";
  size?: "normal" | "large" | "xlarge";
}

const FontAwesomeIcon = ({
  icon,
  margin = false,
  marginDirection,
  animate = false,
  animationType,
  size = "normal"
}: Props) => {
  const animationClass = animationType === "spin" ? "fa-spin" : "fa-pulse";
  const marginClass =
    marginDirection === "left" ? "cui-icon-ml" : "cui-icon-mr";
  const isDefaultSize = size === "normal";
  const sizeClass = isDefaultSize ? "" : size === "large" ? "fa-2x" : "fa-3x";
  return (
    <i
      className={cx(
        "cui-icon",
        icon,
        sizeClass,
        { [animationClass]: animate },
        { [marginClass]: margin }
      )}
    />
  );
};
export default FontAwesomeIcon;
