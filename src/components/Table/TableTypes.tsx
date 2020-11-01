import { Omit } from '../common';
import { Empty } from '../Empty/Empty';
import { TableProps } from './Table';
import { TableRow } from './TableRow';

export interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  forceVisible?: boolean;
  accessor?: (item: any) => string;
  renderer?: (
    item: any,
    columnIndex?: number,
    rowIndex?: number,
    isSmall?: boolean
  ) => React.ReactNode;
  onSort?: (a: TableRow, b: TableRow) => number;
  className?: string;
  omitFromSmall?: boolean;
  spanSmall?: boolean;
}

export type DataTableProps = Omit<TableProps, 'children'> & InternalDataTableProps;
interface InternalDataTableProps {
  rows: any[];
  columns: Column[];
  multiSelect?: boolean;
  showEmpty?: boolean;
  emptyComp?: React.ReactElement<Empty>;
  onCheck?: (checked: any) => void;
  responsive?: boolean;
  smallBreakPoint?: number;
}
