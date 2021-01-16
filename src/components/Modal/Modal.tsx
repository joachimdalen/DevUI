import cx from 'classnames';
import * as React from 'react';

import { GenericSizes } from '../common';
import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';

export type ModalSize = GenericSizes;
export type ModalLocation = 'top' | 'center';

export interface ModalProps {
  onBackdropClick?: () => void;
  onClose?: () => void;
  closeOnBackdropClick?: boolean;
  visible: boolean;
  size?: ModalSize;
  location?: ModalLocation;
  className?: string;
  backdropClassName?: string;
  showCloseButton?: boolean;
}
export class Modal extends React.Component<ModalProps> {
  wrapperRef = React.createRef<HTMLDivElement>();
  static defaultProps: Partial<ModalProps> = {
    closeOnBackdropClick: false,
    showCloseButton: true,
    visible: false,
    size: 'medium',
    location: 'top',
    className: '',
    backdropClassName: ''
  };
  componentDidMount(): void {
    const { onBackdropClick } = this.props;
    if (onBackdropClick) {
      document.addEventListener('mousedown', this._onBackdropClick);
    }
  }

  componentWillUnmount(): void {
    const { onBackdropClick } = this.props;
    if (onBackdropClick) {
      document.removeEventListener('mousedown', this._onBackdropClick);
    }
  }
  render(): React.ReactElement | null {
    const { size, visible, className, backdropClassName, location, showCloseButton } = this.props;
    if (!visible) return null;
    const backdropClass = cx('dui-modal', 'dui-modal-backdrop', backdropClassName);
    const itemClass = cx(
      'dui-modal-item',
      { [`dui-modal-item-${size}`]: size !== 'medium' },
      { [`dui-modal-item-${location}`]: location !== 'top' },
      className
    );
    return (
      <div className={backdropClass} onClick={this._onBackdropClick}>
        <div className={itemClass} ref={this.wrapperRef}>
          {showCloseButton && (
            <span onClick={this._closeModal} className="dui-modal-icon">
              <FontAwesomeIcon icon="fa-times" iconStyle="solid" />
            </span>
          )}
          {this.props.children}
        </div>
      </div>
    );
  }

  _onBackdropClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent): void => {
    const { onBackdropClick, closeOnBackdropClick } = this.props;
    if (
      this.wrapperRef &&
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target as any)
    ) {
      if (onBackdropClick) onBackdropClick();
      if (closeOnBackdropClick) {
        this._closeModal();
      }
    }
  };

  _closeModal = (): void => {
    const { onClose } = this.props;
    if (onClose) onClose();
  };
}
