import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { Empty } from '../Empty/Empty';
import { Flex } from '../Flex/Flex';
import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { Select, SelectProps } from './Select';
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
export default {
  title: 'Controls/Select',
  component: Select,
  args: {
    label: 'Select Customer',
    keepOpenOnLostFocus: true
  },
  argTypes: { onChange: { action: 'onChange' } }
} as Meta;

const BaseTemplate: Story<SelectProps> = args => <Select {...args} />;

export const Default: Story<SelectProps> = BaseTemplate.bind({});
Default.args = {
  options: getOptions()
};

export const WithEmpty: Story<SelectProps> = BaseTemplate.bind({});
WithEmpty.args = {
  options: [],
  emptyPlaceholder: (
    <Empty header="No options" image={<FontAwesomeIcon icon="fa-check" iconStyle="solid" />} />
  )
};

export const WithRenderer: Story<SelectProps> = BaseTemplate.bind({});
WithRenderer.args = {
  options: [{ label: 'Hi', value: 'Hi' }],
  label: 'Select Item',
  renderer: option => <p>I am rendering: {option.value}</p>
};

export const WithRendererAndMeta: Story<SelectProps> = BaseTemplate.bind({});
WithRendererAndMeta.args = {
  options: [{ label: 'Hi', value: 'Hi', meta: { firstName: 'John' } }],
  label: 'Select Item',
  renderer: option => <p>I am rendering: {option.meta && option.meta.firstName}</p>
};

export const Advanced: Story<SelectProps> = BaseTemplate.bind({});
Advanced.args = {
  options: [
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
  ],
  label: 'Select Item',
  renderer: option => (
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
  ),
  previewRenderer: option => (
    <Flex gap="small" align="center">
      <FontAwesomeIcon
        icon={option.meta.icon}
        iconStyle="solid"
        marginDirection="right"
        size="normal"
      />
      <label>{option.label}</label>
    </Flex>
  )
};
export const Loading: Story<SelectProps> = BaseTemplate.bind({});
Loading.args = {
  options: [],
  label: 'Select Item',
  loading: true
};
