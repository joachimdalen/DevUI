import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import variants from '../../storyUtil/variants';
import { SplitButton } from './SplitButton';
import { SplitButtonAction, SplitButtonActionProps } from './SplitButtonAction';

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

export const Default: Story<SplitButtonActionProps> = args => (
  <SplitButton label="Save & Close" icon="fa-save" {...args}>
    <SplitButtonAction label="Hello" />
    <SplitButtonAction label="Hello1" />
    <SplitButtonAction label="Hello2" />
  </SplitButton>
);
