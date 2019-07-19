import * as React from "react";
import cx from "classnames";
import { isUndefined } from "util";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
export interface BadgeProps {
  label: string;
  variant?: string;
  dismissible?: boolean;
  dismissText?: string | React.ReactNode;
  onDismiss?: () => any;
}

export class Badge extends React.PureComponent<BadgeProps> {
  static defaultProps: Partial<BadgeProps> = {
    variant: "default",
    dismissible: false
  };

  _handleClick = () => {
    const { onDismiss } = this.props;
    onDismiss && onDismiss();
  };

  public render() {
    const { label, variant, dismissible, onDismiss, dismissText } = this.props;
    const badgeClass = cx(
      "dui-badge",
      { [`dui-badge-${variant}`]: variant !== "default" },
      { [`dui-badge-dismiss`]: dismissible }
    );
    const dismissibleClass = cx("dui-badge-dismissible");
    const wrapperClass = cx("dui-badge-wrapper");
    const isDismissible = !isUndefined(onDismiss) && dismissible;
    const badgeComponent = <span className={badgeClass}>{label}</span>;
    const dismissIcon = <FontAwesomeIcon iconStyle="solid" icon="fa-times" />;
    const dismissTextComponent = isUndefined(dismissText)
      ? dismissIcon
      : dismissText;

    if (isDismissible)
      return (
        <span className={wrapperClass}>
          {badgeComponent}
          <span className={dismissibleClass} onClick={this._handleClick}>
            {dismissTextComponent}
          </span>
        </span>
      );

    return badgeComponent;
  }
}
