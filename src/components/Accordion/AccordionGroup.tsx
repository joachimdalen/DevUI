import * as React from "react";
import cx from "classnames";
import { Accordion, AccordionProps } from "./Accordion";
import { Omit } from '../common';
export interface AccordionGroupProps {
  multiExpand?: boolean;
  children?: React.ReactElement<Accordion> | React.ReactElement<Accordion>[];
  accordionProps?: Omit<AccordionProps, "title">;
}
interface AccordionState {

}

export class AccordionGroup extends React.Component<AccordionGroupProps, AccordionState> {
  static defaultProps: Partial<AccordionGroupProps> = {
    multiExpand: true
  }

  public render() {
    const { children, multiExpand, accordionProps, ...rest } = this.props;

    return (
      <div className={cx("dui-accordion-group")}{...rest}>
        {React.Children.map(children, (child: any) => {
          return React.cloneElement(child, accordionProps)
        })}
      </div>
    );
  }
}
