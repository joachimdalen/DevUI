import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { Button } from '../Button/Button';
import { Empty, EmptyProps } from './Empty';

export default {
  title: 'Display Components/Empty',
  component: Empty,
  args: {
    header: 'This is the header',
    image: 'https://brdv.coffee/storage/uploads/3/46b95d03-1eda-42d9-aba9-e7e083c8332a.png'
  },
  argTypes: { onClick: { action: 'onClick' } }
} as Meta;

const BaseTemplate: Story<EmptyProps> = args => <Empty {...args} />;
export const Default: Story<EmptyProps> = BaseTemplate.bind({});
export const WithDescription: Story<EmptyProps> = BaseTemplate.bind({});
WithDescription.args = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
};
export const CustomDescriptionComponent: Story<EmptyProps> = BaseTemplate.bind({});
CustomDescriptionComponent.args = {
  description: (
    <span>
      Click <a href="#">here</a> for more info
    </span>
  )
};
export const WithActions: Story<EmptyProps> = BaseTemplate.bind({});
WithActions.args = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  primaryAction: <Button label="Primary Action" variant="blue" size="small" />,
  secondaryAction: <Button label="Secondary action" variant="secondary" size="small" />,
  tertiaryAction: (
    <Button
      linkButton
      component="a"
      componentProps={{ href: '#' }}
      variant="magenta"
      label="Tertiary Action"
    />
  )
};
