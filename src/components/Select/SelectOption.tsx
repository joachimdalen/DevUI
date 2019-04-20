import * as React from "react";
export interface Props {
  label: string;
  group?: string;
  value: string;
  onClick?: (value: any) => any;
}
export class SelectOption extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <div className="cui-select-option" role="option" onClick={this.context.onItemClick}>
        {children}
      </div>
    );
  }
}
