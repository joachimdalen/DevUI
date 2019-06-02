import * as React from "react";
import { TabNavItem } from "./TabNavItem";
import { TabControlConsumer, Tab, ContextType } from "./TabControlTypes";
import cx from "classnames";
export interface Props {}

export class TabNav extends React.Component<Props> {
  render() {
    return (
      <TabControlConsumer>
        {({ navClassName, tabs }: ContextType) => (
          <ul className={cx("dui-tab-control-nav", navClassName)}>
            {tabs &&
              tabs.map((tab: Tab) => {
                return <TabNavItem tab={tab} key={tab.key} />;
              })}
          </ul>
        )}
      </TabControlConsumer>
    );
  }
}
