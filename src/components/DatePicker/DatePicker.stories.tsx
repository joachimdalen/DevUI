import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { DatePicker, DatePickerProps } from './DatePicker';

export default {
  title: 'Display Components/DateTime/DatePicker',
  component: DatePicker,
  args: {
    date: new Date(),
    onChange: i => console.log(i)
  }
} as Meta;

const BaseTemplate: Story<DatePickerProps> = args => <DatePicker {...args} />;
export const Default: Story<DatePickerProps> = BaseTemplate.bind({});
