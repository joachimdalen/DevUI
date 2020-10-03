import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import variants from '../../storyUtil/variants';
import { RadioButton } from './RadioButton';

storiesOf('Controls/RadioButton', module)
  .add('Default', () => (
    <RadioButton
      label={text('label', 'Check me')}
      checked={boolean('Checked', false)}
      onCheckChange={action('onCheckChange')}
    />
  ))
  .add('Colors', () => (
    <div style={{ backgroundColor: 'white', display: 'inline-flex' }}>
      {variants.map((variant: string) => {
        return (
          <RadioButton
            key={variant}
            label={variant}
            checked={true}
            onCheckChange={action('onCheckChange')}
            variant={variant}
          />
        );
      })}
    </div>
  ));
