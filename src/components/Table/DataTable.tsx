import cx from 'classnames';
import * as React from 'react';

import { CheckBox } from '../CheckBox/CheckBox';
import { Omit } from '../common';
import { Empty } from '../Empty/Empty';
import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { Table, TableProps } from './Table';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';
import { Column } from './TableTypes';

interface InternalDataTableProps {
  rows: any[];
  columns: Column[];
  multiSelect?: boolean;
  showEmpty?: boolean;
  emptyComp?: React.ReactElement<Empty>;
  onCheck?: (checked: any) => void;
}

interface DataTableState {
  checked: any[];
  sortBy?: Column;
  sortDirection: string;
}
export type DataTableProps = Omit<TableProps, 'children'> & InternalDataTableProps;

export class DataTable extends React.Component<DataTableProps, DataTableState> {
  state = {
    checked: [] as any[],
    sortBy: {} as Column,
    sortDirection: ''
  };

  static defaultProps: Partial<DataTableProps> = {
    showEmpty: false,
    emptyComp: (
      <Empty header="No data" image={<FontAwesomeIcon icon="fa-inbox" iconStyle="solid" />} />
    )
  };

  render() {
    const { columns, rows, emptyComp, showEmpty, ...rest } = this.props;
    const emptyItem = showEmpty ? emptyComp : null;
    const shouldShowEmpty = !rows || rows.length === 0;
    return (
      <div className="dui-table-wrapper">
        <Table {...rest}>
          {this._getHeaders() as any}
          {this._getRows() as any}
        </Table>
        {shouldShowEmpty && emptyItem}
      </div>
    );
  }

  _sort(col: Column) {
    const { sortDirection } = this.state;
    this.setState({
      sortBy: col,
      sortDirection: sortDirection === 'desc' ? 'asc' : 'desc'
    });
  }
  _checkedChange() {
    const { onCheck } = this.props;
    onCheck && onCheck(this.state.checked);
  }

  _toggleItem(item: any) {
    const { onCheck } = this.props;
    const checkIndex = this.state.checked.indexOf(item);
    const arrCpy = [...this.state.checked];
    if (checkIndex !== -1) {
      arrCpy.splice(checkIndex, 1);
      this.setState({ checked: arrCpy }, () => {
        onCheck && onCheck(this.state.checked);
      });
    } else {
      const newItems = [...this.state.checked, item];
      this.setState({ checked: newItems }, () => {
        onCheck && onCheck(newItems);
      });
    }
  }

  _toggleAll(): void {
    const { rows, onCheck } = this.props;
    const { checked } = this.state;
    if (rows.length !== checked.length) {
      this.setState({ checked: rows }, () => {
        onCheck && onCheck(this.state.checked);
      });
    } else {
      this.setState({ checked: [] }, () => {
        onCheck && onCheck(this.state.checked);
      });
    }
  }

  _getSortIcon = (key: string) => {
    const { sortDirection, sortBy } = this.state;
    if (!sortDirection || sortBy.key !== key) return 'fa-sort';
    if (sortDirection === 'asc') return 'fa-sort-alpha-down';
    return 'fa-sort-alpha-up';
  };

  _getHeaders() {
    const { columns, rows, multiSelect } = this.props;
    const { checked } = this.state;

    const rowHeaders: TableCell[] = columns.map((col: Column) => {
      if (col.sortable) {
        const cellClass = cx({ 'dui-table-cell-sortable': col.sortable });

        return (
          <TableCell key={col.key}>
            {col.sortable ? (
              <div onClick={() => this._sort(col)} className={cellClass}>
                <span>{col.label}</span>
                <FontAwesomeIcon
                  marginDirection="left"
                  iconStyle="solid"
                  icon={this._getSortIcon(col.key)}
                />
              </div>
            ) : (
              <div>
                <span>{col.label}</span>
              </div>
            )}
          </TableCell>
        );
      }
      return <TableCell>{col.label}</TableCell>;
    }) as any;

    if (multiSelect) {
      const checkCellClass = cx('dui-table-cell-checkable');
      const isChecked = checked.length === rows.length;
      const isIndeterminate = checked.length !== 0 && !isChecked;
      rowHeaders.unshift(
        (
          <TableCell className={checkCellClass}>
            <CheckBox
              variant="blue"
              checked={isChecked}
              indeterminate={isIndeterminate}
              onCheckChange={() => this._toggleAll()}
            />
          </TableCell>
        ) as any
      );
    }
    return (
      <TableRow isHeader={true} bordered={true}>
        {rowHeaders as any}
      </TableRow>
    );
  }

  _getRows() {
    const { rowKey, columns, rows, multiSelect } = this.props;
    const { sortBy, sortDirection, checked } = this.state;
    const checkCellClass = cx('dui-table-cell-checkable');

    const rowItems: Column[] = rows;
    if (sortBy.key) {
      if (sortBy.accessor) {
        sortDirection === 'asc'
          ? rowItems.sort((a: Column, b: Column) =>
              sortBy.accessor!(a) < sortBy.accessor!(b) ? 0 : 1
            )
          : rowItems.sort((a: Column, b: Column) =>
              sortBy.accessor!(a) > sortBy.accessor!(b) ? 0 : 1
            );
      } else {
        const sortKey = sortBy.key;
        sortDirection === 'asc'
          ? rowItems.sort((a: Column, b: Column) => (a[sortKey] < b[sortKey] ? 0 : 1))
          : rowItems.sort((a: Column, b: Column) => (a[sortKey] > b[sortKey] ? 0 : 1));
      }
    }

    const renderedRows =
      rowItems &&
      rowItems.map((row: any, index: number) => {
        const isRowChecked = checked && checked.indexOf(row) !== -1;
        return (
          <TableRow
            checked={isRowChecked && multiSelect}
            key={rowKey ? row[rowKey] && row[rowKey] : `row-item-${index}`}
          >
            {multiSelect && (
              <TableCell className={checkCellClass}>
                <CheckBox
                  variant="blue"
                  checked={isRowChecked}
                  onCheckChange={() => this._toggleItem(row)}
                />
              </TableCell>
            )}
            {
              columns.map((col: Column, i: number) => {
                const cellValue = col.renderer
                  ? col.renderer(row)
                  : col.accessor
                  ? col.accessor(row)
                  : row[col.key];
                return (
                  <TableCell
                    className={cx(col.className)}
                    key={rowKey ? row[rowKey] && row[rowKey] : `row-item-cell-${i}`}
                  >
                    {cellValue}
                  </TableCell>
                );
              }) as any
            }
          </TableRow>
        );
      });
    return renderedRows;
  }
}
