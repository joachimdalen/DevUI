import cx from 'classnames';
import * as React from 'react';

import { TableCell } from './TableCell';
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactElement<TableCell> | React.ReactElement<TableCell>[];
  bordered?: boolean;
  checked?: boolean;
  isHeader?: boolean;
}
export class TableRow extends React.Component<TableRowProps> {
  public render() {
    const { children, bordered = false, checked = false, isHeader = false } = this.props;
    const rowClass = cx(
      'dui-table-row',
      { 'dui-table-row-bordered': bordered },
      { 'dui-table-row-checked': checked },
      { 'dui-table-row-header': isHeader }
    );
    return <div className={rowClass}>{children}</div>;
  }
}
