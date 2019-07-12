import * as React from "react";
import cx from "classnames";
import { TreeViewItem } from "./TreeViewItem";
import { TreeViewNode, TreeViewContextType, TreeViewProvider } from "./TreeViewTypes";
export interface TreeViewProps {
  className?: string;
  nodes?: TreeViewNode[];
  multiselect?: boolean;
  children?: React.ReactElement<TreeViewItem> | React.ReactElement<TreeViewItem>[];
}
interface TreeViewState {
  selected?: string | number;
}

export class TreeView extends React.Component<TreeViewProps, TreeViewState> {
  state = { selected: undefined }
  static defaultProps: Partial<TreeViewProps> = {};
  _getChildNodes = (node: TreeViewNode) => {
    return node.nodes && node.nodes.map(node => {
      return (<TreeViewItem leafIcon={node.icon} label={node.label} itemKey={node.key}>
        {node.nodes && this._getChildNodes(node)}
      </TreeViewItem>)
    });
  }
  render() {
    const { className, children, nodes, multiselect } = this.props;
    const contextValue: TreeViewContextType = {
      nodes: nodes,
      multiselect: multiselect,
      selected: this.state.selected,
      onSelect: (key: string | number) => {
        this.setState({ selected: key });
        console.log(key);
      }
    };

    const childNodes = React.Children.count(children) === 0 ? nodes && nodes.map((node: TreeViewNode) => {
      return (<TreeViewItem leafIcon={node.icon} label={node.label} itemKey={node.key}>{this._getChildNodes(node)}</TreeViewItem>)
    }) : children;
    return (
      <TreeViewProvider value={contextValue}>
        <div className={cx("dui-treeview", className)}>
          {childNodes}
        </div>
      </TreeViewProvider>
    );
  }
}
