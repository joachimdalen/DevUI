import cx from 'classnames';
import * as React from 'react';

import { TableRow } from './TableRow';
export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  rowKey?: string;
  children: React.ReactElement<TableRow> | React.ReactElement<TableRow>[];
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  condensed?: boolean;
  className?: string;
}
export class Table extends React.Component<TableProps> {
  public render(): React.ReactElement {
    const {
      children,
      bordered = false,
      striped = false,
      hoverable = false,
      condensed = false,
      className = ''
    } = this.props;

    const tableClass = cx(
      'dui-table',
      className,
      { 'dui-table-bordered': bordered },
      { 'dui-table-striped': striped },
      { 'dui-table-hoverable': hoverable },
      { 'dui-table-condensed': condensed }
    );

    return <div className={tableClass}>{children}</div>;
  }
}
