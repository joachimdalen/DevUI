export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export interface CustomComponent {
  component?: React.ComponentType<any> | React.ElementType<any>;
  componentProps?: any;
}
