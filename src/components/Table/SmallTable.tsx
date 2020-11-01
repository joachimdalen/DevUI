import cx from 'classnames';
import * as React from 'react';

import { Flex } from '../Flex/Flex';
import { Column, DataTableProps } from './TableTypes';

export class SmallTable extends React.Component<DataTableProps> {
  _getRow(row: any, rowIndex: number): React.ReactElement {
    const { rowKey, columns } = this.props;
    const renderedRows =
      row &&
      (columns
        ?.filter((col: Column) => col.omitFromSmall === false || col.omitFromSmall === undefined)
        .map((col: Column, i: number) => {
          const cellValue = col.renderer
            ? col.renderer(row, i, rowIndex, true)
            : col.accessor
            ? col.accessor(row)
            : row[col.key];
          const omitHeader = !(col.spanSmall === undefined || col.spanSmall === false);
          return (
            <Flex key={rowKey ? row[rowKey] : `row-item-${rowIndex}-${i}`} gap="small">
              {!omitHeader && (
                <Flex grow>
                  <span className="dui-table-small-cell dui-table-small-header" key={col.key}>
                    {col.label}
                  </span>
                </Flex>
              )}
              <Flex grow={omitHeader}>
                <span
                  className={cx(col.className, 'dui-table-small-cell')}
                  key={rowKey ? row[rowKey] : `row-item-cell-${i}`}
                >
                  {cellValue}
                </span>
              </Flex>
            </Flex>
          );
        }) as any);

    return renderedRows;
  }

  render(): React.ReactElement {
    const { rows, emptyComp, showEmpty, striped } = this.props;
    const emptyItem = showEmpty ? emptyComp : null;
    const shouldShowEmpty = !rows || rows.length === 0;
    return (
      <Flex
        className={cx('dui-table-small', { 'dui-table-small-striped': striped })}
        flexDirection="column"
      >
        {rows.map((row, index) => {
          return (
            <Flex key={row?.key} flexDirection="column" className="dui-table-section">
              {this._getRow(row, index) as any}
            </Flex>
          );
        })}
        {shouldShowEmpty && emptyItem}
      </Flex>
    );
  }
}
