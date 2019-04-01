import * as React from "react";
import cx from "classnames";
export interface Props {}

export class CardFooter extends React.Component<Props> {
  public render() {
    const { children } = this.props;
    return <div className={cx("cb-card-footer")}>{children}</div>;
  }
}
