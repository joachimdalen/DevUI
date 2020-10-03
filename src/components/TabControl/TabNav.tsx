import cx from 'classnames';
import * as React from 'react';

import { ContextType, TabControlConsumer, TabType } from './TabControlTypes';
import { TabNavItem } from './TabNavItem';

export class TabNav extends React.Component {
  render(): React.ReactElement {
    return (
      <TabControlConsumer>
        {({ navClassName, tabs }: ContextType) => (
          <ul className={cx('dui-tab-control-nav', navClassName)}>
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
