import * as React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "../FontAwesomeIcon/FontAwesomeIcon";
import { Button, ButtonProps } from "./Button";

export interface SplitButtonProps extends ButtonProps {}
export interface SplitButtonState {
  expanded: boolean;
}

export class SplitButton extends React.Component<
  SplitButtonProps,
  SplitButtonState
> {
  static defaultProps: Partial<SplitButtonProps> = {};
  state = { expanded: false };
  public render() {
    const { variant, ...rest } = this.props;
    const { expanded } = this.state;
    const wrapperClass = cx("dui-split-button", {
      [`dui-split-button-visible`]: expanded
    });
    const splitClass = cx("dui-split-button-split", [
      `dui-split-button-${variant}`
    ]);
    return (
      <div className={wrapperClass}>
        <div className="dui-split-button-items">
          <Button {...rest} variant={variant} />
          <FontAwesomeIcon
            icon="fa-caret-down"
            iconStyle="solid"
            className={splitClass}
            onClick={() => this.setState({ expanded: !expanded })}
          ></FontAwesomeIcon>
        </div>
        <div className="dui-split-button-actions">{this.props.children}</div>
      </div>
    );
  }
}
