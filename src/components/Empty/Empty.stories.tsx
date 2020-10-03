import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Button } from '../Button/Button';
import { Empty } from './Empty';

storiesOf('Display Components|Empty', module)
  .add('Default', () => (
    <Empty
      header="This is the header"
      image="https://brdv.coffee/storage/uploads/3/46b95d03-1eda-42d9-aba9-e7e083c8332a.png"
    />
  ))
  .add('With Description', () => (
    <Empty
      header="This is the header"
      image="https://brdv.coffee/storage/uploads/3/46b95d03-1eda-42d9-aba9-e7e083c8332a.png"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    />
  ))
  .add('Custom Description Component', () => (
    <Empty
      header="This is the header"
      image="https://brdv.coffee/storage/uploads/3/46b95d03-1eda-42d9-aba9-e7e083c8332a.png"
      description={
        <span>
          Click <a href="#">here</a> for more info
        </span>
      }
    />
  ))
  .add('With Actions', () => (
    <Empty
      header="This is the header"
      image="https://brdv.coffee/storage/uploads/3/46b95d03-1eda-42d9-aba9-e7e083c8332a.png"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      primaryAction={
        <Button label="Primary Action" variant="blue" size="small" onClick={action('onClick')} />
      }
      secondaryAction={
        <Button
          label="Secondary action"
          variant="secondary"
          size="small"
          onClick={action('onClick')}
        />
      }
      tertiaryAction={
        <Button
          linkButton
          component="a"
          componentProps={{ href: '#' }}
          label="Tertiary Action"
        ></Button>
      }
    />
  ));
