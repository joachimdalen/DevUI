import cx from 'classnames';
import * as React from 'react';

export interface FormGroupProps {
  label?: string | React.ReactElement;
  inline?: boolean;
  inlineLabel?: boolean;
  required?: boolean;
  requiredType?: FormGroupRequiredType;
  requiredText?: string;
  extra?: string;
  extraType?: FormGroupExtraType;
  notice?: string;
  className?: string;
  maxLength?: number;
  currentLength?: number;
  error?: any;
  errorAccessor?: (error: any) => string;
}
export type FormGroupRequiredType = 'icon' | 'text';
export type FormGroupExtraType = 'success' | 'danger' | 'warning' | 'normal';
export class FormGroup extends React.Component<FormGroupProps> {
  static defaultProps: Partial<FormGroupProps> = {
    inline: false,
    inlineLabel: false,
    extraType: 'normal',
    requiredType: 'icon',
    requiredText: 'Required',
    currentLength: undefined,
    maxLength: undefined
  };
  render(): React.ReactElement {
    const {
      label,
      extra,
      extraType,
      className,
      inline,
      inlineLabel,
      children,
      required,
      requiredType,
      requiredText,
      currentLength,
      maxLength,
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
            className={cx('dui-form-group-required', {
              'dui-form-group-required-text': requiredType === 'text'
            })}
          >
            {requiredType === 'icon' ? '*' : requiredText}
          </span>
        )}
      </label>
    );

    const bodyComp = inline ? <div className="dui-form-group-inline">{children}</div> : children;

    const errorComp = error && errorAccessor && (
      <small className="dui-form-group-extra">{errorAccessor(error)}</small>
    );

    const extraComp = extra && !error && (
      <small
        className={cx('dui-form-group-extra', {
          [`dui-form-group-extra-${extraType}`]: extraType !== 'normal'
        })}
      >
        {extra}
      </small>
    );
    const noticeComp = notice && <div className={cx('dui-form-group-notice')}>{notice}</div>;
    const lengthComp = maxLength && currentLength && (
      <div
        className={cx('dui-form-group-counter', {
          'dui-form-group-counter-error': currentLength > maxLength
        })}
      >
        ({`${currentLength}/${maxLength}`})
      </div>
    );

    let extraItems = undefined;

    if (lengthComp) {
      extraItems = (
        <div className="dui-form-group-items">
          <div>
            {extraComp}
            {errorComp}
            {noticeComp}
          </div>
          {lengthComp}
        </div>
      );
    } else {
      extraItems = (
        <div>
          {extraComp}
          {errorComp}
          {noticeComp}
        </div>
      );
    }

    if (inlineLabel) {
      return (
        <div
          className={cx(
            'dui-form-group',
            { 'dui-form-group-error': error },
            'dui-form-group-label-inline',
            className
          )}
        >
          {label && <div className="dui-form-group-label-container">{labelComponent}</div>}
          <div className="dui-form-group-content">
            {bodyComp}
            {extraItems}
          </div>
        </div>
      );
    }
    return (
      <div className={cx('dui-form-group', { 'dui-form-group-error': error }, className)}>
        {label && labelComponent}
        {bodyComp}
        {extraItems}
      </div>
    );
  }
}
