import cx from 'classnames';
import * as React from 'react';

export type ToggleSize = 'normal' | 'large';
export interface ToggleProps {
  className?: string;
  toggled?: boolean;
  showLabels?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  size?: ToggleSize;
  variant?: string;
  name?: string;
}

export const Toggle = ({
  className = '',
  toggled = false,
  rounded = false,
  variant = 'default',
  size = 'normal',
  showLabels = false,
  disabled = false,
  onToggle,
  onBlur,
  name
}: ToggleProps): React.ReactElement => (
  <label
    className={cx(
      'dui-toggle',
      { [`dui-toggle-rounded`]: rounded },
      { [`dui-toggle-${variant}`]: variant !== 'default' },
      { [`dui-toggle-${size}`]: size !== 'normal' },
      { [`dui-toggle-labels`]: showLabels },
      { [`dui-toggle-disabled`]: disabled },
      className
    )}
  >
    <input
      type="checkbox"
      className={cx('dui-toggle')}
      checked={toggled}
      onChange={e => onToggle(e)}
      onBlur={e => {
        if (onBlur) onBlur(e);
      }}
      name={name}
      disabled={disabled}
    />
    <span className={cx('dui-toggle-button')} />
  </label>
);
