import { TableRow } from "./TableRow";

export interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  searchable?: boolean;
  forceVisible?: boolean;
  accessor?: (item: any) => string;
  renderer?: (item: any, index?: number) => React.ReactNode;
  onSort?: (a: TableRow, b: TableRow) => number;
  className?: string;
}
export interface SearchEntry {
  key: string;
  value: string;
}
