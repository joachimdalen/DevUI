import * as React from "react";
import cx from "classnames";
export interface CardFooterProps {}

export class CardFooter extends React.Component<CardFooterProps> {
  public render() {
    const { children } = this.props;
    return <div className={cx("dui-card-footer")}>{children}</div>;
  }
}
