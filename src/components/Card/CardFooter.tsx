import cx from 'classnames';
import * as React from 'react';
export interface CardFooterProps {
  className?: string;
  children?: any;
}

export class CardFooter extends React.Component<CardFooterProps> {
  public render(): React.ReactElement {
    const { children, className } = this.props;
    return <div className={cx('dui-card-footer', className)}>{children}</div>;
  }
}
