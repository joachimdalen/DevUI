import * as React from "react";
export interface SelectOptionType {
  label: string;
  value: string;
  group?: string;
  meta?: any;
}
export interface SelectContextType {
  options?: SelectOptionType[];
  onSelect?: (option: SelectOptionType) => void;
}

export const SelectContext = React.createContext<SelectContextType>({
  options: []
});

export const SelectProvider = SelectContext.Provider;
export const SelectConsumer = SelectContext.Consumer;
