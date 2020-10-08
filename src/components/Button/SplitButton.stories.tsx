import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import variants from '../../storyUtil/variants';
import { SplitButton, SplitButtonProps } from './SplitButton';

export default {
  title: 'Controls/Button/SplitButton',
  component: SplitButton,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: variants,
        default: variants[0]
      }
    },
    onClick: { action: 'clicked' }
  }
} as Meta;

export const Default: Story<SplitButtonProps> = args => (
  <SplitButton label="Save & Close" icon="fa-save" {...args} />
);
Default.args = {
  actions: [
    { label: 'Option 1', variant: 'blue' },
    { label: 'Option 2', variant: 'danger', iconOnly: true, icon: 'fas fa-cog' },
    { label: 'Option 3', variant: 'success', disabled: true },
    { label: 'Option 4', variant: 'magenta', icon: 'fas fa-cog' }
  ]
};
