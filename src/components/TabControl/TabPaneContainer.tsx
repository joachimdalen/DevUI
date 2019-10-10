import * as React from "react";
import { TabControlConsumer, TabType, ContextType } from "./TabControlTypes";
import cx from "classnames";
class TabPaneContainer extends React.Component {
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

  renderContent(tabs: TabType[], activeTab: string) {
    const current = tabs.find(
      (t: TabType) => t.key.toLowerCase() === activeTab.toLowerCase()
    );
    if (!current) return "";
    return current.render && current.render();
  }
}
export { TabPaneContainer };
