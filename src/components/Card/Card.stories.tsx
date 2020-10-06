import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { Card, CardProps } from './Card';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';

export default {
  title: 'Layout/Card',
  component: Card,
  args: {
    width: 200
  }
} as Meta;

export const Default: Story<CardProps> = args => (
  <Card {...args}>
    <CardBody>
      <div>Hello</div>
    </CardBody>
  </Card>
);

export const WithHeader: Story<CardProps> = args => (
  <Card {...args}>
    <CardHeader title="Card header" />
    <CardBody>
      <div>Hello</div>
    </CardBody>
  </Card>
);

export const WithFooter: Story<CardProps> = args => (
  <Card {...args}>
    <CardHeader title="Card header" />
    <CardBody>
      <div>Hello</div>
    </CardBody>
    <CardFooter>H</CardFooter>
  </Card>
);

export const WithHeaderAndFooter: Story<CardProps> = args => (
  <Card {...args}>
    <CardHeader title="Card header" />
    <CardBody>
      <div>Hello</div>
    </CardBody>
    <CardFooter>H</CardFooter>
  </Card>
);

export const WithImage: Story<CardProps> = args => (
  <Card {...args}>
    <CardHeader title="Card header" />
    <CardBody>
      <div>Hello</div>
    </CardBody>
    <CardFooter>H</CardFooter>
  </Card>
);

WithImage.args = {
  image: 'https://brdv.coffee/storage/uploads/3/sccc.s1nTQQq8KMWakWcgAwH.png',
  imagePlacement: 'top'
};
