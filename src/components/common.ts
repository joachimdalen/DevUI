export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export interface CustomComponent {
  component?: React.ComponentType<any> | React.ElementType<any>;
  componentProps?: any;
}
export type GenericSizes = "small" | "medium" | "large";

export function camelCaseToDash(item: string) {
  return item.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
