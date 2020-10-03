import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { Header } from './Header';
import { HeaderBrand } from './HeaderBrand';
import { HeaderItem } from './HeaderItem';
import { HeaderUserMenu } from './HeaderUserMenu';
import { HeaderUserMenuItem } from './HeaderUserMenuItem';
storiesOf('Layout|Header', module)
  .add('Default', () => (
    <div style={{ minWidth: '500px' }}>
      <Header
        brand={<HeaderBrand>Hello</HeaderBrand>}
        userMenu={
          <HeaderUserMenu username="Joachim" avatar="http://placehold.it/100x100">
            <HeaderUserMenuItem>Hello</HeaderUserMenuItem>
          </HeaderUserMenu>
        }
      >
        <HeaderItem onClick={action('itemClick')}>Hello</HeaderItem>
        <HeaderItem onClick={action('itemClick')}>
          <FontAwesomeIcon iconStyle="solid" icon="fa-user" marginDirection="right" />
          Hello
        </HeaderItem>
      </Header>
    </div>
  ))
  .add('Responsive', () => (
    <Header
      responsive
      brand={<HeaderBrand>Hello</HeaderBrand>}
      userMenu={
        <HeaderUserMenu username="Joachim" avatar="http://placehold.it/100x100">
          <HeaderUserMenuItem>Hello</HeaderUserMenuItem>
        </HeaderUserMenu>
      }
    >
      <HeaderItem onClick={action('itemClick')}>Hello</HeaderItem>
      <HeaderItem onClick={action('itemClick')}>
        <FontAwesomeIcon iconStyle="solid" icon="fa-user" marginDirection="right" />
        Hello
      </HeaderItem>
    </Header>
  ));
