import * as React from "react";
import cx from "classnames";
interface RadioButtonProps {
  className?: string;
  checked: boolean;
  label: string;
  variant?: string;
  onCheckChange: () => void;
}

class RadioButton extends React.Component<RadioButtonProps> {
  render() {
    const { checked, variant, label, className } = this.props;
    const labelClass = cx(
      "dui-radiobutton-container",
      [`dui-radiobutton-${variant}`],
      className
    );
    return (
      <label className={labelClass}>
        {label}
        <input
          className="dui-radiobutton"
          type="radio"
          checked={checked}
          onChange={() => this._onChange()}
        />
        <span className="dui-radiobutton-selected" />
      </label>
    );
  }
  _onChange() {
    const { onCheckChange } = this.props;
    onCheckChange();
  }
}
export { RadioButton, RadioButtonProps };
