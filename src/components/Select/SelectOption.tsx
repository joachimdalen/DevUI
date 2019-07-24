import * as React from "react";
import { SelectConsumer, SelectContextType } from "./SelectTypes";
import cx from 'classnames';
export interface Props {
  label: string;
  value: string;
  meta?: any;
  className?: string;
  onClick?: (value: any) => any;
}
export class SelectOption extends React.PureComponent<Props> {
  render() {
    const { children, label, value, meta, className } = this.props;
    return (
      <SelectConsumer>
        {({ onSelect }: SelectContextType) => (
          <div
            className={cx('dui-select-option', className)}
            role="option"
            onClick={() => {
              onSelect &&
                onSelect({
                  value: value,
                  label: label,
                  meta: meta
                });
            }}
          >
            {children}
          </div>
        )}
      </SelectConsumer>
    );
  }
}
