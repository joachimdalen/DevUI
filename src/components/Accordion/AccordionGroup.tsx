import * as React from "react";
import cx from "classnames";
import { Accordion } from "./Accordion";

export interface AccordionGroupProps {
  multiExpand?: boolean;
  children?: React.ReactElement<Accordion> | React.ReactElement<Accordion>[];
}
interface AccordionState {

}

export class AccordionGroup extends React.Component<AccordionGroupProps, AccordionState> {
  static defaultProps: Partial<AccordionGroupProps> = {
    multiExpand: true
  }

  public render() {
    const { children } = this.props;

    return (
      <div className={cx("dui-accordion-group")}>
        {children}
      </div>
    );
  }
}
