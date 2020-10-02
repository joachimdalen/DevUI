import cx from 'classnames';
import * as React from 'react';
export interface CardHeaderProps {
  title: string;
}

export class CardHeader extends React.Component<CardHeaderProps> {
  public render(): React.ReactElement {
    const { title, children } = this.props;
    return (
      <div className={cx('dui-card-header')}>
        <h3 className="dui-card-header-title">{title}</h3>
        {children}
      </div>
    );
  }
}
