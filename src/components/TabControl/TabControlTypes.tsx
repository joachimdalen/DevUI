import * as React from "react";
export interface TabType {
  key: string;
  label: string;
  icon?: React.ReactElement;
  disabled?: boolean;
  component?: React.ReactElement;
  render?: () => React.ReactElement;
  tabRenderer?: () => React.ReactElement;
}

export interface ContextType {
  tabs: TabType[];
  activeTab: string;
  setActive?: (key: string) => void;
  navClassName?: string;
  navItemClassName?: string;
  paneContainerClassName?: string;
}

export const TabControlContext = React.createContext<ContextType>({
  tabs: [],
  activeTab: ""
});

export const TabControlProvider = TabControlContext.Provider;
export const TabControlConsumer = TabControlContext.Consumer;
