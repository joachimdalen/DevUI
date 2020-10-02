import cx from 'classnames';
import * as React from 'react';
export interface ModalBodyProps {
  className?: string;
}
export class ModalBody extends React.Component<ModalBodyProps> {
  static defaultProps: Partial<ModalBodyProps> = {
    className: ''
  };

  render() {
    const { className, children } = this.props;
    return <div className={cx('dui-modal-body', className)}>{children}</div>;
  }
}
