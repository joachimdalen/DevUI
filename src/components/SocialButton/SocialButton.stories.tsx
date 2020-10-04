import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { SocialButton, SocialButtonProps } from './SocialButton';

export default {
  title: 'Controls/SocialButton',
  component: SocialButton,
  args: {
    provider: 'GitHub',
    text: 'Sign in with GitHub'
  }
} as Meta;

const BaseTemplate: Story<SocialButtonProps> = args => <SocialButton {...args} />;

export const Default: Story<SocialButtonProps> = BaseTemplate.bind({});

export const IconOnly: Story<SocialButtonProps> = BaseTemplate.bind({});
IconOnly.args = {
  iconOnly: true
};
