import * as React from "react";

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
    onCheck?: (node: Node) => void;
    onSelect?: (key: string | number) => void;
}

export const TreeViewContext = React.createContext<TreeViewContextType>({

});

export const TreeViewProvider = TreeViewContext.Provider;
export const TreeViewConsumer = TreeViewContext.Consumer;
