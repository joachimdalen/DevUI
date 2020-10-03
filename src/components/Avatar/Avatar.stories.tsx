import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { Avatar, AvatarProps } from './Avatar';

export default {
  title: 'Display Components/Avatar',
  component: Avatar,
  args: {
    src: '//placehold.it/400x400'
  }
} as Meta;

const BaseTemplate: Story<AvatarProps> = args => <Avatar {...args} />;

export const Default: Story<AvatarProps> = BaseTemplate.bind({});

export const Formats: Story<AvatarProps> = args => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
      gridColumnGap: '10px'
    }}
  >
    <Avatar {...args} />
    <Avatar {...args} format="rounded" />
    <Avatar {...args} format="circle" />
  </div>
);
export const Sizes: Story<AvatarProps> = args => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
      gridColumnGap: '10px'
    }}
  >
    <Avatar {...args} size="small" />
    <Avatar {...args} />
    <Avatar {...args} size="large" />
  </div>
);

export const CustomSizes: Story<AvatarProps> = BaseTemplate.bind({});
CustomSizes.args = {
  width: 150,
  height: 150
};
