import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { Image, ImageProps } from './Image';

export default {
  title: 'Display Components/Image',
  component: Image,
  args: {
    src: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    alt: 'Image'
  }
} as Meta;

const BaseTemplate: Story<ImageProps> = args => <Image {...args} />;

export const Default: Story<ImageProps> = BaseTemplate.bind({});

export const Fallback: Story<ImageProps> = BaseTemplate.bind({});
Fallback.args = {
  src: 'http://localhost/img',
  fallbackSrc: 'https://placehold.it/200x200'
};
