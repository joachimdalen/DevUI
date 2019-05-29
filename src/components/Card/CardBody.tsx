import * as React from "react";
import cx from "classnames";
export interface Props {}

export class CardBody extends React.Component<Props> {
  public render() {
    const { children } = this.props;
    return <div className={cx("dui-card-body")}>{children}</div>;
  }
}
