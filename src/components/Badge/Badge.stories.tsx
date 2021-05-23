import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import variants from '../../storyUtil/variants';
import { Flex } from '../Flex/Flex';
import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { Badge, BadgeProps } from './Badge';

export default {
  title: 'Display Components/Badge',
  component: Badge,
  args: {
    label: 'Badge Label'
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: variants,
        default: variants[0]
      }
    }
  }
} as Meta;

const BaseTemplate: Story<BadgeProps> = args => <Badge {...args} />;

export const Default: Story<BadgeProps> = BaseTemplate.bind({});

export const Dismissible: Story<BadgeProps> = BaseTemplate.bind({});
Dismissible.argTypes = { onDismiss: { action: 'dismissed' } };

export const CustomDismissIcon: Story<BadgeProps> = BaseTemplate.bind({});
CustomDismissIcon.args = {
  dismissText: <FontAwesomeIcon iconStyle="solid" icon="fa-egg" />
};

export const CustomIcon: Story<BadgeProps> = BaseTemplate.bind({});
CustomIcon.args = {
  icon: 'fa-check'
};

export const CustomIconComponent: Story<BadgeProps> = BaseTemplate.bind({});
CustomIconComponent.args = {
  icon: <FontAwesomeIcon icon="fa-discord" iconStyle="brands" />
};

export const Variants: Story<BadgeProps> = () => (
  <Flex flexDirection="column" gap="small">
    <Flex align="center">
      <h3>Light</h3>
      {variants.map(variant => {
        return (
          <Badge
            labelStyle="uppercase"
            key={`light-${variant}`}
            style="light"
            label={variant}
            variant={variant}
          />
        );
      })}
    </Flex>
    <Flex align="center">
      <h3>Solid</h3>
      {variants.map(variant => {
        return (
          <Badge
            labelStyle="uppercase"
            key={`solid-${variant}`}
            style="solid"
            label={variant}
            variant={variant}
          />
        );
      })}
    </Flex>
    <Flex align="center">
      <h3>Outline</h3>
      {variants.map(variant => {
        return (
          <Badge
            labelStyle="uppercase"
            key={`outline-${variant}`}
            style="outline"
            label={variant}
            variant={variant}
          />
        );
      })}
    </Flex>
  </Flex>
);
