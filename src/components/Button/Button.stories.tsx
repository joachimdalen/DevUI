import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import variants from '../../storyUtil/variants';
import { Flex } from '../Flex/Flex';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Controls/Button/Default',
  component: Button,
  args: {
    label: 'Click Me'
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: variants,
        default: variants[0]
      }
    },
    onClick: { action: 'clicked' }
  }
} as Meta;

const BaseTemplate: Story<ButtonProps> = args => <Button {...args} />;
export const Default: Story<ButtonProps> = BaseTemplate.bind({});
export const BlockButton: Story<ButtonProps> = BaseTemplate.bind({});
BlockButton.args = {
  format: 'block'
};

export const OutlinedButton: Story<ButtonProps> = BaseTemplate.bind({});
OutlinedButton.args = {
  outlined: true
};

export const LinkButton: Story<ButtonProps> = BaseTemplate.bind({});
LinkButton.args = {
  linkButton: true,
  variant: 'secondary'
};

export const DisabledButton: Story<ButtonProps> = BaseTemplate.bind({});
DisabledButton.args = {
  disabled: true
};

export const LoadingButton: Story<ButtonProps> = BaseTemplate.bind({});
LoadingButton.args = {
  loading: true
};

export const IconButton: Story<ButtonProps> = BaseTemplate.bind({});
IconButton.args = {
  icon: 'fas fa-check'
};

export const IconOnlyButton: Story<ButtonProps> = BaseTemplate.bind({});
IconOnlyButton.args = {
  icon: 'fas fa-check',
  iconOnly: true
};

export const Variants: Story<ButtonProps> = () => (
  <Flex gap="small" flexDirection="column">
    <Flex gap="small">
      {variants.map((variant: string) => {
        return <Button key={`normal-${variant}`} label={variant} variant={variant} />;
      })}
    </Flex>
    <Flex gap="small">
      {variants
        .filter(x => x !== 'primary')
        .map(variant => {
          return (
            <Button key={`outlined-${variant}`} label={variant} outlined={true} variant={variant} />
          );
        })}
    </Flex>
  </Flex>
);
