import * as React from "react";
import cx from "classnames";
export interface FormGroupProps {
  label: string | React.ReactElement;
  inline?: boolean;
  required?: boolean;
  requiredType?: FormGroupRequiredType;
  extra?: string;
  extraType?: FormGroupExtraType;
  notice?: string;
  className?: string;
  error?: any;
  errorAccessor?: (error: any) => string;
}
export type FormGroupRequiredType = "icon" | "text";
export type FormGroupExtraType = "success" | "danger" | "warning" | "normal";
export class FormGroup extends React.Component<FormGroupProps> {
  static defaultProps: Partial<FormGroupProps> = {
    inline: false,
    extraType: "normal",
    requiredType: "icon"
  };
  render() {
    const {
      label,
      extra,
      extraType,
      className,
      inline,
      children,
      required,
      requiredType,
      error,
      errorAccessor,
      notice
    } = this.props;
    const labelComponent = React.isValidElement(label) ? (
      label
    ) : (
        <label className="dui-form-group-label">
          {label}
          {required && (
            <span
              className={cx("dui-form-group-required", {
                "dui-form-group-required-text": requiredType === "text"
              })}
            >
              {requiredType === "icon" ? "*" : "Required"}
            </span>
          )}
        </label>
      );

    const bodyComp = inline ? (
      <div className="dui-form-group-inline">{children}</div>
    ) : (
        children
      );

    const errorComp = error && errorAccessor && (
      <small className="dui-form-group-error dui-form-group-extra">
        {errorAccessor(error)}
      </small>
    );

    const extraComp = extra && !error && (
      <small
        className={cx("dui-form-group-extra", {
          [`dui-form-group-extra-${extraType}`]: extraType !== "normal"
        })}
      >
        {extra}
      </small>
    );
    const noticeComp = notice && (
      <div className={cx('dui-form-group-notice')}>{notice}</div>
    )
    return (
      <div className={cx("dui-form-group", className)}>
        {labelComponent}
        {bodyComp}
        {extraComp}
        {errorComp}
        {noticeComp}
      </div>
    );
  }
}
