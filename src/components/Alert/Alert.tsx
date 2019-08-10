import * as React from "react";
import cx from "classnames";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";

export type AlertVariant = "info" | "success" | "warning" | "danger";
export interface AlertProps {
  className?: string;
  variant?: AlertVariant;
  message: string;
  description?: string;
  onClose?: () => void;
  withIcon?: boolean;
  icon?: string;
}
export class Alert extends React.Component<AlertProps> {
  static defaultProps: Partial<AlertProps> = {
    variant: "info"
  };
  _getIconFromVariant = () => {
    const { variant } = this.props;

    switch (variant) {
      case "info":
        return "fa-info-circle";
      case "success":
        return "fa-check-circle";
      case "warning":
        return "fa-exclamation-circle";
      case "danger":
        return "fa-times-circle";
      default:
        return "";
    }
  };
  render() {
    const {
      className,
      variant,
      message,
      description,
      onClose,
      icon,
      withIcon
    } = this.props;
    const closable = onClose !== null;
    const baseComponent = (
      <React.Fragment>
        <h1 className={cx("dui-alert-message")}>{message}</h1>
        {description && (
          <p className={cx("dui-alert-description")}>{description}</p>
        )}
        {closable && (
          <span className={cx("dui-alert-close")} onClick={onClose}>
            <FontAwesomeIcon iconStyle="solid" icon="fa-times" />
          </span>
        )}
      </React.Fragment>
    );
    const baseClass = cx(
      "dui-alert",
      { "dui-alert-wi": icon },
      `dui-alert-${variant}`,
      className
    );
    if (withIcon) {
      const itemIcon = icon ? `fa-${icon}` : this._getIconFromVariant();
      return (
        <div className={baseClass}>
          <span className="dui-alert-icon-container">
            <FontAwesomeIcon iconStyle="solid" icon={cx("fa-fw", itemIcon)} />
          </span>
          <div className={cx("dui-alert-wi-content")}>{baseComponent}</div>
        </div>
      );
    }
    return <div className={baseClass}>{baseComponent}</div>;
  }
}
