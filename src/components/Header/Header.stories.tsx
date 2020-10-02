import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from './Header';
import { action } from '@storybook/addon-actions';
import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { HeaderItem } from './HeaderItem';
import { HeaderBrand } from './HeaderBrand';
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
