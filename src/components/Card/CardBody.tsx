import * as React from "react";
import cx from "classnames";
export interface Props {
  className?: string;
}

export class CardBody extends React.Component<Props> {
  public render() {
    const { children, className } = this.props;
    return <div className={cx("dui-card-body", className)}>{children}</div>;
  }
}
