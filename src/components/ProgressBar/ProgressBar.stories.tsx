import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ProgressBar } from './ProgressBar';
storiesOf('Display Components|ProgressBar', module)
  .add('Default', () => <ProgressBar completed={77} />)
  .add('Striped', () => <ProgressBar completed={77} striped variant="purple" />)
  .add('Animated', () => <ProgressBar completed={77} striped animated variant="purple" />)
  .add('With title', () => (
    <ProgressBar completed={77} variant="success" title={'Downloading asset files..'} />
  ));
