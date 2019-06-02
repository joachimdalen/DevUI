import React from "react";

import { storiesOf } from "@storybook/react";
import { SideBar } from "./SideBar";
import { SideBarMenuItem } from "./SideBarMenuItem";
import { boolean } from "@storybook/addon-knobs";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
storiesOf("Components/SideBar", module).add("SideBar", () => (
  <SideBar
    compact={boolean("Compact", false)}
    showCompactLabels={boolean("Show compact labels", false)}
  >
    <SideBarMenuItem label="General" isHeader={true} />
    <SideBarMenuItem label="Analytics" icon="fas fa-tachometer-alt" />
    <SideBarMenuItem
      label="Administration"
      icon="fas fa-shield-alt"
      hasSubmenu={true}
    >
      <SideBarMenuItem label="Users" icon="fas fa-users" />
      <SideBarMenuItem
        label="Permissions"
        icon={
          <FontAwesomeIcon
            icon="fas fa-user-shield"
            margin
            marginDirection="right"
          />
        }
      />
      <SideBarMenuItem label="Packages" icon="fas fa-pallet" />
    </SideBarMenuItem>
    <SideBarMenuItem label="Assets" isHeader={true} />
    <SideBarMenuItem label="Locations" icon="fas fa-building" />
    <SideBarMenuItem label="Trucks" icon="fas fa-truck" />
  </SideBar>
));
