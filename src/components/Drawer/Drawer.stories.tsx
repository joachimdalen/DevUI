import { action } from '@storybook/addon-actions';
import { boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Drawer } from './Drawer';

storiesOf('Layout|Drawer', module).add('Default', () => (
  <Drawer
    visible={boolean('Visible', false)}
    width={number('Drawer width', 400)}
    onClose={action('onClose')}
  >
    <h1>Hello</h1>
  </Drawer>
));
