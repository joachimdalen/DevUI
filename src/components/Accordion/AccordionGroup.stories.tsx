import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { Accordion, AccordionProps } from './Accordion';
import { AccordionGroup, AccordionGroupProps } from './AccordionGroup';

export default {
  title: 'Components/Accordion/AccordionGroup',
  component: AccordionGroup,
  args: {
    accordionProps: {
      title: 'Account',
      expanded: true
    }
  },
  argTypes: { onToggle: { action: 'toggled' } }
} as Meta;

export const Group: Story<AccordionGroupProps> = args => (
  <AccordionGroup {...args}>
    <Accordion {...(args.accordionProps as AccordionProps)}>Hello</Accordion>
    <Accordion {...(args.accordionProps as AccordionProps)}>Hello</Accordion>
  </AccordionGroup>
);
