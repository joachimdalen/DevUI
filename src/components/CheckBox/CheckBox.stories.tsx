import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { CheckBox, CheckBoxIndicatorLocation } from './CheckBox';
import { text, boolean, select } from '@storybook/addon-knobs';
import variants from '../../storyUtil/variants';

storiesOf('Controls|CheckBox', module)
  .add('Basic CheckBox', () => (
    <CheckBox
      label={text('label', 'Delete')}
      disabled={boolean('disabled', false)}
      variant={text('variant', 'default')}
      checked={boolean('Checked', false)}
      onCheckChange={() => alert('hello there')}
    />
  ))
  .add('Indeterminate CheckBox', () => (
    <CheckBox
      label={text('label', 'Delete')}
      disabled={boolean('disabled', false)}
      variant={text('variant', 'default')}
      checked={boolean('Checked', false)}
      onCheckChange={() => alert('hello there')}
      indeterminate={boolean('Indeterminate', true)}
    />
  ))
  .add('Right Indicator', () => (
    <CheckBox
      label={text('label', 'Delete')}
      disabled={boolean('disabled', false)}
      variant={text('variant', 'default')}
      checked={boolean('Checked', false)}
      onCheckChange={() => alert('hello there')}
      indeterminate={boolean('Indeterminate', true)}
      indicatorLocation={
        select('IndicatorLocation', ['left', 'right'], 'right') as CheckBoxIndicatorLocation
      }
    />
  ))
  .add('Variants', () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        {variants.map((variant: string) => {
          return (
            <CheckBox
              key={`normal-${variant}`}
              label={variant}
              disabled={boolean('disabled', false)}
              variant={variant}
              checked={boolean('Checked', true)}
              onCheckChange={() => alert('hello there')}
            />
          );
        })}
      </div>
    </div>
  ));
