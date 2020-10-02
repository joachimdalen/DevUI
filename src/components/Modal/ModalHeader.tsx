import cx from 'classnames';
import * as React from 'react';
export interface ModalHeaderProps {
  title: string;
  className?: string;
}
export class ModalHeader extends React.Component<ModalHeaderProps> {
  static defaultProps: Partial<ModalHeaderProps> = {
    className: ''
  };

  render() {
    const { title, children, className } = this.props;
    return (
      <div className={cx('dui-modal-header', className)}>
        {title && <h3 className="dui-modal-header-title">{title}</h3>}
        {children}
      </div>
    );
  }
}
