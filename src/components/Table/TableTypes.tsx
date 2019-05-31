import { TableRow } from "./TableRow";

export interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  searchable?: boolean;
  accessor?: (item: any) => string;
  renderer?: (item: any) => React.ReactNode;
  onSort?: (a: TableRow, b: TableRow) => number;
}
export interface SearchEntry {
  key: string;
  value: string;
}
