import cx from 'classnames';
import * as React from 'react';
export interface ModalFooterProps {
  className?: string;
}
export class ModalFooter extends React.Component<ModalFooterProps> {
  static defaultProps: Partial<ModalFooterProps> = {
    className: ''
  };

  render() {
    const { className, children } = this.props;
    return <div className={cx('dui-modal-footer', className)}>{children}</div>;
  }
}
