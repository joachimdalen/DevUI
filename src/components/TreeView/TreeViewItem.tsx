import * as React from "react";
import cx from "classnames";
import { CheckBox } from "../CheckBox/CheckBox";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import { TreeViewConsumer, TreeViewContextType } from "./TreeViewTypes";
export interface TreeViewItemProps {
    className?: string;
    label: string;
    itemKey: string | number;
    leafIcon: string | React.ReactElement;
}
interface TreeViewItemState {
    expanded: boolean;
}
export class TreeViewItem extends React.Component<
    TreeViewItemProps,
    TreeViewItemState
    > {
    static defaultProps: Partial<TreeViewItemProps> = {};
    state = {
        expanded: false
    };
    render() {
        const { label, className, leafIcon, children, itemKey } = this.props;
        const { expanded } = this.state;
        const isLeafNode = React.Children.count(children) == 0;

        const leafIconComp = leafIcon ? React.isValidElement(leafIcon) ? leafIcon :
            <FontAwesomeIcon
                margin
                marginDirection="left"
                icon={leafIcon as string}
                iconStyle="regular"
            /> : <FontAwesomeIcon
                margin
                marginDirection="left"
                icon="fa-file"
                iconStyle="regular"
            />
        const ecComp = !isLeafNode && (
            <FontAwesomeIcon
                margin
                marginDirection="left"
                icon={expanded ? "fa-minus-square" : "fa-plus-square"}
                iconStyle="regular"
                className="dui-treeview-item-expand"
                onClick={() =>
                    this.setState({ expanded: expanded ? false : true })
                }
            />);
        return (
            <TreeViewConsumer>
                {({ multiselect, selected, onSelect }: TreeViewContextType) => (
                    <div className={cx("dui-treeview-item", className)}>
                        <div className="dui-treeview-item-details">
                            <div className="dui-treeview-item-icons">
                                {multiselect && (<CheckBox
                                    checked={false}
                                    onCheckChange={() => console.log("checked")}
                                />)}
                                {ecComp}
                                {isLeafNode ? leafIconComp : (
                                    <FontAwesomeIcon
                                        margin
                                        marginDirection="left"
                                        icon={expanded ? "fa-folder-open" : "fa-folder"}
                                        iconStyle="regular"
                                    />
                                )}
                            </div>
                            <span
                                className={cx("dui-treeview-item-label", {
                                    "dui-treeview-item-selected": itemKey !== undefined && itemKey === selected
                                })}
                                onClick={() => onSelect && onSelect(itemKey)}
                            >
                                {label}
                            </span>
                        </div>
                        {!isLeafNode && expanded && (
                            <div className="dui-treeview-item-leafs">{children}</div>
                        )}
                    </div>
                )
                }
            </TreeViewConsumer>

        );
    }
}
