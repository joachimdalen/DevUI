import * as React from "react";

export interface Option {
  label: string;
  value: string;
  group?: string;
  meta?: any;
}

export interface SelectContextType {
  options?: Option[];
  onSelect?: (option: Option) => void;
}

export const SelectContext = React.createContext<SelectContextType>({
  options: []
});

export const SelectProvider = SelectContext.Provider;
export const SelectConsumer = SelectContext.Consumer;
