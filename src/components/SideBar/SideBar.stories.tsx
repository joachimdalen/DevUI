import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Avatar } from '../Avatar/Avatar';
import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { Select } from '../Select/Select';
import { SideBar, SideBarAddonLocation } from './SideBar';
import { SideBarAddon } from './SideBarAddon';
import { SideBarMenuItem } from './SideBarMenuItem';

storiesOf('Layout|SideBar', module)
  .add('SideBar', () => {
    const mainGroup = 'Sidebar';

    return (
      <SideBar
        compact={boolean('Compact', false, mainGroup)}
        animate={boolean('Animate', false, mainGroup)}
        showCompactLabels={boolean('Show compact labels', false, mainGroup)}
      >
        <SideBarMenuItem label="General" isHeader={true} />
        <SideBarMenuItem label="Analytics" icon="fas fa-tachometer-alt" active />
        <SideBarMenuItem label="Administration" icon="fas fa-shield-alt" hasSubmenu={true}>
          <SideBarMenuItem label="Users" icon="fas fa-users" />
          <SideBarMenuItem
            label="Permissions"
            icon={
              <FontAwesomeIcon iconStyle="solid" icon="fa-user-shield" marginDirection="right" />
            }
          />
          <SideBarMenuItem label="Packages" icon="fas fa-pallet" />
        </SideBarMenuItem>
        <SideBarMenuItem label="Assets" isHeader={true} />
        <SideBarMenuItem label="Locations" icon="fas fa-building" />
        <SideBarMenuItem label="Trucks" icon="fas fa-truck" />
      </SideBar>
    );
  })
  .add('SideBar Addon', () => {
    const addonGroup = 'Addon';
    const mainGroup = 'Sidebar';

    const addonLocation = select(
      'addonLocation',
      { top: 'top', bottom: 'bottom' },
      'top',
      addonGroup
    );

    const addon = (
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
              onChange={action('onChange')}
              options={[
                { value: 'Me', label: 'me' },
                { label: 'You', value: 'you' }
              ]}
            />
          </div>
        </div>
      </SideBarAddon>
    );

    return (
      <SideBar
        compact={boolean('Compact', false, mainGroup)}
        animate={boolean('Animate', false, mainGroup)}
        showCompactLabels={boolean('Show compact labels', false, mainGroup)}
        addonLocation={addonLocation as SideBarAddonLocation}
        addon={addon}
      >
        <SideBarMenuItem label="General" isHeader={true} />
        <SideBarMenuItem label="Analytics" icon="fas fa-tachometer-alt" />
        <SideBarMenuItem label="Administration" icon="fas fa-shield-alt" hasSubmenu={true}>
          <SideBarMenuItem label="Users" icon="fas fa-users" />
          <SideBarMenuItem
            label="Permissions"
            icon={
              <FontAwesomeIcon iconStyle="solid" icon="fa-user-shield" marginDirection="right" />
            }
          />
          <SideBarMenuItem label="Packages" icon="fas fa-pallet" />
        </SideBarMenuItem>
        <SideBarMenuItem label="Assets" isHeader={true} />
        <SideBarMenuItem label="Locations" icon="fas fa-building" />
        <SideBarMenuItem label="Trucks" icon="fas fa-truck" />
      </SideBar>
    );
  });
