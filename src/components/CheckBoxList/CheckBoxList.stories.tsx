import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import variants from '../../storyUtil/variants';
import { CheckBoxList, CheckBoxListProps, ICheckBoxItem } from './CheckBoxList';

const items: ICheckBoxItem[] = [
  { label: 'One', key: '0' },
  { label: 'Two', key: '1' },
  { label: 'Three', key: '2' },
  { label: 'Four', key: '3' },
  { label: 'Five', key: '4' }
];

export default {
  title: 'Controls/CheckBoxList',
  component: CheckBoxList,
  args: {},
  argTypes: {
    checkboxVariant: {
      control: {
        type: 'select',
        options: variants,
        default: variants[0]
      }
    },
    onCheckChange: { action: 'clicked' }
  }
} as Meta;

export const Default: Story<CheckBoxListProps> = args => (
  <CheckBoxList
    items={items}
    defaultChecked={[items[0], items[2]]}
    disabledItems={[items[3]]}
    {...args}
  />
);

export const Empty: Story<CheckBoxListProps> = args => <CheckBoxList items={[]} />;
Empty.args = {};

export const CheckCount: Story<CheckBoxListProps> = args => (
  <CheckBoxList {...args} items={items} />
);
CheckCount.args = {
  defaultChecked: [items[0], items[2]],
  showCheckAll: true,
  showCheckCount: true
};

export const RightIndicator: Story<CheckBoxListProps> = args => (
  <CheckBoxList
    {...args}
    items={items}
    defaultChecked={[items[0], items[2]]}
    disabledItems={[items[3]]}
    indicatorLocation="right"
  />
);
RightIndicator.args = {
  indicatorLocation: 'right'
};
