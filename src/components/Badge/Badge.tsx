import cx from 'classnames';
import * as React from 'react';

import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
export interface BadgeProps {
  label: string | React.ReactNode;
  icon?: string | React.ReactElement;
  variant?: string;
  dismissText?: string | React.ReactNode;
  onDismiss?: () => void;
}

export class Badge extends React.PureComponent<BadgeProps> {
  static defaultProps: Partial<BadgeProps> = {
    variant: 'default'
  };

  _handleClick = (): void => {
    const { onDismiss } = this.props;
    if (onDismiss) onDismiss();
  };

  public render(): React.ReactElement {
    const { label, icon, variant, onDismiss, dismissText } = this.props;
    const badgeClass = cx(
      'dui-badge',
      { [`dui-badge-${variant}`]: variant !== 'default' },
      { [`dui-badge-dismiss`]: onDismiss }
    );
    const dismissibleClass = cx('dui-badge-dismissible');
    const wrapperClass = cx('dui-badge-wrapper');
    const iconClass = cx('dui-badge-icon');
    const isDismissible = onDismiss;

    const iconComponent = React.isValidElement(icon)
      ? React.cloneElement(icon, { className: iconClass })
      : icon && <FontAwesomeIcon iconStyle="solid" icon={icon} className={iconClass} />;

    const badgeComponent = (
      <span className={badgeClass}>
        {iconComponent}
        {label}
      </span>
    );
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
