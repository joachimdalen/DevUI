import cx from 'classnames';
import * as React from 'react';
export interface RadioButtonProps {
  className?: string;
  checked: boolean;
  label: string;
  variant?: string;
  onCheckChange: () => void;
}

export class RadioButton extends React.Component<RadioButtonProps> {
  render(): React.ReactElement {
    const { checked, variant, label, className } = this.props;
    const labelClass = cx('dui-radiobutton-container', [`dui-radiobutton-${variant}`], className);
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
  _onChange(): void {
    const { onCheckChange } = this.props;
    onCheckChange();
  }
}
