import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { TextInput, TextInputProps } from './TextInput';

export default {
  title: 'Controls/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Type a text...'
  },
  argTypes: { onChange: { action: 'onChange' } }
} as Meta;

const BaseTemplate: Story<TextInputProps> = args => <TextInput {...args} />;

export const Default: Story<TextInputProps> = BaseTemplate.bind({});

export const WithIcon: Story<TextInputProps> = BaseTemplate.bind({});
WithIcon.args = {
  icon: <FontAwesomeIcon iconStyle="solid" icon="fa-check" />
};

export const Clearable: Story<TextInputProps> = BaseTemplate.bind({});
Clearable.args = {
  icon: <FontAwesomeIcon iconStyle="solid" icon="fa-check" />,
  clearable: true,
  value: 'My text'
};
