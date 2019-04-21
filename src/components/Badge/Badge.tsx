import * as React from "react";
import cx from "classnames";
import { isUndefined } from "util";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
export interface Props {
  label: string;
  variant: string;
  neonMode: boolean;
  dismissible: boolean;
  dismissText: string | React.ReactNode;
  onDismiss: () => any;
}

export class Badge extends React.Component<Props> {
  public render() {
    const { label, variant, dismissible, onDismiss, dismissText } = this.props;
    console.log(this.props);
    const badgeClass = cx(
      "cui-badge",
      { [`cui-badge-${variant}`]: variant !== "default" },
      { [`cui-badge-dismiss`]: dismissible }
    );
    const dismissibleClass = cx("cui-badge-dismissible");
    const wrapperClass = cx("cui-badge-wrapper");
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
          <span className={dismissibleClass} onClick={() => onDismiss()}>
            {dismissTextComponent}
          </span>
        </div>
      );

    return badgeComponent;
  }
}
