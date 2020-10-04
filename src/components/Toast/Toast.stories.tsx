import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { Toast, ToastProps } from './Toast';
export default {
  title: 'Display Components/Toast',
  component: Toast,
  args: {
    title: 'Changes applied',
    subtitle: 'Your profile was successfully updated',
    time: '24 seconds ago',
    variant: 'blue'
  },
  argTypes: { onDismiss: { action: 'onDismiss' } }
} as Meta;

const BaseTemplate: Story<ToastProps> = args => <Toast {...args} />;

export const Default: Story<ToastProps> = BaseTemplate.bind({});

export const WithIcon: Story<ToastProps> = BaseTemplate.bind({});
WithIcon.args = {
  icon: 'fab fa-twitter fa-3x'
};
