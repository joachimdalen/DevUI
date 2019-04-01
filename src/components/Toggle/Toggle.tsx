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
      onToggle
    } = this.props;

    return (
      <label
        className={cx(
          "cb-toggle",
          { [`cb-toggle-rounded`]: rounded },
          { [`cb-toggle-${variant}`]: variant !== "default" },
          { [`cb-toggle-${size}`]: size !== "normal" },
          className
        )}
      >
        <input
          type="checkbox"
          className={cx("cb-toggle")}
          checked={toggled}
          onChange={() => onToggle()}
        />
        <span className={cx("cb-toggle-button")} />
      </label>
    );
  }
}
