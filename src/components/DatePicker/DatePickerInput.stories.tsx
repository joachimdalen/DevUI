import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { DatePickerInput, DatePickerInputProps } from './DatePickerInput';

export default {
  title: 'Display Components/DateTime/DatePickerInput',
  component: DatePickerInput,
  args: {
    placeholder: 'Select a date',
    onChange: i => console.log(i)
  }
} as Meta;

const BaseTemplate: Story<DatePickerInputProps> = args => <DatePickerInput {...args} />;
export const Default: Story<DatePickerInputProps> = BaseTemplate.bind({});
