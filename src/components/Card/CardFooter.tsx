import * as React from "react";
import cx from "classnames";
export interface CardFooterProps {
  className?: string;
}

export class CardFooter extends React.Component<CardFooterProps> {
  public render() {
    const { children, className } = this.props;
    return <div className={cx("dui-card-footer", className)}>{children}</div>;
  }
}
