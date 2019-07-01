import * as React from "react";
import cx from "classnames";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";

export interface Props {
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
}
interface State {
  value: number;
}

export class NumberInput extends React.Component<Props, State> {
  static defaultProps: Partial<Props> = {
    step: 1,
    min: Number.MIN_SAFE_INTEGER || -9007199254740991,
    max: Number.MAX_SAFE_INTEGER || 9007199254740991
  };
  state = {
    value: this.props.value || 1
  };
  componentDidUpdate(prevProps: Props, prevState: State, snapshot: any) {
    if (prevProps !== this.props && this.props.value) {
      this.setState({
        value: this.props.value
      });
    }
  }
  _increase = () => {
    const { max, step, onChange } = this.props;
    const { value } = this.state;
    if (max !== undefined) {
      var oldValue = value;
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + (step || 1);
      }
      this.setState({ value: newVal }, () => {
        onChange && onChange(this.state.value);
      });
    }
  };
  _decrease = () => {
    const { min, step, onChange } = this.props;
    const { value } = this.state;
    if (min !== undefined) {
      var oldValue = value;
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        if (step) {
          console.log(oldValue - step);
          if (oldValue - step <= min) {
            var newVal = min;
          } else {
            var newVal = oldValue - step;
          }
        } else {
          var newVal = oldValue - 1;
        }
      }
      this.setState({ value: newVal }, () => {
        onChange && onChange(this.state.value);
      });
    }
  };
  _inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const { onChange } = this.props;
    this.setState({ value: parseInt(event.target.value) }, () => {
      onChange && onChange(this.state.value);
    });
  };
  public render() {
    const { min, max } = this.props;
    const { value } = this.state;
    const baseClass = cx("dui-number-input");
    return (
      <div className={baseClass}>
        <input
          type="number"
          min={min}
          max={max}
          value={value}
          onChange={this._inputChange}
        />
        <div className="dui-number-input-buttons">
          <div
            className="dui-number-input-button dui-number-input-button-increase"
            onClick={this._increase}
          >
            <FontAwesomeIcon icon="fas fa-plus" />
          </div>
          <div
            className="dui-number-input-button dui-number-input-button-decrease"
            onClick={this._decrease}
          >
            <FontAwesomeIcon icon="fas fa-minus" />
          </div>
        </div>
      </div>
    );
  }
}
