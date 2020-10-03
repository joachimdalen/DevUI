import cx from 'classnames';
import * as React from 'react';
export interface ListItemProps {
  title: string;
  subtitle?: string;
  leftIcon?: string | React.ReactNode;
  rightIcon?: string | React.ReactNode;
}

export class ListItem extends React.Component<ListItemProps> {
  public render(): React.ReactElement {
    const { title, subtitle, rightIcon, leftIcon } = this.props;
    return (
      <li className={cx('dui-list-item')}>
        {leftIcon && <span className={cx('dui-list-item-icon')}>{leftIcon}</span>}
        {rightIcon && (
          <span className={cx('dui-list-item-icon', 'dui-list-item-icon-right')}>{rightIcon}</span>
        )}

        <div className="dui-list-item-content">
          <p className={cx('dui-list-item-content-title')}>{title}</p>
          {subtitle && <p className={cx('dui-list-item-content-subtitle')}>{subtitle}</p>}
        </div>
      </li>
    );
  }
}
