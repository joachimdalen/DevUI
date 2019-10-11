import * as React from "react";
import cx from "classnames";
export interface ModalFooterProps {
  className?: string;
}
export class ModalFooter extends React.Component<ModalFooterProps> {
  static defaultProps: Partial<ModalFooterProps> = {
    className: ""
  };

  render() {
    const { className, children } = this.props;
    return <div className={cx("dui-modal-footer", className)}>{children}</div>;
  }
}

