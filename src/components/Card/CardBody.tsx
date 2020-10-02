import cx from 'classnames';
import * as React from 'react';
export interface CardBodyProps {
  className?: string;
  noPadding?: boolean;
}

export class CardBody extends React.Component<CardBodyProps> {
  static defaultProps: Partial<CardBodyProps> = {
    noPadding: false
  };
  public render() {
    const { children, className, noPadding } = this.props;
    const baseClass = cx('dui-card-body', { 'dui-card-body-np': noPadding }, className);
    return <div className={baseClass}>{children}</div>;
  }
}
