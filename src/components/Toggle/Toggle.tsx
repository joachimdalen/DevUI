import * as React from "react";
import cx from "classnames";

export type ToggleSize = "normal" | "large";
export interface ToggleProps {
  className?: string;
  toggled?: boolean;
  showLabels?: boolean;
  rounded?: boolean;
  onToggle: () => any;
  size?: ToggleSize;
  variant?: string;
  name?: string;
}

export class Toggle extends React.Component<ToggleProps> {
  public render() {
    const {
      className = "",
      toggled = false,
      rounded = false,
      variant = "default",
      size = "normal",
      showLabels = false,
      onToggle,
      name
    } = this.props;

    return (
      <label
        className={cx(
          "dui-toggle",
          { [`dui-toggle-rounded`]: rounded },
          { [`dui-toggle-${variant}`]: variant !== "default" },
          { [`dui-toggle-${size}`]: size !== "normal" },
          { [`dui-toggle-labels`]: showLabels },
          className
        )}
      >
        <input
          type="checkbox"
          className={cx("dui-toggle")}
          checked={toggled}
          onChange={() => onToggle()}
          name={name}
        />
        <span className={cx("dui-toggle-button")} />
      </label>
    );
  }
}
