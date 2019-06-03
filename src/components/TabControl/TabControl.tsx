import * as React from "react";
import cx from "classnames";
import { TabNav } from "./TabNav";
import { TabPaneContainer } from "./TabPaneContainer";
import { TabControlProvider, Tab } from "./TabControlTypes";

export interface Props {
  tabs: Tab[];
  defaultActive?: string;
  className?: string;
  navClassName?: string;
  navItemClassName?: string;
  paneContainerClassName?: string;
}
interface State {
  activeNav: string;
}
export class TabControl extends React.Component<Props, State> {
  state = {
    activeNav:
      this.props.defaultActive || (this.props.tabs && this.props.tabs[0].key)
  };
  render() {
    const {
      tabs,
      className,
      navClassName,
      navItemClassName,
      paneContainerClassName
    } = this.props;
    const { activeNav } = this.state;
    const baseClass = cx("dui-tab-control", className);
    const contextValue = {
      tabs: tabs,
      activeTab: activeNav,
      setActive: (active: string) => {
        this.setState({ activeNav: active });
      },
      navClassName: navClassName,
      navItemClassName: navItemClassName,
      paneContainerClassName: paneContainerClassName
    };

    return (
      <TabControlProvider value={contextValue}>
        <div className={baseClass}>
          <TabNav />
          <TabPaneContainer />
        </div>
      </TabControlProvider>
    );
  }
}