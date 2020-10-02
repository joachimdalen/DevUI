import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { TextArea, TextAreaSizeMode } from './TextArea';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
storiesOf('Controls|TextArea', module).add('Basic Input', () => (
  <TextArea
    onChange={action('input-changed')}
    sizeMode={text('Size mode', 'both') as TextAreaSizeMode}
    disabled={boolean('Disabled', false)}
  />
));
