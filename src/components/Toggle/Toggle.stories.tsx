import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import variants from '../../storyUtil/variants';
import { Toggle, ToggleProps } from './Toggle';

export default {
  title: 'Display Components/Toggle',
  component: Toggle,
  args: {
    toggled: true
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: variants,
        default: variants[0]
      }
    },
    onToggle: { action: 'toggled' }
  }
} as Meta;

const BaseTemplate: Story<ToggleProps> = args => <Toggle {...args} />;

export const Default: Story<ToggleProps> = BaseTemplate.bind({});

export const Disabled: Story<ToggleProps> = BaseTemplate.bind({});
Disabled.args = {
  disabled: true
};

export const Rounded: Story<ToggleProps> = BaseTemplate.bind({});
Rounded.args = {
  rounded: true
};

export const Large: Story<ToggleProps> = BaseTemplate.bind({});
Large.args = {
  size: 'large'
};

export const WithLabels: Story<ToggleProps> = BaseTemplate.bind({});
WithLabels.args = {
  showLabels: true
};

export const Variants: Story<ToggleProps> = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div>
      {variants.map(variant => {
        return (
          <Toggle
            key={`normal-block-${variant}`}
            variant={variant}
            toggled
            onToggle={console.log}
          />
        );
      })}
    </div>
    <div style={{ marginTop: '10px' }}>
      {variants.map(variant => {
        return (
          <Toggle
            key={`large-rounded-${variant}`}
            variant={variant}
            rounded={true}
            toggled
            onToggle={console.log}
          />
        );
      })}
    </div>
    <div style={{ marginTop: '10px' }}>
      {variants.map(variant => {
        return (
          <Toggle
            key={`large-block-${variant}`}
            variant={variant}
            size="large"
            toggled
            onToggle={console.log}
          />
        );
      })}
    </div>
    <div style={{ marginTop: '10px' }}>
      {variants.map(variant => {
        return (
          <Toggle
            key={`large-rounded-${variant}`}
            variant={variant}
            size="large"
            rounded={true}
            toggled
            onToggle={console.log}
          />
        );
      })}
    </div>
  </div>
);
