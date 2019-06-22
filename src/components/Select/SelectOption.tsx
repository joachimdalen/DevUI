import * as React from "react";
import { SelectConsumer, SelectContextType } from "./SelectTypes";
export interface Props {
  label: string;
  value: string;
  meta?: any;
  onClick?: (value: any) => any;
}
export class SelectOption extends React.PureComponent<Props> {
  render() {
    const { children, label, value, meta } = this.props;
    return (
      <SelectConsumer>
        {({ onSelect }: SelectContextType) => (
          <div
            className="dui-select-option"
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
