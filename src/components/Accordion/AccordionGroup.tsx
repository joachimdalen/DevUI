import cx from 'classnames';
import * as React from 'react';

import { Omit } from '../common';
import { Accordion, AccordionProps } from './Accordion';
export type ParitalAccordionProps = Omit<AccordionProps, 'title'>;
export interface AccordionGroupProps {
  /**
   * Determines if multiple child accordions can be expanded at the same time
   */
  multiExpand?: boolean;

  /**
   * Set of Accordions
   */
  children?: React.ReactElement<Accordion> | React.ReactElement<Accordion>[];

  /**
   * Accordion props to pass down to children
   */
  accordionProps?: ParitalAccordionProps;
}

interface AccordionState {
  expandedItem?: number;
}

export class AccordionGroup extends React.Component<AccordionGroupProps, AccordionState> {
  static defaultProps: Partial<AccordionGroupProps> = {
    multiExpand: true
  };
  state = {
    expandedItem: undefined
  };
  public render(): React.ReactElement {
    const { children, multiExpand, accordionProps, ...rest } = this.props;

    return (
      <div className={cx('dui-accordion-group')} {...rest}>
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
          };

          return React.cloneElement(child, {
            ...accordionProps,
            ...partialProps
          });
        })}
      </div>
    );
  }
}
