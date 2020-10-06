import * as React from 'react';

import '../src/styles/main.scss';

const minWidth = storyFn => (
  <div
    style={{
      minWidth: '500px',
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    {storyFn()}
  </div>
);

export const decorators = [minWidth];
