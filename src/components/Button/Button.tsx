import * as React from "react";
import cx from "classnames";
export interface Props {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant: string;
  format: "default" | "block";
  outlined: boolean;
  dashed: boolean;
}

export class Button extends React.Component<Props> {
  public render() {
    const {
      label,
      onClick,
      format = "default",
      disabled = false,
      variant = "default",
      outlined = false,
      dashed = false
    } = this.props;
    return (
      <button
        className={cx(
          "cb-button",
          { disabled: disabled },
          { [`cb-button-${variant}`]: variant !== "default" && !outlined },
          { [`cb-button-${format}`]: format !== "default" },
          { [`cb-button-outlined-${variant}`]: outlined },
          { [`cb-button-dashed`]: dashed }
        )}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
}
