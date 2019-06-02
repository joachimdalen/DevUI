import * as React from "react";
import { TabControlConsumer, Tab, ContextType } from "./TabControlTypes";
import cx from "classnames";
export class TabPaneContainer extends React.Component {
  render() {
    return (
      <TabControlConsumer>
        {({ tabs, activeTab, paneContainerClassName }: ContextType) => (
          <div className={cx("dui-tab-control-pane", paneContainerClassName)}>
            {this.renderContent(tabs, activeTab)}
          </div>
        )}
      </TabControlConsumer>
    );
  }

  renderContent(tabs: Tab[], activeTab: string) {
    const current = tabs.find(
      (t: Tab) => t.key.toLowerCase() === activeTab.toLowerCase()
    );
    if (!current) return "";
    return current.render && current.render();
  }
}
