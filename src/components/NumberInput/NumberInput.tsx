import cx from 'classnames';
import * as React from 'react';

import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';

export interface NumberInputProps {
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
}
interface State {
  value: number;
}

export class NumberInput extends React.Component<NumberInputProps, State> {
  static defaultProps: Partial<NumberInputProps> = {
    step: 1,
    min: Number.MIN_SAFE_INTEGER || -9007199254740991,
    max: Number.MAX_SAFE_INTEGER || 9007199254740991
  };
  state = {
    value: this.props.value || 1
  };
  componentDidUpdate(prevProps: NumberInputProps): void {
    if (prevProps !== this.props && this.props.value) {
      this.setState({
        value: this.props.value
      });
    }
  }
  _increase = (): void => {
    const { max, step, onChange } = this.props;
    const { value } = this.state;
    let newVal = value;
    if (max !== undefined) {
      const oldValue = value;
      if (oldValue >= max) {
        newVal = oldValue;
      } else {
        newVal = oldValue + (step || 1);
      }
      this.setState({ value: newVal }, () => {
        if (onChange) onChange(this.state.value);
      });
    }
  };
  _decrease = (): void => {
    const { min, step, onChange } = this.props;
    const { value } = this.state;
    let newVal;
    if (min !== undefined) {
      const oldValue = value;
      if (oldValue <= min) {
        newVal = oldValue;
      } else {
        if (step) {
          console.log(oldValue - step);
          if (oldValue - step <= min) {
            newVal = min;
          } else {
            newVal = oldValue - step;
          }
        } else {
          newVal = oldValue - 1;
        }
      }
      this.setState({ value: newVal }, () => {
        if (onChange) onChange(this.state.value);
      });
    }
  };
  _inputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
    const { onChange } = this.props;
    this.setState({ value: parseInt(event.target.value) }, () => {
      if (onChange) onChange(this.state.value);
    });
  };
  public render(): React.ReactElement {
    const { min, max } = this.props;
    const { value } = this.state;
    const baseClass = cx('dui-number-input');
    return (
      <div className={baseClass}>
        <input type="number" min={min} max={max} value={value} onChange={this._inputChange} />
        <div className="dui-number-input-buttons">
          <div
            className="dui-number-input-button dui-number-input-button-increase"
            onClick={this._increase}
          >
            <FontAwesomeIcon iconStyle="solid" icon="fa-plus" />
          </div>
          <div
            className="dui-number-input-button dui-number-input-button-decrease"
            onClick={this._decrease}
          >
            <FontAwesomeIcon iconStyle="solid" icon="fa-minus" />
          </div>
        </div>
      </div>
    );
  }
}
