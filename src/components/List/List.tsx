import * as React from "react";
import cx from "classnames";

export interface Props {
  title: string;
  bordered: string;
}

export class List extends React.Component<Props> {
  public render() {
    const { children, title, bordered = false } = this.props;
    return (
      <div className={cx("dui-list-container")}>
        <p className={cx("dui-list-title")}>{title}</p>
        <li className={cx("dui-list", { [`dui-list-bordered`]: bordered })}>
          {children}
        </li>
      </div>
    );
  }
}
