import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import variants from '../../storyUtil/variants';
import { CheckBox, CheckBoxProps } from './CheckBox';

export default {
  title: 'Controls/CheckBox',
  component: CheckBox,
  args: {
    label: 'Click Me',
    indicatorLocation: 'left',
    name: 'cb-test'
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: variants,
        default: variants[0]
      }
    },
    onCheckChange: { action: 'clicked' }
  }
} as Meta;

const BaseTemplate: Story<CheckBoxProps> = args => <CheckBox {...args} />;
export const Default: Story<CheckBoxProps> = BaseTemplate.bind({});

export const Indeterminate: Story<CheckBoxProps> = BaseTemplate.bind({});
Indeterminate.args = {
  indeterminate: true
};

export const RightIndicator: Story<CheckBoxProps> = BaseTemplate.bind({});
RightIndicator.args = {
  indicatorLocation: 'right'
};

export const Variants: Story<CheckBoxProps> = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div>
      {variants.map((variant: string) => {
        return <CheckBox key={`normal-${variant}`} label={variant} variant={variant} />;
      })}
    </div>
  </div>
);
