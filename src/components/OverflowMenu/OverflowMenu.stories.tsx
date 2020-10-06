import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { OverflowMenu, OverflowMenuProps } from './OverflowMenu';
import { OverflowMenuItem } from './OverflowMenuItem';

export default {
  title: 'Controls/OverflowMenu',
  component: OverflowMenu
} as Meta;

export const Default: Story<OverflowMenuProps> = args => (
  <OverflowMenu {...args}>
    <OverflowMenuItem>
      <FontAwesomeIcon icon="fa-edit" iconStyle="regular" marginDirection="right" />
      Edit
    </OverflowMenuItem>
    <OverflowMenuItem>
      <FontAwesomeIcon icon="fa-eye" iconStyle="regular" marginDirection="right" />
      View
    </OverflowMenuItem>
    <OverflowMenuItem>
      <FontAwesomeIcon icon="fa-trash-alt" iconStyle="solid" marginDirection="right" />
      Delete
    </OverflowMenuItem>
  </OverflowMenu>
);

export const CustomButtonProps: Story<OverflowMenuProps> = args => (
  <OverflowMenu {...args}>
    <OverflowMenuItem>
      <FontAwesomeIcon icon="fa-edit" iconStyle="regular" marginDirection="right" />
      Edit
    </OverflowMenuItem>
    <OverflowMenuItem>
      <FontAwesomeIcon icon="fa-eye" iconStyle="regular" marginDirection="right" />
      View
    </OverflowMenuItem>
    <OverflowMenuItem>
      <FontAwesomeIcon icon="fa-trash-alt" iconStyle="solid" marginDirection="right" />
      Delete
    </OverflowMenuItem>
  </OverflowMenu>
);
CustomButtonProps.args = {
  triggerButtonProps: {
    variant: 'primary',
    label: 'View Menu'
  }
};

export const Position: Story<OverflowMenuProps> = args => (
  <OverflowMenu {...args}>
    <OverflowMenuItem>
      <FontAwesomeIcon icon="fa-edit" iconStyle="regular" marginDirection="right" />
      Edit
    </OverflowMenuItem>
    <OverflowMenuItem>
      <FontAwesomeIcon icon="fa-eye" iconStyle="regular" marginDirection="right" />
      View
    </OverflowMenuItem>
    <OverflowMenuItem>
      <FontAwesomeIcon icon="fa-trash-alt" iconStyle="solid" marginDirection="right" />
      Delete
    </OverflowMenuItem>
  </OverflowMenu>
);
Position.args = {
  menuLocation: 'bottomRight'
};
