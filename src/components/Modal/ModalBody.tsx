import * as React from "react";
import cx from "classnames";
export interface ModalBodyProps {
  className?: string;
}
export class ModalBody extends React.Component<ModalBodyProps> {
  static defaultProps: Partial<ModalBodyProps> = {
    className: ""
  };

  render() {
    const { className, children } = this.props;
    return <div className={cx("dui-modal-body", className)}>{children}</div>;
  }
}
