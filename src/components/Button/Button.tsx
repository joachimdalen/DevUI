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
          "cui-button",
          { disabled: disabled },
          { [`cui-button-${variant}`]: variant !== "default" && !outlined },
          { [`cui-button-${format}`]: format !== "default" },
          { [`cui-button-outlined-${variant}`]: outlined },
          { [`cui-button-dashed`]: dashed && outlined }
        )}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
}
