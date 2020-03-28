import * as React from "react";
import cx from "classnames";

export type FlexGap = "small" | "medium" | "large";
export type FlexDirection = "row" | "column";
export type FlexWrap = "wrap" | "reverse";
export type FlexJustify =
  | "flexStart"
  | "flexEnd"
  | "center"
  | "between"
  | "around"
  | "evenly"
  | "start"
  | "end";

export interface FlexProps {
  gap: FlexGap;
  wrap?: FlexWrap;
  justify?: FlexJustify;
  flexDirection?: FlexDirection;
  children: any;
}

const getWrapClass = (wrap?: FlexWrap): string => {
  switch (wrap) {
    case "reverse":
      return "dui-flex-wrap-reverse";
    case "wrap":
      return "dui-flex-wrap";
    default:
      return "";
  }
};
const getJustifyClass = (justify?: FlexJustify): string => {
  switch (justify) {
    case "flexStart":
      return "dui-justify-flex-start";
    case "flexEnd":
      return "dui-justify-flex-end";
    case "center":
      return "dui-justify-center";
    case "between":
      return "dui-justify-between";
    case "around":
      return "dui-justify-around";
    case "evenly":
      return "dui-justify-evenly";
    case "start":
      return "dui-justify-start";
    case "end":
      return "dui-justify-end";

    default:
      return "";
  }
};

export const Flex = ({
  gap,
  flexDirection = "row",
  wrap,
  justify,
  children
}: FlexProps) => {
  const classes = cx(
    "dui-flex",
    [`dui-flex-gap-${gap}`],
    [`dui-flex-${flexDirection}`],
    getWrapClass(wrap),
    getJustifyClass(justify)
  );

  return <div className={classes}>{children}</div>;
};
