import * as React from "react";
import cx from "classnames";
interface ModalHeaderProps {
  title: string;
  className?: string;
}
class ModalHeader extends React.Component<ModalHeaderProps> {
  static defaultProps: Partial<ModalHeaderProps> = {
    className: ""
  };

  render() {
    const { title, children, className } = this.props;
    return (
      <div className={cx("dui-modal-header", className)}>
        {title && <h3 className="dui-modal-header-title">{title}</h3>}
        {children}
      </div>
    );
  }
}
export { ModalHeader, ModalHeaderProps };
