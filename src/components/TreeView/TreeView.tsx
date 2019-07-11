import * as React from "react";
import cx from "classnames";
export interface TreeViewProps {
  className?: string;
}

export class TreeView extends React.Component<TreeViewProps> {
  static defaultProps: Partial<TreeViewProps> = {};
  render() {
    const { className, children, } = this.props;


    return (
      <div className={cx("dui-tree-view", className)}>
        {children}
      </div>
    );
  }
}
