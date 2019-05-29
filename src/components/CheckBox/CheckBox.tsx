import cx from "classnames";
import * as React from "react";
export interface Props {
  label?: string;
  checked: boolean;
  onCheckChange: (state: boolean) => void;
  disabled?: boolean;
  variant?: string;
  className?: string;
  indeterminate?: boolean;
  name?: string;
}

export class CheckBox extends React.Component<Props> {
  _inputRef: any = React.createRef();

  componentDidMount() {
    const { checked, indeterminate } = this.props;
    this._setIndeterminate(indeterminate === true && checked === false);
  }
  componentDidUpdate(prevProps: Props) {
    const { checked, indeterminate = false } = this.props;
    if (prevProps.indeterminate != this.props.indeterminate) {
      this._setIndeterminate(indeterminate && checked === false);
    }
  }

  public render() {
    const {
      label,
      checked,
      disabled = false,
      variant = "default",
      onCheckChange,
      className,
      name
    } = this.props;

    return (
      <label
        className={cx(
          "dui-checkbox",
          { ["disabled"]: disabled },
          { [`dui-checkbox-${variant}`]: variant !== "default" },
          className
        )}
      >
        {label && <span>{label}</span>}
        <input
          className="dui-checkbox-input"
          type="checkbox"
          checked={checked}
          onChange={() => onCheckChange(!checked)}
          disabled={disabled}
          ref={node => (this._inputRef = node)}
          name={name}
        />
        <span className="dui-checkmark" />
      </label>
    );
  }
  _setIndeterminate(value: Boolean) {
    //console.log("Setting indent (" + this.props.name + ")", value);
    this._inputRef.indeterminate = value;
  }
}
