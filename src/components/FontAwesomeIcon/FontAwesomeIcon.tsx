import * as React from "react";
import cx from "classnames";
export interface Props {
  icon: string;
  margin?: boolean;
  marginDirection?: "left" | "right";
  animate?: boolean;
  animationType?: "spin" | "pulse";
}

const FontAwesomeIcon = ({
  icon,
  margin = false,
  marginDirection,
  animate = false,
  animationType
}: Props) => {
  const animationClass = animationType === "spin" ? "fa-spin" : "fa-pulse";
  const marginClass =
    marginDirection === "left" ? "cui-icon-ml" : "cui-icon-mr";
  return (
    <i
      className={cx(
        "cui-icon",
        icon,
        { [animationClass]: animate },
        { [marginClass]: margin }
      )}
    />
  );
};
export default FontAwesomeIcon;
