import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { Drawer, DrawerProps } from './Drawer';

export default {
  title: 'Layout/Drawer',
  component: Drawer,
  args: { width: 400, visible: true },
  argTypes: { onClose: { action: 'onClose' } }
} as Meta;

export const Default: Story<DrawerProps> = args => (
  <Drawer {...args}>
    <h1>Hello</h1>
  </Drawer>
);
