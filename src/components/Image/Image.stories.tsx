import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Image } from './Image';
storiesOf('Display Components|Image', module)
  .add('Default', () => (
    <Image
      src={text('src', 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png')}
      alt="image"
    />
  ))
  .add('Fallback', () => (
    <Image
      src={text('src', 'http://localhost/img')}
      fallbackSrc={text('fallbackSrc', 'https://placehold.it/200x200')}
      alt="image"
    />
  ));
