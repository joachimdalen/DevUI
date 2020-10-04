import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { Avatar } from '../Avatar/Avatar';
import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { Select } from '../Select/Select';
import { SideBar, SideBarProps } from './SideBar';
import { SideBarAddon } from './SideBarAddon';
import { SideBarMenuItem } from './SideBarMenuItem';

export default {
  title: 'Layout/SideBar',
  component: SideBar
} as Meta;

export const Default: Story<SideBarProps> = args => (
  <SideBar {...args}>
    <SideBarMenuItem label="General" isHeader={true} />
    <SideBarMenuItem label="Analytics" icon="fas fa-tachometer-alt" active />
    <SideBarMenuItem label="Administration" icon="fas fa-shield-alt" hasSubmenu={true}>
      <SideBarMenuItem label="Users" icon="fas fa-users" />
      <SideBarMenuItem
        label="Permissions"
        icon={<FontAwesomeIcon iconStyle="solid" icon="fa-user-shield" marginDirection="right" />}
      />
      <SideBarMenuItem label="Packages" icon="fas fa-pallet" />
    </SideBarMenuItem>
    <SideBarMenuItem label="Assets" isHeader={true} />
    <SideBarMenuItem label="Locations" icon="fas fa-building" />
    <SideBarMenuItem label="Trucks" icon="fas fa-truck" />
  </SideBar>
);
export const WithAddon: Story<SideBarProps> = args => (
  <SideBar {...args}>
    <SideBarMenuItem label="General" isHeader={true} />
    <SideBarMenuItem label="Analytics" icon="fas fa-tachometer-alt" active />
    <SideBarMenuItem label="Administration" icon="fas fa-shield-alt" hasSubmenu={true}>
      <SideBarMenuItem label="Users" icon="fas fa-users" />
      <SideBarMenuItem
        label="Permissions"
        icon={<FontAwesomeIcon iconStyle="solid" icon="fa-user-shield" marginDirection="right" />}
      />
      <SideBarMenuItem label="Packages" icon="fas fa-pallet" />
    </SideBarMenuItem>
    <SideBarMenuItem label="Assets" isHeader={true} />
    <SideBarMenuItem label="Locations" icon="fas fa-building" />
    <SideBarMenuItem label="Trucks" icon="fas fa-truck" />
  </SideBar>
);
WithAddon.args = {
  addon: (
    <SideBarAddon>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: '80px',
          padding: '10px 20px'
        }}
      >
        <Avatar src="http://placehold.it/50x50" size="medium" format="rounded" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: '10px',
            width: '100%'
          }}
        >
          <label htmlFor="dashboard">Dashboard</label>
          <Select
            label="Select dashboard"
            onChange={console.log}
            options={[
              { value: 'Me', label: 'me' },
              { label: 'You', value: 'you' }
            ]}
          />
        </div>
      </div>
    </SideBarAddon>
  ),
  addonLocation: 'top'
};
