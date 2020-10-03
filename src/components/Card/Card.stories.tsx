import { text } from '@storybook/addon-knobs';
import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Card } from './Card';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';

storiesOf('Layout|Card', module)
  .add('Basic Card', () => (
    <Card width={number('card width', 200)}>
      <CardBody>
        <label htmlFor="">{text('content', 'Hello')}</label>
      </CardBody>
    </Card>
  ))
  .add('Card with Header', () => (
    <Card width={number('card width', 200)}>
      <CardHeader title={text('title', 'Some fruit')} />
      <CardBody>
        <label htmlFor="">{text('content', 'Hello')}</label>
      </CardBody>
    </Card>
  ))
  .add('Card with Footer', () => (
    <Card width={number('card width', 200)}>
      <CardBody>
        <label htmlFor="">{text('content', 'Hello')}</label>
      </CardBody>
      <CardFooter>H</CardFooter>
    </Card>
  ))
  .add('Header & Footer', () => (
    <Card width={number('card width', 200)}>
      <CardHeader title={text('title', 'Some fruit')} />
      <CardBody>
        <label htmlFor="">{text('content', 'Hello')}</label>
      </CardBody>
      <CardFooter>H</CardFooter>
    </Card>
  ))
  .add('Top image', () => (
    <Card
      image={text('image', 'https://brdv.coffee/storage/uploads/3/sccc.s1nTQQq8KMWakWcgAwH.png')}
      imagePlacement="top"
      width={number('card width', 200)}
    >
      <CardHeader title={text('title', 'Hamburger Hamlet Location')} />
      <CardBody>
        <label htmlFor="">{text('content', 'Hello')}</label>
      </CardBody>
      <CardFooter>H</CardFooter>
    </Card>
  ))
  .add('Top image 2', () => (
    <Card
      image={text('image', 'https://brdv.coffee/storage/uploads/3/sccc.s1nTQQq8KMWakWcgAwH.png')}
      imagePlacement="top"
      width={number('card width', 200)}
    >
      <CardBody>
        <label htmlFor="">{text('content', 'Hello')}</label>
      </CardBody>
    </Card>
  ))
  .add('Left image', () => (
    <Card
      image={text('image', 'https://brdv.coffee/storage/uploads/3/sccc.plQfhfDuEomepIg9bPa.png')}
      imagePlacement="left"
      width={number('card width', 300)}
    >
      <CardHeader title={text('title', "Papa's Favorite Wild West Hamburger, Ernest Hemingway")} />
      <CardBody>
        <label htmlFor="">{text('content', 'Hello')}</label>
      </CardBody>
      <CardFooter>H</CardFooter>
    </Card>
  ))
  .add('Right image', () => (
    <Card
      image={text('image', 'https://brdv.coffee/storage/uploads/3/sccc.plQfhfDuEomepIg9bPa.png')}
      imagePlacement="right"
      width={number('card width', 300)}
    >
      <CardHeader title={text('title', "Papa's Favorite Wild West Hamburger, Ernest Hemingway")} />
      <CardBody>
        <label htmlFor="">{text('content', 'Hello')}</label>
      </CardBody>
      <CardFooter>H</CardFooter>
    </Card>
  ));
