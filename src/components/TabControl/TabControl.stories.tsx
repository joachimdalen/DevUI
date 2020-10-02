import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TabControl } from './TabControl';
import { TabType } from './TabControlTypes';
import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
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
storiesOf('Components|TabControl', module).add('TabControl', () => (
  <div style={{ minWidth: '400px' }}>
    <TabControl tabs={tabControlTabs} />
  </div>
));
