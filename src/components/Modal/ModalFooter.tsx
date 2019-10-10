import * as React from "react";
import cx from "classnames";
interface ModalFooterProps {
  className?: string;
}
class ModalFooter extends React.Component<ModalFooterProps> {
  static defaultProps: Partial<ModalFooterProps> = {
    className: ""
  };

  render() {
    const { className, children } = this.props;
    return <div className={cx("dui-modal-footer", className)}>{children}</div>;
  }
}
export { ModalFooterProps, ModalFooter };
