import cx from 'classnames';
import * as React from 'react';

import { TreeViewItem } from './TreeViewItem';
import { TreeViewContextType, TreeViewNode, TreeViewProvider } from './TreeViewTypes';
export interface TreeViewProps {
  className?: string;
  nodes?: TreeViewNode[];
  multiselect?: boolean;
  children?: React.ReactElement<TreeViewItem> | React.ReactElement<TreeViewItem>[];
  onCheck?: (nodes: TreeViewNode[]) => void;
  onExpanded?: (node: TreeViewNode) => void;
  onSelect?: (node: TreeViewNode) => void;
}
interface TreeViewState {
  selected?: string | number;
  checked?: TreeViewNode[];
}

export class TreeView extends React.Component<TreeViewProps, TreeViewState> {
  state = { selected: undefined, checked: [] };

  static defaultProps: Partial<TreeViewProps> = {};
  _getChildNodes = (node: TreeViewNode): any => {
    if (node.nodes) {
      return node.nodes.map((childNode: TreeViewNode) => {
        return (
          <TreeViewItem key={childNode.key} node={childNode}>
            {childNode.nodes && this._getChildNodes(childNode)}
          </TreeViewItem>
        );
      });
    }
  };
  _toggleItem(node: TreeViewNode): void {
    const { onCheck } = this.props;
    const { checked } = this.state;
    const checkIndex = checked.findIndex((i: TreeViewNode) => i.key === node.key);
    const arrCpy = [...this.state.checked];
    if (checkIndex !== -1) {
      arrCpy.splice(checkIndex, 1);
      this.setState({ checked: arrCpy }, () => {
        if (onCheck) onCheck(this.state.checked);
      });
    } else {
      const newItems = [...this.state.checked, node];
      this.setState({ checked: newItems }, () => {
        if (onCheck) onCheck(newItems);
      });
    }
  }
  render(): React.ReactElement {
    const { className, children, nodes, multiselect, onExpanded, onSelect } = this.props;
    const contextValue: TreeViewContextType = {
      nodes: nodes,
      multiselect: multiselect,
      selected: this.state.selected,
      onSelect: (node: TreeViewNode) => {
        this.setState({ selected: node.key });
        if (onSelect) onSelect(node);
      },
      onItemCheck: node => this._toggleItem(node),
      onExpanded: onExpanded,
      checkedItems: this.state.checked
    };

    const childNodes =
      React.Children.count(children) === 0
        ? nodes &&
          nodes.map((node: TreeViewNode) => {
            return (
              <TreeViewItem key={node.key} node={node}>
                {this._getChildNodes(node)}
              </TreeViewItem>
            );
          })
        : children;
    return (
      <TreeViewProvider value={contextValue}>
        <div className={cx('dui-treeview', className)}>{childNodes}</div>
      </TreeViewProvider>
    );
  }
}
