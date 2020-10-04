import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { Header, HeaderProps } from './Header';
import { HeaderBrand } from './HeaderBrand';
import { HeaderItem } from './HeaderItem';
import { HeaderUserMenu } from './HeaderUserMenu';
import { HeaderUserMenuItem } from './HeaderUserMenuItem';

export default {
  title: 'Layout/Header',
  component: Header,
  args: {
    brand: <HeaderBrand>Hello</HeaderBrand>,
    userMenu: (
      <HeaderUserMenu username="Joachim" avatar="http://placehold.it/100x100">
        <HeaderUserMenuItem>Hello</HeaderUserMenuItem>
      </HeaderUserMenu>
    )
  }
} as Meta;

export const Default: Story<HeaderProps> = args => (
  <Header {...args}>
    <HeaderItem>Hello</HeaderItem>
    <HeaderItem>
      <FontAwesomeIcon iconStyle="solid" icon="fa-user" marginDirection="right" />
      Hello
    </HeaderItem>
  </Header>
);
export const Responsive: Story<HeaderProps> = args => (
  <Header {...args}>
    <HeaderItem>Hello</HeaderItem>
    <HeaderItem>
      <FontAwesomeIcon iconStyle="solid" icon="fa-user" marginDirection="right" />
      Hello
    </HeaderItem>
  </Header>
);

Responsive.args = {
  responsive: true
};
