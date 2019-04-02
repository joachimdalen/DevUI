import * as React from "react";
import cx from "classnames";

export interface Props {
  className: string;
  toggled: boolean;
  showLabels: boolean;
  rounded: boolean;
  onText: string;
  offText: string;
  onToggle: () => any;
  size: "normal" | "large";
  variant: string;
}

export class Toggle extends React.Component<Props> {
  public render() {
    const {
      className = "",
      toggled = false,
      rounded = false,
      variant = "default",
      size = "normal",
      showLabels = false,
      onToggle
    } = this.props;

    return (
      <label
        className={cx(
          "cui-toggle",
          { [`cui-toggle-rounded`]: rounded },
          { [`cui-toggle-${variant}`]: variant !== "default" },
          { [`cui-toggle-${size}`]: size !== "normal" },
          { [`cui-toggle-labels`]: showLabels },
          className
        )}
      >
        <input
          type="checkbox"
          className={cx("cui-toggle")}
          checked={toggled}
          onChange={() => onToggle()}
        />
        <span className={cx("cui-toggle-button")} />
      </label>
    );
  }
}
