import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { Overlay } from './Overlay';

storiesOf('Layout/Overlay', module)
  .add('Default', () => <Overlay visible={boolean('Visible', true)}>h</Overlay>)
  .add('Loader', () => (
    <Overlay visible={boolean('Visible', true)}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          color: 'white'
        }}
      >
        <FontAwesomeIcon animate animationType="spin" iconStyle="solid" icon="fa-spinner" />
        <span
          style={{
            marginTop: '10px'
          }}
        >
          Loading..
        </span>
      </div>
    </Overlay>
  ));
