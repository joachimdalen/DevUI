import * as React from "react";
import { SelectConsumer, SelectContextType } from "./SelectTypes";
import cx from "classnames";
interface SelectOptionProps {
  label: string;
  value: string;
  meta?: any;
  className?: string;
  onClick?: (value: any) => any;
}
class SelectOption extends React.PureComponent<SelectOptionProps> {
  render() {
    const { children, label, value, meta, className } = this.props;
    return (
      <SelectConsumer>
        {({ onSelect }: SelectContextType) => (
          <div
            className={cx("dui-select-option", className)}
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
export { SelectOptionProps, SelectOption };
