import * as React from "react";
import cx from "classnames";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import { TabControlConsumer, ContextType, Tab } from "./TabControlTypes";
export const TabNavItem = ({ tab }: { tab: Tab }) => (
  <TabControlConsumer>
    {({ setActive, activeTab, navItemClassName }: ContextType) => (
      <li
        className={cx(
          "dui-tab-control-nav-item",
          { active: activeTab === tab.key },
          { "dui-tab-control-nav-item-disabled": tab.disabled },
          navItemClassName
        )}
        onClick={() => {
          if (!tab.disabled) {
            setActive && setActive(tab.key);
          }
        }}
      >
         {tab.icon && <FontAwesomeIcon icon={tab.icon} />}
        {tab.label}
      </li>
    )}
  </TabControlConsumer>
);