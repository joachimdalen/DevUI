import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import variants from '../../storyUtil/variants';
import { RadioButton, RadioButtonProps } from './RadioButton';

export default {
  title: 'Controls/RadioButton',
  component: RadioButton,
  args: {
    label: 'Check me'
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: variants,
        default: variants[0]
      }
    },
    onCheckChange: { action: 'onCheckChange' }
  }
} as Meta;

const BaseTemplate: Story<RadioButtonProps> = args => <RadioButton {...args} />;

export const Default: Story<RadioButtonProps> = BaseTemplate.bind({});

export const Variants: Story<RadioButtonProps> = args => (
  <div style={{ backgroundColor: 'white', display: 'inline-flex' }}>
    {variants.map((variant: string) => {
      return (
        <RadioButton
          key={variant}
          label={variant}
          checked={true}
          onCheckChange={console.log}
          variant={variant}
        />
      );
    })}
  </div>
);
