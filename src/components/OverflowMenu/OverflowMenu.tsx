import * as React from "react";
import { Button, ButtonProps } from "../Button/Button";
import cx from "classnames";
import { camelCaseToDash } from "../common";

type OverflowMenuLocation =
  | "topRight"
  | "topLeft"
  | "bottomRight"
  | "bottomLeft";
interface OverflowMenuProps {
  triggerButtonProps?: ButtonProps;
  className?: string;
  menuLocation?: OverflowMenuLocation;
}
interface OverflowMenuState {
  visible: boolean;
}
class OverflowMenu extends React.Component<
  OverflowMenuProps,
  OverflowMenuState
> {
  state = {
    visible: false
  };
  render() {
    const {
      className,
      triggerButtonProps,
      menuLocation = "bottomRight"
    } = this.props;
    const wrapperClass = cx(
      "dui-overflow-menu-wrapper",
      {
        [`dui-overflow-menu-${camelCaseToDash(menuLocation)}`]:
          menuLocation !== "bottomRight"
      },
      className
    );
    const containerClass = cx("dui-overflow-menu-content");
    const itemsClass = cx("dui-overflow-menu-items");
    return (
      <div className={wrapperClass}>
        <Button
          icon="fa-ellipsis-v"
          className="dui-overflow-menu-button"
          variant="dark"
          outlined
          {...triggerButtonProps}
          onClick={this._toggleMenu}
        />
        {this.state.visible && (
          <div className={containerClass}>
            <div className={itemsClass}>{this.props.children}</div>
          </div>
        )}
      </div>
    );
  }
  _toggleMenu = () => {
    this.setState({ visible: !this.state.visible });
  };
}
export { OverflowMenu, OverflowMenuLocation, OverflowMenuProps };
