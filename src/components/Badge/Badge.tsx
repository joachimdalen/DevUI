import * as React from "react";
import cx from "classnames";
import { isUndefined } from "util";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
export interface Props {
  label: string;
  variant?: string;
  neonMode?: boolean;
  dismissible?: boolean;
  dismissText?: string | React.ReactNode;
  onDismiss?: () => any;
}

export class Badge extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
    variant: "default",
    dismissible: false,
    dismissText: ""
  };

  _handleClick = () => {
    const { onDismiss } = this.props;
    onDismiss && onDismiss()
  }

  public render() {
    const {
      label,
      variant,
      dismissible,
      onDismiss,
      dismissText
    } = this.props;
    const badgeClass = cx(
      "dui-badge",
      { [`dui-badge-${variant}`]: variant !== "default" },
      { [`dui-badge-dismiss`]: dismissible }
    );
    const dismissibleClass = cx("dui-badge-dismissible");
    const wrapperClass = cx("dui-badge-wrapper");
    const isDismissible = !isUndefined(onDismiss) && dismissible;
    const badgeComponent = <span className={badgeClass}>{label}</span>;
    const dismissIcon = <FontAwesomeIcon icon="fas fa-times" />;
    const dismissTextComponent = isUndefined(dismissText)
      ? dismissIcon
      : dismissText;

    if (isDismissible)
      return (
        <div className={wrapperClass}>
          {badgeComponent}
          <span className={dismissibleClass} onClick={this._handleClick}>
            {dismissTextComponent}
          </span>
        </div>
      );

    return badgeComponent;
  }
}
