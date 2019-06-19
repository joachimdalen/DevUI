import * as React from "react";
import cx from "classnames";
export interface Props {
  className?: string;
}
export class ModalBody extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
    className: ""
  };

  render() {
    const { className, children } = this.props;
    return <div className={cx("dui-modal-body", className)}>{children}</div>;
  }
}
