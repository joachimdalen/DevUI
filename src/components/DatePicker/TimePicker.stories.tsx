import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { TimePicker, TimePickerProps } from './TimePicker';

export default {
  title: 'Display Components/DateTime/TimePicker',
  component: TimePicker,
  args: {
    date: new Date(),
    onChange: i => console.log(i)
  }
} as Meta;

const BaseTemplate: Story<TimePickerProps> = args => <TimePicker {...args} />;
export const Default: Story<TimePickerProps> = BaseTemplate.bind({});
