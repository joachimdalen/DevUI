import * as React from "react";
import cx from "classnames";
import { CheckBox } from "../CheckBox/CheckBox";
import { FontAwesomeIcon } from "../FontAwesomeIcon/FontAwesomeIcon";
import {
  TreeViewConsumer,
  TreeViewContextType,
  TreeViewNode
} from "./TreeViewTypes";
interface TreeViewItemProps {
  className?: string;
  node: TreeViewNode;
}
interface TreeViewItemState {
  expanded: boolean;
}
class TreeViewItem extends React.Component<
  TreeViewItemProps,
  TreeViewItemState
> {
  static defaultProps: Partial<TreeViewItemProps> = {};
  state = {
    expanded: false
  };

  render() {
    const { node, className, children } = this.props;
    const { expanded } = this.state;
    const isLeafNode = React.Children.count(children) == 0;

    const leafIconComp = node.icon ? (
      React.isValidElement(node.icon) ? (
        node.icon
      ) : (
        <FontAwesomeIcon
          marginDirection="left"
          icon={node.icon as string}
          iconStyle="regular"
        />
      )
    ) : (
      <FontAwesomeIcon
        marginDirection="left"
        icon="fa-file"
        iconStyle="regular"
      />
    );

    return (
      <TreeViewConsumer>
        {({
          multiselect,
          selected,
          onSelect,
          checkedItems,
          onItemCheck,
          onExpanded
        }: TreeViewContextType) => {
          const isChecked =
            checkedItems &&
            checkedItems.findIndex(i => i.key === node.key) !== -1;

          return (
            <div className={cx("dui-treeview-item", className)}>
              <div className="dui-treeview-item-details">
                <div className="dui-treeview-item-icons">
                  {!isLeafNode && (
                    <FontAwesomeIcon
                      marginDirection="left"
                      icon={expanded ? "fa-minus-square" : "fa-plus-square"}
                      iconStyle="regular"
                      className="dui-treeview-item-expand"
                      onClick={() => {
                        if (!this.state.expanded) {
                          onExpanded && onExpanded(node);
                        }
                        this.setState({
                          expanded: this.state.expanded ? false : true
                        });
                      }}
                    />
                  )}
                  {multiselect && (
                    <CheckBox
                      checked={isChecked}
                      onCheckChange={() => onItemCheck && onItemCheck(node)}
                    />
                  )}
                  {isLeafNode ? (
                    leafIconComp
                  ) : (
                    <FontAwesomeIcon
                      marginDirection="left"
                      icon={expanded ? "fa-folder-open" : "fa-folder"}
                      iconStyle="regular"
                    />
                  )}
                </div>
                <span
                  className={cx("dui-treeview-item-label", {
                    "dui-treeview-item-selected":
                      node.key !== undefined && node.key === selected
                  })}
                  onClick={() => onSelect && onSelect(node)}
                >
                  {node.label}
                </span>
              </div>
              {!isLeafNode && expanded && (
                <div className="dui-treeview-item-leafs">{children}</div>
              )}
            </div>
          );
        }}
      </TreeViewConsumer>
    );
  }
}
export { TreeViewItem, TreeViewItemProps };
