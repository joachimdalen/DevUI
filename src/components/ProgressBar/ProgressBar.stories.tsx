import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { ProgressBar, ProgressBarProps } from './ProgressBar';

export default {
  title: 'Display Components/ProgressBar',
  component: ProgressBar,
  args: {
    completed: 77
  }
} as Meta;

const BaseTemplate: Story<ProgressBarProps> = args => <ProgressBar {...args} />;

export const Default: Story<ProgressBarProps> = BaseTemplate.bind({});

export const Striped: Story<ProgressBarProps> = BaseTemplate.bind({});
Striped.args = {
  striped: true,
  variant: 'purple'
};

export const Animated: Story<ProgressBarProps> = BaseTemplate.bind({});
Animated.args = {
  striped: true,
  animated: true,
  variant: 'purple'
};

export const WithTitle: Story<ProgressBarProps> = BaseTemplate.bind({});
WithTitle.args = {
  variant: 'success',
  title: 'Downloading asset files..'
};
