import * as React from "react";

export interface RibbonTabProps {
  children: React.ReactElement | React.ReactElement[];
}
export const RibbonTab = ({ children }: RibbonTabProps) => {
  return <div className="dui-ribbon-items"> {children}</div>;
};
