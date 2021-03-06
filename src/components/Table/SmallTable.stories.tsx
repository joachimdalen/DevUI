import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { Button } from '../Button/Button';
import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { SmallTable } from './SmallTable';
import { Column, DataTableProps } from './TableTypes';
const columnHeaders: Column[] = [
  {
    key: 'id',
    label: 'Invoice',
    sortable: false,
    forceVisible: true
  },
  {
    key: 'created',
    label: 'Created',
    sortable: true,
    omitFromSmall: true
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    renderer: (item: any) => {
      if (item.status === 'Paid') return <span className="dui-color-success">{item.status}</span>;
      else if (item.status === 'Pending')
        return <span className="dui-color-warning">{item.status}</span>;
      else return <span className="dui-color-danger">{item.status}</span>;
    }
  },
  {
    key: 'first_name',
    label: 'First Name',
    accessor: (item: any) => item.customer.first_name,
    sortable: true
  },
  {
    key: 'last_name',
    label: 'Last Name',
    accessor: (item: any) => item.customer.last_name
  },
  {
    key: 'company',
    label: 'Company',
    accessor: (item: any) => item.customer.company,
    renderer: (item: any) =>
      item.customer.company ? (
        <span>
          {item.customer.company.name} ({item.customer.company.id})
        </span>
      ) : (
        '-'
      )
  },
  { key: 'service', label: 'Service' },
  {
    key: 'amount',
    label: 'Amount',
    sortable: true,
    renderer: (item: any, c, r, isSmall: boolean) =>
      isSmall ? (
        item.amount
      ) : (
        <span>
          <FontAwesomeIcon iconStyle="solid" icon="fa-dollar-sign" className="dui-color-success" />{' '}
          {item.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
        </span>
      )
  },
  {
    key: 'actions',
    label: '',
    spanSmall: true,
    renderer: (item: any, c, r, isSmall: boolean) => {
      return <Button format="block" label="Click"></Button>;
    }
  }
];
export default {
  title: 'Display Components/Table/Small Table',
  component: SmallTable,
  args: {
    columns: columnHeaders,
    rows: require('../../../data/invoices.json')
  }
} as Meta;

const BaseTemplate: Story<DataTableProps> = args => <SmallTable {...args} />;

export const Default: Story<DataTableProps> = BaseTemplate.bind({});
