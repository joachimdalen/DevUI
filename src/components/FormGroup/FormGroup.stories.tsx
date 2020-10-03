import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Button } from '../Button/Button';
import { Flex } from '../Flex/Flex';
import { Select } from '../Select/Select';
import { TagInput } from '../TagInput/TagInput';
import { TextArea } from '../TextArea/TextArea';
import { TextInput } from '../TextInput/TextInput';
import { FormGroup, FormGroupExtraType, FormGroupRequiredType } from './FormGroup';

storiesOf('Components|FormGroup', module)
  .add('Default', () => (
    <FormGroup label="Username">
      <TextInput value="devexer" onChange={action('onChange')} fillWidth />
    </FormGroup>
  ))
  .add('Required', () => (
    <FormGroup
      label="Username"
      required={boolean('required', true)}
      requiredType={select('Required Type', ['icon', 'text'], 'icon') as FormGroupRequiredType}
    >
      <TextInput value="devexer" onChange={action('onChange')} fillWidth />
    </FormGroup>
  ))
  .add('Inline Controls', () => (
    <FormGroup
      label="Username"
      inline
      extra={text('Extra', 'This is the username you used when signing up')}
    >
      <TextInput value="devexer" onChange={action('onChange')} fillWidth />
      <Button iconOnly icon="fas fa-save" variant="success" onClick={action('onClick')} />
    </FormGroup>
  ))
  .add('Inline label', () => (
    <FormGroup
      label="Username"
      inline={boolean('Inline', true)}
      inlineLabel={boolean('Inline Label', true)}
    >
      <TextInput value="devexer" onChange={action('onChange')} fillWidth />
      <Button icon="fas fa-save" variant="success" iconOnly onClick={action('onClick')} />
    </FormGroup>
  ))
  .add('Extra', () => (
    <FormGroup
      label="Username"
      extra={text('Extra', 'This is the username you used when signing up')}
      extraType={
        select(
          'ExtraType',
          ['success', 'normal', 'danger', 'warning'],
          'normal'
        ) as FormGroupExtraType
      }
    >
      <TextInput value="devexer" onChange={action('onChange')} fillWidth />
    </FormGroup>
  ))
  .add('With counter', () => (
    <FormGroup
      label="Username"
      extra={text('Extra', 'This is the username you used when signing up')}
      extraType={
        select(
          'ExtraType',
          ['success', 'normal', 'danger', 'warning'],
          'normal'
        ) as FormGroupExtraType
      }
      maxLength={100}
      currentLength={300}
    >
      <TextInput value="devexer" onChange={action('onChange')} fillWidth />
    </FormGroup>
  ))
  .add('With Error', () => (
    <Flex flexDirection="column" gap="medium">
      <Flex gap="medium">
        <FormGroup
          label="Username"
          error={{ code: 400, message: 'Username is already taken' }}
          errorAccessor={error => error.message}
        >
          <TextInput value="devexer" onChange={action('onChange')} fillWidth />
        </FormGroup>
        <FormGroup
          label="Age"
          error={{ message: 'Please select your age' }}
          errorAccessor={error => error.message}
        >
          <Select onChange={action('selectChange')} label="Age" />
        </FormGroup>
      </Flex>
      <FormGroup
        label="Message"
        error={{ message: 'Please write your message' }}
        errorAccessor={error => error.message}
      >
        <TextArea onChange={action('textArea')} />
      </FormGroup>
      <FormGroup
        label="Tags"
        error={{ message: 'Please select the relevant tags' }}
        errorAccessor={error => error.message}
      >
        <TagInput onChange={action('textArea')} />
      </FormGroup>
    </Flex>
  ))
  .add('With Notice', () => (
    <FormGroup
      label="Username"
      errorAccessor={error => error.message}
      notice="This username is what you will be recognized as by other users throughout the app"
    >
      <TextInput value="devexer" onChange={action('onChange')} fillWidth />
    </FormGroup>
  ));
