import * as React from "react";
import { TabNavItem } from "./TabNavItem";
import { TabControlConsumer, TabType, ContextType } from "./TabControlTypes";
import cx from "classnames";
interface TabNavProps {}

class TabNav extends React.Component<TabNavProps> {
  render() {
    return (
      <TabControlConsumer>
        {({ navClassName, tabs }: ContextType) => (
          <ul className={cx("dui-tab-control-nav", navClassName)}>
            {tabs &&
              tabs.map((tab: TabType) => {
                return <TabNavItem tab={tab} key={tab.key} />;
              })}
          </ul>
        )}
      </TabControlConsumer>
    );
  }
}

export { TabNav, TabNavProps };
