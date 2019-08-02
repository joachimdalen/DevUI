import * as React from "react";
import cx from "classnames";
import { Accordion, AccordionProps } from "./Accordion";
import { Omit } from '../common';
export type ParitalAccordionProps = Omit<AccordionProps, "title">;
export interface AccordionGroupProps {
  multiExpand?: boolean;
  children?: React.ReactElement<Accordion> | React.ReactElement<Accordion>[];
  accordionProps?: ParitalAccordionProps;
}

interface AccordionState {
  expandedItem?: number;
}

export class AccordionGroup extends React.Component<AccordionGroupProps, AccordionState> {
  static defaultProps: Partial<AccordionGroupProps> = {
    multiExpand: true
  }
  state = {
    expandedItem: undefined
  }
  public render() {
    const { children, multiExpand, accordionProps, ...rest } = this.props;

    return (
      <div className={cx("dui-accordion-group")}{...rest}>
        {React.Children.map(children, (child: any, index: number) => {
          const partialProps: ParitalAccordionProps = {
            onToggle: (status: boolean) => {
              if (!multiExpand) {
                if (status) {
                  this.setState({ expandedItem: index });
                } else {
                  this.setState({ expandedItem: undefined });
                }
              }
            },
            expanded: this.state.expandedItem === index || false
          }
          return React.cloneElement(child, {
            ...accordionProps, ...partialProps
          })
        })}
      </div>
    );
  }
}
