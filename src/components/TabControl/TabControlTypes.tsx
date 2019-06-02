import * as React from "react";
export interface Tab {
  key: string;
  label: string;
  icon?: string;
  disabled?: boolean;
  component?: React.ReactNode;
  render?: () => React.ReactNode;
  tabRenderer?: () => React.ReactNode;
}

export interface ContextType {
  tabs: Tab[];
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
