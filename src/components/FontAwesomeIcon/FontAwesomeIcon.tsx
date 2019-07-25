import * as React from "react";
import cx from "classnames";
export interface FontAwesomeIconProps {
  icon: string;
  animate?: boolean;
  fixedWidth?: boolean;
  className?: string;
  size?: FAISize;
  iconStyle: FAIStyle;
  marginDirection?: FAIMarginDirection;
  animationType?: FAIAnimationType;
  onClick?: () => void;
}
export type FAIMarginDirection = "left" | "right";
export type FAIAnimationType = "spin" | "pulse";
export type FAISize = "normal" | "large" | "xlarge";
export type FAIStyle = "solid" | "regular" | "light" | "brands";

const _typeFromStyle = (style: FAIStyle) => {
  switch (style) {
    case "solid":
      return "fas";
    case "regular":
      return "far";
    case "light":
      return "fal";
    case "brands":
      return "fab";
  }
};
const _sizeClassFromSize = (size: FAISize) => {
  switch (size) {
    case "large":
      return "fa-2x";
    case "normal":
      return "";
    case "xlarge":
      return "fa-3x";
  }
};

const FontAwesomeIcon = ({
  icon,
  marginDirection,
  animate = false,
  animationType,
  size = "normal",
  className = "",
  fixedWidth,
  iconStyle,
  onClick
}: FontAwesomeIconProps) => {
  const animationClass = animationType === "spin" ? "fa-spin" : "fa-pulse";
  const marginClass =
    marginDirection === "left" ? "dui-icon-ml" : "dui-icon-mr";
  const sizeClass = _sizeClassFromSize(size);

  return (
    <i
      onClick={onClick}
      className={cx(
        "dui-icon",
        { "fa-fw": fixedWidth },
        className,
        _typeFromStyle(iconStyle),
        icon,
        sizeClass,
        { [animationClass]: animate },
        { [marginClass]: marginDirection }
      )}
    />
  );
};
export default FontAwesomeIcon;
