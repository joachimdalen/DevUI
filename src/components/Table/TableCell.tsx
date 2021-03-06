import cx from 'classnames';
import * as React from 'react';
export interface TableCellProps {
  className?: string;
  onClick?: () => void;
}
export class TableCell extends React.Component<TableCellProps> {
  public render(): React.ReactElement {
    const { children, className, ...rest } = this.props;
    const cellClass = cx('dui-table-cell', className);
    return (
      <div className={cellClass} {...rest}>
        {children}
      </div>
    );
  }
}
