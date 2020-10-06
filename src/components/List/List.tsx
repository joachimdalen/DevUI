import cx from 'classnames';
import * as React from 'react';

export interface ListProps {
  title?: string;
  bordered?: boolean;
  children?: React.ReactNode;
}

export class List extends React.Component<ListProps> {
  static defaultProps: Partial<ListProps> = {
    bordered: false
  };
  public render(): React.ReactElement {
    const { children, title, bordered } = this.props;
    return (
      <div className={cx('dui-list-container')}>
        {title && <p className={cx('dui-list-title')}>{title}</p>}
        <ul className={cx('dui-list', { [`dui-list-bordered`]: bordered })}>{children}</ul>
      </div>
    );
  }
}
