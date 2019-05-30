import * as React from "react";
import cx from "classnames";

export interface Props {
  className?: string;
  toggled?: boolean;
  showLabels?: boolean;
  rounded?: boolean;
  onToggle: () => any;
  size?: "normal" | "large";
  variant?: string;
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
        />
        <span className={cx("dui-toggle-button")} />
      </label>
    );
  }
}
