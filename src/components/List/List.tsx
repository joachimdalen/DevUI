import * as React from "react";
import cx from "classnames";

export interface Props {
  title?: string;
  bordered?: boolean;
}

export class List extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
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
