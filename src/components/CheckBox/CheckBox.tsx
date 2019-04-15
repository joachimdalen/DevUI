import * as React from "react";
import cx from "classnames";
export interface Props {
  label: string;
  checked: boolean;
  onCheckChange: (state: boolean) => void;
  disabled?: boolean;
  variant?: string;
  className?: string;
}

export class CheckBox extends React.Component<Props> {
  public render() {
    const {
      label,
      checked,
      disabled = false,
      variant = "default",
      onCheckChange,
      className
    } = this.props;
    return (
      <label
        className={cx(
          "cui-checkbox",
          { ["disabled"]: disabled },
          { [`cui-checkbox-${variant}`]: variant !== "default" },
          className
        )}
      >
        <span>{label}</span>
        <input
          className="cui-checkbox-input"
          type="checkbox"
          checked={checked}
          onChange={() => onCheckChange(!checked)}
          disabled={disabled}
        />
        <span className="cui-checkmark" />
      </label>
    );
  }
}
