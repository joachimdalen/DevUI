import * as React from "react";
import cx from "classnames";
export interface Props {
  className?: string;
  noPadding?: boolean;
}

export class CardBody extends React.Component<Props> {
  public render() {
    const { children, className, noPadding = false } = this.props;
    return (
      <div
        className={cx(
          "dui-card-body",
          { "dui-card-body-np": noPadding },
          className
        )}
      >
        {children}
      </div>
    );
  }
}
