import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Avatar } from './Avatar';
storiesOf('Display Components/Avatar', module)
  .add('Avatar', () => <Avatar src={'//placehold.it/400x400'} />)
  .add('Formats', () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        gridColumnGap: '10px'
      }}
    >
      <Avatar src={'//placehold.it/400x400'} />
      <Avatar src={'//placehold.it/400x400'} format="rounded" />
      <Avatar src={'//placehold.it/400x400'} format="circle" />
    </div>
  ))
  .add('Sizes', () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        gridColumnGap: '10px'
      }}
    >
      <Avatar src={'//placehold.it/400x400'} size="small" />
      <Avatar src={'//placehold.it/400x400'} />
      <Avatar src={'//placehold.it/400x400'} size="large" />
    </div>
  ))
  .add('Custom Size', () => (
    <Avatar src={'//placehold.it/400x400'} width={150} height={150} size="large" />
  ));
