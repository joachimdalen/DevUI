import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { NumberInput, NumberInputProps } from './NumberInput';

export default {
  title: 'Controls/NumberInput',
  component: NumberInput,
  args: {
    step: 1,
    value: 0
  },
  argTypes: { onChange: { action: 'onChange' } }
} as Meta;

const BaseTemplate: Story<NumberInputProps> = args => <NumberInput {...args} />;

export const Default: Story<NumberInputProps> = BaseTemplate.bind({});
