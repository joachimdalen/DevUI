import * as React from "react";
import cx from "classnames";

export type FlexGap = "small" | "medium" | "large";
export type FlexDirection = "row" | "column";

export interface FlexProps {
  gap: FlexGap;
  flexDirection?: FlexDirection;
  children: any;
}

export const Flex = ({ gap, flexDirection = "row", children }: FlexProps) => {
  const classes = cx(
    "dui-flex",
    [`dui-flex-gap-${gap}`],
    [`dui-flex-${flexDirection}`]
  );

  return <div className={classes}>{children}</div>;
};
