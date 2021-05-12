import cx from 'classnames';
import * as dayjs from 'dayjs';
import * as React from 'react';

import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { DatePicker, DatePickerProps } from './DatePicker';

export interface DatePickerInputProps extends Omit<DatePickerProps, 'classname'> {
  disabled?: boolean;
  className?: string;
  format?: string;
  datePickerClassName?: string;
  loading?: boolean;
  closeOnChange?: boolean;
  placeholder?: string;
}

export const DatePickerInput = ({
  disabled,
  loading,
  className,
  format = 'ddd, MMM D, YYYY h:mm A',
  datePickerClassName,
  date,
  closeOnChange = true,
  onChange,
  placeholder = 'Select a date',
  ...restProps
}: DatePickerInputProps): React.ReactElement => {
  const [expanded, setExpanded] = React.useState(false);
  const hasDateSelected = date !== undefined;
  const isDisabled = disabled || loading;
  const containerClass = cx('dui-datepicker-input', { disabled: isDisabled }, className);
  const infoClass = cx('dui-datepicker-input-info');
  const previewClass = cx('dui-datepicker-input-preview');
  const caretContainerClass = cx('dui-datepicker-input-caret-container');
  const optionsClass = cx('dui-datepicker-input-options');
  const optionsListClass = cx('dui-datepicker-input-options-list');
  const caretIcon = loading ? 'fa-spinner' : 'fa-calendar-alt';
  const caretIconClass = cx({ 'dui-datepicker-input-loading': loading });

  const handleChange = (date: Date) => {
    if (isDisabled) return;

    if (onChange) {
      onChange(date);
    }

    if (closeOnChange) {
      setExpanded(false);
    }
  };

  return (
    <div className={containerClass} role="select">
      <div className={infoClass} onClick={() => !isDisabled && setExpanded(prev => !prev)}>
        <div className={previewClass}>
          {hasDateSelected ? dayjs(date).format(format) : placeholder}
        </div>
        <span className={caretContainerClass}>
          <FontAwesomeIcon
            iconStyle={loading ? 'solid' : 'regular'}
            icon={caretIcon}
            animate={loading}
            className={caretIconClass}
          />
        </span>
      </div>

      {expanded && (
        <div className={optionsClass}>
          <div className={optionsListClass}>
            <DatePicker
              date={date}
              className={datePickerClassName}
              onChange={handleChange}
              {...restProps}
            />
          </div>
        </div>
      )}
    </div>
  );
};
