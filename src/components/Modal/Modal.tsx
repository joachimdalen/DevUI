import * as React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "../FontAwesomeIcon/FontAwesomeIcon";
import { GenericSizes } from "../common";

type ModalSize = GenericSizes;
type ModalLocation = "top" | "center";

interface ModalProps {
  onBackdropClick?: () => void;
  onClose?: () => void;
  closeOnBackdropClick?: boolean;
  visible: boolean;
  size?: ModalSize;
  location?: ModalLocation;
  className?: string;
  backdropClassName?: string;
}
class Modal extends React.Component<ModalProps> {
  wrapperRef = React.createRef<HTMLDivElement>();
  static defaultProps: Partial<ModalProps> = {
    closeOnBackdropClick: false,
    visible: false,
    size: "medium",
    location: "top",
    className: "",
    backdropClassName: ""
  };
  componentDidMount() {
    const { onBackdropClick } = this.props;
    if (onBackdropClick) {
      document.addEventListener("mousedown", this._onBackdropClick);
    }
  }

  componentWillUnmount() {
    const { onBackdropClick } = this.props;
    if (onBackdropClick) {
      document.removeEventListener("mousedown", this._onBackdropClick);
    }
  }
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
      <div className={backdropClass} onClick={this._onBackdropClick}>
        <div className={itemClass} ref={this.wrapperRef}>
          <span onClick={this._closeModal} className="dui-modal-icon">
            <FontAwesomeIcon icon="fa-times" iconStyle="solid" />
          </span>
          {this.props.children}
        </div>
      </div>
    );
  }

  _onBackdropClick = (event: any) => {
    const { onBackdropClick, closeOnBackdropClick } = this.props;
    if (
      this.wrapperRef &&
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target)
    ) {
      onBackdropClick && onBackdropClick();
      if (closeOnBackdropClick) {
        this._closeModal();
      }
    }
  };

  _closeModal = () => {
    const { onClose } = this.props;
    onClose && onClose();
  };
}
export { ModalSize, ModalLocation, ModalProps, Modal };
