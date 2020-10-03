import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import variants from '../../storyUtil/variants';
import { CheckBox, CheckBoxIndicatorLocation } from './CheckBox';

storiesOf('Controls/CheckBox', module)
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
