import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { Accordion, AccordionProps } from './Accordion';

export default {
  title: 'Components/Accordion/Accordion',
  component: Accordion,
  args: {
    title: 'Account',
    expanded: true
  },
  argTypes: { onToggle: { action: 'toggled' } }
} as Meta;

const BaseTemplate: Story<AccordionProps> = args => <Accordion {...args}>Hello</Accordion>;

export const BasicAccordion: Story<AccordionProps> = BaseTemplate.bind({});

export const Nested: Story<AccordionProps> = args => (
  <Accordion {...args}>
    Hello There
    <Accordion {...args}>Hello</Accordion>
  </Accordion>
);

export const Borderless: Story<AccordionProps> = BaseTemplate.bind({});
Borderless.args = {
  borderless: true
};

export const CustomTitle: Story<AccordionProps> = BaseTemplate.bind({});
CustomTitle.args = {
  title: (
    <span className="dui-color-danger">
      <FontAwesomeIcon iconStyle="solid" icon="fa-trash" marginDirection="right" />
      Delete
    </span>
  )
};

// storiesOf('Components/Accordion', module)
//   .add('Basic Accordion', () => (
//     <Accordion
//       title={text('Account', 'Account')}
//       expanded={boolean('expanded', true)}
//       onToggle={action('onToggle')}
//     >
//       Hello
//     </Accordion>
//   ))
//   .add('Nested', () => (
//     <Accordion
//       key="2"
//       title={text('Account', 'Account')}
//       expanded={boolean('expanded', true)}
//       onToggle={action('onToggle')}
//     >
//       Hello There
//       <Accordion
//         key="1"
//         title={text('Account', 'Account')}
//         expanded={boolean('nestedExpanded', true)}
//         onToggle={action('onToggleNested')}
//       >
//         Hello
//       </Accordion>
//     </Accordion>
//   ))
//   .add('Borderless', () => (
//     <Accordion
//       title={text('Account', 'Account')}
//       expanded={boolean('expanded', true)}
//       borderless={boolean('borderless', true)}
//       onToggle={action('onToggle')}
//     >
//       Hello
//     </Accordion>
//   ))
//   .add('Custom Title', () => (
//     <Accordion
//       title={
//         <span className="dui-color-danger">
//           <FontAwesomeIcon iconStyle="solid" icon="fa-trash" marginDirection="right" />
//           Delete
//         </span>
//       }
//       onToggle={action('onToggle')}
//     >
//       Hello
//     </Accordion>
//   ))
//   .add('Group', () => (
//     <AccordionGroup multiExpand={boolean('Multi Expand', false)}>
//       <Accordion
//         title={text('Account', 'Account')}
//         expanded={boolean('expanded', true)}
//         onToggle={action('onToggle')}
//       >
//         Hello
//       </Accordion>
//       <Accordion
//         title={text('Account', 'Account')}
//         expanded={boolean('expanded', true)}
//         onToggle={action('onToggle')}
//       >
//         Hello
//       </Accordion>
//     </AccordionGroup>
//   ))
//   .add('Borderless Group', () => {
//     return (
//       <AccordionGroup
//         accordionProps={{
//           expanded: boolean('expanded', true),
//           borderless: boolean('borderless', true),
//           onToggle: action('onToggle')
//         }}
//       >
//         <Accordion title="This is one">Hello</Accordion>
//         <Accordion title="This is two">Hello</Accordion>
//       </AccordionGroup>
//     );
//   });
