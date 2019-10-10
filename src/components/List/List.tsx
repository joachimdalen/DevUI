import * as React from "react";
import cx from "classnames";

interface ListProps {
  title?: string;
  bordered?: boolean;
}

class List extends React.Component<ListProps> {
  static defaultProps: Partial<ListProps> = {
    bordered: false
  };
  public render() {
    const { children, title, bordered } = this.props;
    return (
      <div className={cx("dui-list-container")}>
        {title && <p className={cx("dui-list-title")}>{title}</p>}
        <li className={cx("dui-list", { [`dui-list-bordered`]: bordered })}>
          {children}
        </li>
      </div>
    );
  }
}
export { List, ListProps };
