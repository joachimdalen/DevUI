import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { OverflowMenu, OverflowMenuLocation } from './OverflowMenu';
import { OverflowMenuItem } from './OverflowMenuItem';
import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

storiesOf('Controls|OverflowMenu', module)
  .add('Default', () => (
    <OverflowMenu>
      <OverflowMenuItem onClick={action('editItemClicked')}>
        <FontAwesomeIcon icon="fa-edit" iconStyle="regular" marginDirection="right" />
        Edit
      </OverflowMenuItem>
      <OverflowMenuItem onClick={action('viewItemClicked')}>
        <FontAwesomeIcon icon="fa-eye" iconStyle="regular" marginDirection="right" />
        View
      </OverflowMenuItem>
      <OverflowMenuItem onClick={action('deleteItemClicked')}>
        <FontAwesomeIcon icon="fa-trash-alt" iconStyle="solid" marginDirection="right" />
        Delete
      </OverflowMenuItem>
    </OverflowMenu>
  ))
  .add('Custom button props', () => (
    <OverflowMenu
      triggerButtonProps={{
        variant: 'primary',
        label: 'View Menu'
      }}
    >
      <OverflowMenuItem onClick={action('editItemClicked')}>
        <FontAwesomeIcon icon="fa-edit" iconStyle="regular" marginDirection="right" />
        Edit
      </OverflowMenuItem>
      <OverflowMenuItem onClick={action('viewItemClicked')}>
        <FontAwesomeIcon icon="fa-eye" iconStyle="regular" marginDirection="right" />
        View
      </OverflowMenuItem>
      <OverflowMenuItem onClick={action('deleteItemClicked')}>
        <FontAwesomeIcon icon="fa-trash-alt" iconStyle="solid" marginDirection="right" />
        Delete
      </OverflowMenuItem>
    </OverflowMenu>
  ))
  .add('Position', () => (
    <OverflowMenu
      menuLocation={
        select(
          'menuLocation',
          ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
          'bottomRight'
        ) as OverflowMenuLocation
      }
    >
      <OverflowMenuItem onClick={action('editItemClicked')}>
        <FontAwesomeIcon icon="fa-edit" iconStyle="regular" marginDirection="right" />
        Edit
      </OverflowMenuItem>
      <OverflowMenuItem onClick={action('viewItemClicked')}>
        <FontAwesomeIcon icon="fa-eye" iconStyle="regular" marginDirection="right" />
        View
      </OverflowMenuItem>
      <OverflowMenuItem onClick={action('deleteItemClicked')}>
        <FontAwesomeIcon icon="fa-trash-alt" iconStyle="solid" marginDirection="right" />
        Delete
      </OverflowMenuItem>
    </OverflowMenu>
  ));
