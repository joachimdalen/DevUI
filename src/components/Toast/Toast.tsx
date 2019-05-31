import * as React from "react";
import cx from "classnames";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";

export interface Props {
  className?: string;
  icon?: string;
  title: string;
  subtitle?: string;
  time?: string;
  variant?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export class Toast extends React.Component<Props> {
  public render() {
    const {
      className = "",
      icon,
      variant = "default",
      title,
      subtitle,
      time,
      dismissible = true,
      onDismiss
    } = this.props;
    const containerClass = cx(
      "dui-toast",
      { "dui-toast-icon": icon },
      [`dui-toast-${variant}`],
      className
    );
    return (
      <div className={containerClass}>
        {icon && <FontAwesomeIcon icon={icon} />}
        <div className="dui-toast-details">
          <h3 className="dui-toast-title">{title}</h3>
          {subtitle && <div className="dui-toast-subtitle">{subtitle}</div>}
          {time && <div className="dui-toast-time">{time}</div>}
        </div>
        {dismissible && onDismiss && (
          <button
            type="button"
            className="dui-toast-close-button"
            onClick={() => onDismiss()}
          >
            <FontAwesomeIcon
              icon="fas fa-times"
              className="dui-toast-close-icon"
            />
          </button>
        )}
      </div>
    );
  }
}