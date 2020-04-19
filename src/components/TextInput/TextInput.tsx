import * as React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "../FontAwesomeIcon/FontAwesomeIcon";

export interface TextInputProps {
  className?: string;
  wrapperClassName?: string;
  autoComplete?: boolean;
  autoFocus?: boolean;
  name?: string;
  maxLength?: number;
  placeholder?: string;
  password?: boolean;
  clearable?: boolean;
  id?: string;
  value: string;
  disabled?: boolean;
  fillWidth?: boolean;
  small?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  icon?: string | any;
  iconPlacement?: TextInputIconPlacement;
  readOnly?:boolean;
}
export type TextInputIconPlacement = "start" | "end";
type AllProps = TextInputProps & React.HTMLAttributes<HTMLInputElement>;
export class TextInput extends React.Component<AllProps> {
  public render() {
    const {
      autoComplete = true,
      autoFocus = false,
      name,
      maxLength,
      placeholder,
      clearable = false,
      password = false,
      id,
      value,
      disabled = false,
      fillWidth = false,
      onChange,
      small = false,
      iconPlacement = "end",
      icon,
      className = "",
      wrapperClassName = "",
      ...rest
    } = this.props;
    var inputRef: React.RefObject<HTMLInputElement> = React.createRef<
      HTMLInputElement
    >();
    const autoCompleteValue = autoComplete ? "on" : "off";
    const typeValue = password ? "password" : "text";

    const wrapperClass = cx(
      "dui-input-wrapper",
      { "dui-input-wrapper-block": fillWidth },
      { "dui-input-small": small },
      wrapperClassName
    );
    const inputComponentClass = cx(
      "dui-input",
      { "dui-input-disabled": disabled },
      className
    );
    const inputComponent = (
      <input
        type={typeValue}
        className={inputComponentClass}
        autoComplete={autoCompleteValue}
        autoFocus={autoFocus}
        name={name || ""}
        maxLength={maxLength}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        value={value}
        disabled={disabled}
        ref={inputRef}
        {...rest}
      />
    );

    const showIcon = !(clearable && iconPlacement === "end");
    const clearVal = () => {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    };
    return (
      <div className={wrapperClass}>
        {inputComponent}
        {showIcon && icon && (
          <span className={cx("dui-input-icon")}>{icon}</span>
        )}
        {clearable && value && (
          <span
            className={cx("dui-input-icon", "dui-input-clear")}
            onClick={() => clearVal()}
          >
            <FontAwesomeIcon iconStyle="solid" icon="fa-times" />
          </span>
        )}
      </div>
    );
  }
}
