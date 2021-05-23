import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { Button } from '../Button/Button';
import { DatePickerInput } from '../DatePicker/DatePickerInput';
import { Flex } from '../Flex/Flex';
import { Select } from '../Select/Select';
import { TagInput } from '../TagInput/TagInput';
import { TextArea } from '../TextArea/TextArea';
import { TextInput } from '../TextInput/TextInput';
import { FormGroup, FormGroupProps } from './FormGroup';

export default {
  title: 'Components/FormGroup',
  component: FormGroup,
  args: {
    label: 'Username'
  }
} as Meta;

export const Default: Story<FormGroupProps> = args => (
  <FormGroup {...args}>
    <TextInput value="johndoe" fillWidth />
  </FormGroup>
);
export const Required: Story<FormGroupProps> = args => (
  <FormGroup {...args}>
    <TextInput value="johndoe" fillWidth />
  </FormGroup>
);
Required.args = {
  required: true,
  requiredType: 'icon'
};

export const InlineControls: Story<FormGroupProps> = args => (
  <FormGroup {...args}>
    <TextInput value="johndoe" fillWidth />
    <Button iconOnly icon="fas fa-save" variant="success" />
  </FormGroup>
);
InlineControls.args = {
  extra: 'This is the username you used when signing up'
};

export const InlineLabel: Story<FormGroupProps> = args => (
  <FormGroup {...args}>
    <TextInput value="johndoe" fillWidth />
    <Button icon="fas fa-save" variant="success" iconOnly />
  </FormGroup>
);
InlineControls.args = {
  inline: true,
  inlineLabel: true
};

export const Extra: Story<FormGroupProps> = args => (
  <FormGroup {...args}>
    <TextInput value="johndoe" fillWidth />
  </FormGroup>
);
export const WithCounter: Story<FormGroupProps> = args => (
  <FormGroup {...args}>
    <TextInput value="johndoe" fillWidth />
  </FormGroup>
);

WithCounter.args = {
  maxLength: 300,
  currentLength: 300,
  extra: 'This is the username you used when signing up'
};

export const WithError: Story<FormGroupProps> = args => (
  <Flex flexDirection="column" gap="medium">
    <Flex gap="medium">
      <FormGroup
        label="Username"
        error={{ code: 400, message: 'Username is already taken' }}
        errorAccessor={error => error.message}
      >
        <TextInput value="johndoe" fillWidth />
      </FormGroup>
      <FormGroup
        label="Age"
        error={{ message: 'Please select your age' }}
        errorAccessor={error => error.message}
      >
        <Select onChange={() => console.log('')} label="Age" />
      </FormGroup>
    </Flex>
    <FormGroup
      label="Message"
      error={{ message: 'Please write your message' }}
      errorAccessor={error => error.message}
    >
      <TextArea onChange={() => console.log('')} />
    </FormGroup>
    <FormGroup
      label="Tags"
      error={{ message: 'Please select the relevant tags' }}
      errorAccessor={error => error.message}
    >
      <TagInput />
    </FormGroup>
    <FormGroup
      label="Date"
      error={{ message: 'Date is a required field' }}
      errorAccessor={error => error.message}
    >
      <DatePickerInput onChange={() => console.log()} />
    </FormGroup>
  </Flex>
);
