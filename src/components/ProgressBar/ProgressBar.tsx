import cx from 'classnames';
import * as React from 'react';

export interface ProgressBarProps {
  className?: string;
  completed: number;
  striped?: boolean;
  animated?: boolean;
  variant?: string;
  title?: string;
}

export class ProgressBar extends React.Component<ProgressBarProps> {
  static defaultProps: Partial<ProgressBarProps> = {
    className: '',
    variant: 'default',
    striped: false,
    animated: false
  };
  public render(): React.ReactElement {
    const { className, variant, completed, title, striped, animated } = this.props;

    const innerClass = cx(
      'dui-progress-bar-inner',
      [`dui-progress-${variant}`],
      { 'dui-progress-striped': striped },
      { 'dui-progress-animated': animated }
    );
    return (
      <div className={cx('dui-progress-bar-container', className)}>
        <div className={innerClass} style={{ width: `${completed}%` }}>
          <span>{title}</span>
        </div>
      </div>
    );
  }
}
