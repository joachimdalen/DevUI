import cx from 'classnames';
import * as React from 'react';

import { ContextType, TabControlConsumer, TabType } from './TabControlTypes';
export class TabPaneContainer extends React.Component {
  render(): React.ReactElement {
    return (
      <TabControlConsumer>
        {({ tabs, activeTab, paneContainerClassName }: ContextType) => (
          <div className={cx('dui-tab-control-pane', paneContainerClassName)}>
            {this.renderContent(tabs, activeTab)}
          </div>
        )}
      </TabControlConsumer>
    );
  }

  renderContent(tabs: TabType[], activeTab: string): React.ReactNode {
    const current = tabs.find((t: TabType) => t.key.toLowerCase() === activeTab.toLowerCase());
    if (!current) return '';

    return current.render && React.cloneElement(current.render(), { key: current.key });
  }
}
