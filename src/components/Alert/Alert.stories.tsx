import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { Alert, AlertProps } from './Alert';

export default {
  title: 'Display Components/Alert',
  component: Alert,
  args: {
    message: 'This is the message',
    description: 'This is the description',
    variant: 'info'
  },
  argTypes: { onToggle: { action: 'toggled' } }
} as Meta;

const BaseTemplate: Story<AlertProps> = args => <Alert {...args} />;

export const BasicAccordion: Story<AlertProps> = BaseTemplate.bind({});

export const WithIcon: Story<AlertProps> = BaseTemplate.bind({});
WithIcon.args = {
  withIcon: true
};
