import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { TextArea, TextAreaSizeMode } from './TextArea';
storiesOf('Controls/TextArea', module).add('Basic Input', () => (
  <TextArea
    onChange={action('input-changed')}
    sizeMode={text('Size mode', 'both') as TextAreaSizeMode}
    disabled={boolean('Disabled', false)}
  />
));
