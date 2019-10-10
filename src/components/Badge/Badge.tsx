import * as React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "../FontAwesomeIcon/FontAwesomeIcon";

interface BadgeProps {
  label: string;
  variant?: string;
  dismissText?: string | React.ReactNode;
  onDismiss?: () => any;
}

class Badge extends React.PureComponent<BadgeProps> {
  static defaultProps: Partial<BadgeProps> = {
    variant: "default"
  };

  _handleClick = () => {
    const { onDismiss } = this.props;
    onDismiss && onDismiss();
  };

  public render() {
    const { label, variant, onDismiss, dismissText } = this.props;
    const badgeClass = cx(
      "dui-badge",
      { [`dui-badge-${variant}`]: variant !== "default" },
      { [`dui-badge-dismiss`]: onDismiss }
    );
    const dismissibleClass = cx("dui-badge-dismissible");
    const wrapperClass = cx("dui-badge-wrapper");
    const isDismissible = onDismiss;
    const badgeComponent = <span className={badgeClass}>{label}</span>;
    const dismissIcon = <FontAwesomeIcon iconStyle="solid" icon="fa-times" />;
    const dismissTextComponent = dismissText ? dismissText : dismissIcon;

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
export { BadgeProps, Badge };
