import cx from 'classnames';
import * as React from 'react';

import { CheckBox } from '../CheckBox/CheckBox';
import { Empty } from '../Empty/Empty';
import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { SmallTable } from './SmallTable';
import { Table } from './Table';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';
import { Column, DataTableProps } from './TableTypes';

interface DataTableState {
  checked: any[];
  sortBy?: Column;
  sortDirection: string;
  isSmall: boolean;
}

export class DataTable extends React.Component<DataTableProps, DataTableState> {
  state = {
    checked: [] as any[],
    sortBy: {} as Column,
    sortDirection: '',
    isSmall: false
  };

  constructor(props: DataTableProps) {
    super(props);
  }

  static defaultProps: Partial<DataTableProps> = {
    showEmpty: false,
    emptyComp: (
      <Empty header="No data" image={<FontAwesomeIcon icon="fa-inbox" iconStyle="solid" />} />
    )
  };

  updateScreenSize = (): void => {
    const { isSmall } = this.state;
    const { smallBreakPoint } = this.props;
    if (window.innerWidth <= (smallBreakPoint || 400) && !isSmall) {
      this.setState({ isSmall: true });
    }
    if (
      window.innerWidth >= (smallBreakPoint === undefined ? 400 : smallBreakPoint + 1) &&
      isSmall
    ) {
      this.setState({ isSmall: false });
    }
  };
  componentDidMount(): void {
    const { responsive } = this.props;
    if (responsive) {
      window.addEventListener('resize', this.updateScreenSize);
    }
  }
  componentWillUnmount(): void {
    window.removeEventListener('resize', this.updateScreenSize);
  }

  componentDidUpdate(prevProps: DataTableProps, prevState: DataTableState): void {
    if (prevProps.responsive && !this.props.responsive) {
      this.setState({ isSmall: false });
      window.removeEventListener('resize', this.updateScreenSize);
    }
    if (!prevProps.responsive && this.props.responsive) {
      window.addEventListener('resize', this.updateScreenSize);
    }
  }

  render(): React.ReactElement {
    const { columns, rows, emptyComp, showEmpty, ...rest } = this.props;
    const emptyItem = showEmpty ? emptyComp : null;
    const shouldShowEmpty = !rows || rows.length === 0;

    if (this.state.isSmall) {
      return <SmallTable {...this.props} />;
    }

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

  _sort(col: Column): void {
    const { sortDirection } = this.state;
    this.setState({
      sortBy: col,
      sortDirection: sortDirection === 'desc' ? 'asc' : 'desc'
    });
  }
  _checkedChange(): void {
    const { onCheck } = this.props;
    if (onCheck) onCheck(this.state.checked);
  }

  _toggleItem(item: any): void {
    const { onCheck } = this.props;
    const checkIndex = this.state.checked.indexOf(item);
    const arrCpy = [...this.state.checked];
    if (checkIndex !== -1) {
      arrCpy.splice(checkIndex, 1);
      this.setState({ checked: arrCpy }, () => {
        if (onCheck) onCheck(this.state.checked);
      });
    } else {
      const newItems = [...this.state.checked, item];
      this.setState({ checked: newItems }, () => {
        if (onCheck) onCheck(newItems);
      });
    }
  }

  _toggleAll(): void {
    const { rows, onCheck } = this.props;
    const { checked } = this.state;
    if (rows.length !== checked.length) {
      this.setState({ checked: rows }, () => {
        if (onCheck) onCheck(this.state.checked);
      });
    } else {
      this.setState({ checked: [] }, () => {
        if (onCheck) onCheck(this.state.checked);
      });
    }
  }

  _getSortIcon = (key: string): string => {
    const { sortDirection, sortBy } = this.state;
    if (!sortDirection || sortBy.key !== key) return 'fa-sort';
    if (sortDirection === 'asc') return 'fa-sort-alpha-down';
    return 'fa-sort-alpha-up';
  };

  _getHeaders(): React.ReactElement {
    const { columns, rows, multiSelect } = this.props;
    const { checked } = this.state;

    const rowHeaders: TableCell[] = columns.map((col: Column) => {
      if (col.sortable) {
        const cellClass = cx({ 'dui-table-cell-sortable': col.sortable });

        return (
          <TableCell key={col.key}>
            <div onClick={() => this._sort(col)} className={cellClass}>
              <span>{col.label}</span>
              <FontAwesomeIcon
                marginDirection="left"
                iconStyle="solid"
                icon={this._getSortIcon(col.key)}
              />
            </div>
          </TableCell>
        );
      }
      return <TableCell key={col.key}>{col.label}</TableCell>;
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

  _sortAsc(a: Column, b: Column): number {
    const { sortBy } = this.state;
    if (!sortBy.accessor) {
      return a[sortBy.key] < b[sortBy.key] ? 0 : 1;
    }
    return sortBy.accessor(a) < sortBy.accessor(b) ? 0 : 1;
  }
  _sortDesc(a: Column, b: Column): number {
    const { sortBy } = this.state;
    if (!sortBy.accessor) {
      return a[sortBy.key] > b[sortBy.key] ? 0 : 1;
    }
    return sortBy.accessor(a) > sortBy.accessor(b) ? 0 : 1;
  }

  _getRows(): React.ReactElement[] {
    const { rowKey, columns, rows, multiSelect } = this.props;
    const { sortBy, sortDirection, checked } = this.state;
    const checkCellClass = cx('dui-table-cell-checkable');

    const rowItems: Column[] = rows;
    if (sortBy.key) {
      rowItems.sort(sortDirection === 'asc' ? this._sortAsc : this._sortDesc);
    }

    const renderedRows =
      rowItems &&
      rowItems.map((row: any, index: number) => {
        const isRowChecked = checked && checked.indexOf(row) !== -1;
        return (
          <TableRow
            checked={isRowChecked && multiSelect}
            key={rowKey ? row[rowKey] : `row-item-${index}`}
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
                  ? col.renderer(row, i, index, false)
                  : col.accessor
                  ? col.accessor(row)
                  : row[col.key];
                return (
                  <TableCell
                    className={cx(col.className)}
                    key={rowKey ? row[rowKey] : `row-item-cell-${i}`}
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
