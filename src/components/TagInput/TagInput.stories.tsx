import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { TagInput } from './TagInput';
storiesOf('Controls|TagInput', module)
  .add('Default', () => <TagInput onChange={action('onChange')} />)
  .add('Fixed tags', () => (
    <TagInput initialTags={[{ value: 'Hello', removeable: false }]} onChange={action('onChange')} />
  ))
  .add('Custom badge props', () => (
    <TagInput
      initialTags={[{ value: 'Hello', removeable: false }]}
      onChange={action('onChange')}
      badgeProps={{ variant: 'blue' }}
    />
  ));
