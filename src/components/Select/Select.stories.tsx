import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Empty } from '../Empty/Empty';
import { Flex } from '../Flex/Flex';
import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { Select } from './Select';
import { SelectOption } from './SelectOption';
function getOptions(): SelectOption[] {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const customers = require('../../../data/invoices.json').map((i: any) => i.customer);

  return customers.map((c: any) => {
    return {
      label: [c.last_name, ',', c.prefix, c.first_name].join(' '),
      value: [c.last_name, ',', c.prefix, c.first_name].join(' ')
    };
  });
}

storiesOf('Controls/Select', module)
  .add('With Data', () => (
    <Select
      label="Select Customer"
      options={getOptions()}
      keepOpenOnLostFocus={boolean('Keep Open', true)}
      disabled={boolean('Disabled', false)}
      onChange={action('select-changed')}
      emptyPlaceholder={
        <Empty header="" image={<FontAwesomeIcon icon="fa-check" iconStyle="solid" />} />
      }
    />
  ))
  .add('With Empty', () => (
    <Select
      label="Select Customer"
      options={[]}
      keepOpenOnLostFocus={boolean('Keep Open', true)}
      disabled={boolean('Disabled', false)}
      onChange={action('select-changed')}
      emptyPlaceholder={
        <Empty header="No options" image={<FontAwesomeIcon icon="fa-check" iconStyle="solid" />} />
      }
    />
  ))
  .add('With Renderer', () => (
    <Select
      label="Select City"
      options={[{ label: 'Hi', value: 'Hi' }]}
      renderer={option => <p>I am rendering: {option.value}</p>}
      onChange={action('select-changed')}
    />
  ))
  .add('With Renderer & Meta', () => (
    <Select
      label="Select City"
      options={[
        {
          label: 'Hi',
          value: 'Hi',
          meta: { firstName: 'Devexer' }
        }
      ]}
      renderer={option => <p>I am rendering: {option.meta && option.meta.firstName}</p>}
      onChange={action('select-changed')}
    />
  ))
  .add('Advanced', () => (
    <Select
      label="Select..."
      options={[
        {
          label: 'Users',
          value: 'users',
          meta: {
            icon: 'fa-users',
            description: 'This offers the item description'
          }
        },
        {
          label: 'Users1',
          value: 'users',
          meta: {
            icon: 'fa-users',
            description: 'This offers the item description'
          }
        },
        {
          label: 'Users2',
          value: 'users',
          meta: {
            icon: 'fa-users',
            description: 'This offers the item description'
          }
        },
        {
          label: 'Users3',
          value: 'users',
          meta: {
            icon: 'fa-users',
            description: 'This offers the item description'
          }
        },
        {
          label: 'Users4',
          value: 'users',
          meta: {
            icon: 'fa-users',
            description: 'This offers the item description'
          }
        }
      ]}
      renderer={option => (
        <Flex gap="small" align="center">
          <FontAwesomeIcon
            icon={option.meta.icon}
            iconStyle="solid"
            marginDirection="right"
            size="normal"
          />
          <Flex flexDirection="column">
            <label>{option.label}</label>
            <small>{option.meta.description}</small>
          </Flex>
        </Flex>
      )}
      previewRenderer={option => (
        <Flex gap="small" align="center">
          <FontAwesomeIcon
            icon={option.meta.icon}
            iconStyle="solid"
            marginDirection="right"
            size="normal"
          />
          <label>{option.label}</label>
        </Flex>
      )}
      onChange={action('select-changed')}
    />
  ))
  .add('Loading', () => (
    <Select
      label="Select Customer"
      options={[]}
      keepOpenOnLostFocus={boolean('Keep Open', true)}
      disabled={boolean('Disabled', false)}
      loading={boolean('Loading', true)}
      onChange={action('select-changed')}
      emptyPlaceholder={
        <Empty header="" image={<FontAwesomeIcon icon="fa-check" iconStyle="solid" />} />
      }
    />
  ));
