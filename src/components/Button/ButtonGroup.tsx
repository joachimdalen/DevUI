import * as React from "react";
import cx from "classnames";
import { Button } from "./Button";
export interface ButtonGroupProps {
  children: React.ReactElement<Button> | React.ReactElement<Button>[];
  vertical?: boolean;
}

export class ButtonGroup extends React.Component<ButtonGroupProps> {
  static defaultProps: Partial<ButtonGroupProps> = {
    vertical: false
  };
  public render() {
    const { children, vertical } = this.props;
    const groupClass = cx("dui-button-group", {
      "dui-button-group-vertical": vertical
    });

    return <div className={groupClass}>{children}</div>;
  }
}
