import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { TabControl, TabControlProps } from './TabControl';
import { TabType } from './TabControlTypes';

const tabControlTabs: TabType[] = [
  {
    label: 'Hello',
    key: 'hello',
    icon: <FontAwesomeIcon icon="fa-user" iconStyle="solid" />,
    render: () => {
      return <div>Hello234</div>;
    }
  },
  {
    label: 'Hello2',
    key: 'hello2',
    icon: undefined,
    render: () => {
      return <div>Hello2</div>;
    }
  },
  {
    label: 'Profile Settings',
    key: 'hello12',
    icon: undefined,
    disabled: true,
    render: () => {
      return <div>Profile</div>;
    }
  }
];

export default {
  title: 'Components/TabControl',
  component: TabControl,
  args: {
    tabs: tabControlTabs
  }
} as Meta;

const BaseTemplate: Story<TabControlProps> = args => <TabControl {...args} />;

export const Default: Story<TabControlProps> = BaseTemplate.bind({});
