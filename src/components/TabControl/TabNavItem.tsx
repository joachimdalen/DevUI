import * as React from "react";
import cx from "classnames";
import { TabControlConsumer, ContextType, TabType } from "./TabControlTypes";
export const TabNavItem = ({ tab }: { tab: TabType }) => (
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
         {tab.icon}
        {tab.label}
      </li>
    )}
  </TabControlConsumer>
);
