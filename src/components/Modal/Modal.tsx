import * as React from "react";
import cx from "classnames";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
export type ModalSize = "small" | "medium" | "large";
export type ModalLocation = "top" | "center";

export interface Props {
  onBackdropClick?: () => void;
  onClose?: () => void;
  closeOnBackdropClick?: boolean;
  visible: boolean;
  size?: ModalSize;
  location?: ModalLocation;
  className?: string;
  backdropClassName?: string;
}
export class Modal extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
    closeOnBackdropClick: false,
    visible: false,
    size: "medium",
    location: "top",
    className: "",
    backdropClassName: ""
  };

  render() {
    const {
      size,
      visible,
      className,
      backdropClassName,
      location
    } = this.props;
    if (!visible) return null;
    const backdropClass = cx(
      "dui-modal",
      "dui-modal-backdrop",
      backdropClassName
    );
    const itemClass = cx(
      "dui-modal-item",
      { [`dui-modal-item-${size}`]: size !== "medium" },
      { [`dui-modal-item-${location}`]: location !== "top" },
      className
    );
    return (
      <React.Fragment>
        <div className={backdropClass} onClick={this._onBackdropClick}>
          <div className={itemClass}>
            <span onClick={this._closeModal} className="dui-modal-icon">
              <FontAwesomeIcon icon="fas fa-times" />
            </span>
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }

  _onBackdropClick = () => {
    const { onBackdropClick, closeOnBackdropClick } = this.props;
    onBackdropClick && onBackdropClick();
    if (closeOnBackdropClick) {
      this._closeModal();
    }
  };

  _closeModal = () => {
    const { onClose } = this.props;
    onClose && onClose();
  };
}
