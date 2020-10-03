import * as React from 'react';

export interface HeaderContextType {
  toggled: boolean;
  onUserMenuToggle?: () => void;
}

export const HeaderContext = React.createContext<HeaderContextType>({
  toggled: true
});

export const HeaderProvider = HeaderContext.Provider;
export const HeaderConsumer = HeaderContext.Consumer;
