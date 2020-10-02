import cx from 'classnames';
import * as React from 'react';

export type CheckBoxIndicatorLocation = 'left' | 'right';
export interface CheckBoxProps {
  label?: string;
  checked: boolean;
  onCheckChange: (state: boolean) => void;
  disabled?: boolean;
  variant?: string;
  className?: string;
  indeterminate?: boolean;
  name?: string;
  indicatorLocation?: CheckBoxIndicatorLocation;
}

export class CheckBox extends React.Component<CheckBoxProps> {
  static defaultProps: Partial<CheckBoxProps> = {
    disabled: false,
    variant: 'default',
    indicatorLocation: 'left'
  };
  _inputRef: any = React.createRef();

  componentDidMount() {
    const { checked, indeterminate } = this.props;
    this._setIndeterminate(indeterminate === true && checked === false);
  }
  componentDidUpdate(prevProps: CheckBoxProps) {
    const { checked, indeterminate = false } = this.props;
    if (prevProps.indeterminate != this.props.indeterminate) {
      this._setIndeterminate(indeterminate && checked === false);
    }
  }

  public render() {
    const {
      label,
      checked,
      disabled,
      variant,
      onCheckChange,
      className,
      name,
      indicatorLocation
    } = this.props;

    return (
      <label
        className={cx(
          'dui-checkbox',
          { ['disabled']: disabled },
          { [`dui-checkbox-${variant}`]: variant !== 'default' },
          { [`dui-checkbox-right`]: indicatorLocation !== 'left' },
          { [`dui-checkbox-no-label`]: !label },
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
  _setIndeterminate(value: boolean) {
    this._inputRef.indeterminate = value;
  }
}
