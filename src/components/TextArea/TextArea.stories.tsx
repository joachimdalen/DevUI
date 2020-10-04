import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { TextArea, TextAreaProps } from './TextArea';

export default {
  title: 'Controls/TextArea',
  component: TextArea
} as Meta;

const BaseTemplate: Story<TextAreaProps> = args => <TextArea {...args} />;

export const Default: Story<TextAreaProps> = BaseTemplate.bind({});
