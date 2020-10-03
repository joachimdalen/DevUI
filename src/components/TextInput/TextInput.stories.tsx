import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Flex } from '../Flex/Flex';
import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { TextInput } from './TextInput';
storiesOf('Controls|TextInput', module)
  .add('Basic Input', () => (
    <TextInput
      onChange={action('input-changed')}
      disabled={boolean('Disabled', false)}
      value={text('Value', '')}
      placeholder="Type a text..."
    />
  ))
  .add('with icon', () => (
    <TextInput
      icon={<FontAwesomeIcon iconStyle="solid" icon="fa-check" />}
      onChange={action('input-changed')}
      value={text('Value', '')}
      placeholder="Type a text..."
    />
  ))
  .add('Clearable', () => (
    <TextInput
      icon={<FontAwesomeIcon iconStyle="solid" icon="fa-check" />}
      onChange={action('input-changed')}
      value={text('Value', 'My text')}
      clearable={boolean('Clearable', true)}
      placeholder="Type a text..."
    />
  ))
  .add('Sizes', () => (
    <Flex gap="small">
      <TextInput
        small
        onChange={action('input-changed')}
        placeholder={text('Placeholder', 'Small', 'Small')}
        value={text('Value', '', 'Small')}
        clearable={boolean('Clearable', false, 'Small')}
      />
      <TextInput
        onChange={action('input-changed')}
        placeholder={text('Placeholder', 'Normal (default)', 'Default')}
        value={text('Value', '', 'Default')}
        clearable={boolean('Clearable', false, 'Default')}
      />
    </Flex>
  ));
