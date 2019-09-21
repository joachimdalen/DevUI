import * as React from "react";
import cx from "classnames";
import { isUndefined } from "util";
import { GenericSizes, Omit } from "../common";

export interface Props {
  className?: string;
  autoComplete?: boolean;
  autoFocus?: boolean;
  name?: string;
  maxLength?: number;
  placeholder?: string;
  password?: boolean;
  id?: string;
  value: string;
  disabled?: boolean;
  size?: Omit<GenericSizes, "medium">;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  addonBefore?: string | React.ReactElement;
  addonAfter?: string | React.ReactElement;
  suffix?: string | any;
  prefix?: string | any;
}
type AllProps = Props & React.HTMLAttributes<HTMLInputElement>;
export class TextInput extends React.Component<AllProps> {
  public render() {
    const {
      autoComplete = true,
      autoFocus = false,
      name,
      maxLength,
      placeholder,
      password = false,
      id,
      value,
      disabled = false,
      onChange,
      size,
      addonAfter,
      addonBefore,
      prefix,
      suffix,
      className = "",
      ...rest
    } = this.props;

    const autoCompleteValue = autoComplete ? "on" : "off";
    const typeValue = password ? "password" : "text";
    const isDefaultSize = isUndefined(size);
    const hasAddonBefore = !isUndefined(addonBefore);
    const hasAddonAfter = !isUndefined(addonAfter);
    const hasPrefix = !isUndefined(prefix);
    const hasSuffix = !isUndefined(suffix);

    const sizeClass = isDefaultSize
      ? ""
      : size === "small"
        ? "dui-input-small"
        : "dui-input-large";
    const shouldWrapAddons = hasAddonBefore || hasAddonAfter;
    const shouldWrapFix = hasPrefix || hasSuffix;
    const addonWrapperClass = cx(
      "dui-input-wrapper",
      { ["dui-input-addon-before"]: hasAddonBefore },
      { ["dui-input-addon-after"]: hasAddonAfter }
    );
    const fixWrapperClass = cx("dui-input-fix-wrapper");
    const inputComponentClass = cx(
      "dui-input",
      { "dui-input-disabled": disabled },
      sizeClass,
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
        {...rest}
      />
    );

    if (!shouldWrapAddons && !shouldWrapFix) {
      return inputComponent;
    }

    if (shouldWrapFix) {
      return (
        <div className={fixWrapperClass}>
          {prefix && <span className={cx("dui-input-prefix")}>{prefix}</span>}
          {inputComponent}
          {suffix && <span className={cx("dui-input-suffix")}>{suffix}</span>}
        </div>
      );
    }

    return (
      <div className={addonWrapperClass}>
        {addonBefore && (
          <span className={cx("dui-input-addon-before")}>{addonBefore}</span>
        )}
        {inputComponent}
        {addonAfter && (
          <span className={cx("dui-input-addon-after")}>{addonAfter}</span>
        )}
      </div>
    );
  }
}
