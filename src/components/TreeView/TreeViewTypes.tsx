import * as React from 'react';

export interface TreeViewNode {
  key: string | number;
  label: string;
  icon?: string;
  nodes?: TreeViewNode[];
}

export interface TreeViewContextType {
  multiselect?: boolean;
  selected?: string | number;
  nodes?: TreeViewNode[];
  checkedItems?: TreeViewNode[];
  onItemCheck?: (node: TreeViewNode) => void;
  onExpanded?: (node: TreeViewNode) => void;
  onSelect?: (node: TreeViewNode) => void;
}

export const TreeViewContext = React.createContext<TreeViewContextType>({});

export const TreeViewProvider = TreeViewContext.Provider;
export const TreeViewConsumer = TreeViewContext.Consumer;
