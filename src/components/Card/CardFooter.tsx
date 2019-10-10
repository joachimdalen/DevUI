import * as React from "react";
import cx from "classnames";
interface CardFooterProps {}

class CardFooter extends React.Component<CardFooterProps> {
  public render() {
    const { children } = this.props;
    return <div className={cx("dui-card-footer")}>{children}</div>;
  }
}

export { CardFooter, CardFooterProps };
