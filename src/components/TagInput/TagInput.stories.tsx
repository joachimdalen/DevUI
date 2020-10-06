import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { TagInput, TagInputProps } from './TagInput';

export default {
  title: 'Controls/TagInput',
  component: TagInput,
  argTypes: { onChange: { action: 'onChange' } }
} as Meta;

const BaseTemplate: Story<TagInputProps> = args => <TagInput {...args} />;

export const Default: Story<TagInputProps> = BaseTemplate.bind({});

export const FixedTags: Story<TagInputProps> = BaseTemplate.bind({});
FixedTags.args = {
  initialTags: [{ value: 'Hello', removeable: false }]
};

export const CustomBadgeProps: Story<TagInputProps> = BaseTemplate.bind({});
CustomBadgeProps.args = {
  initialTags: [{ value: 'Hello', removeable: false }],
  badgeProps: { variant: 'blue' }
};
