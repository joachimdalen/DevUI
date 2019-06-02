import * as React from "react";
import cx from "classnames";
import { SideBarMenu } from "./SideBarMenu";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import { isString } from "util";
interface IState {
  subMenuVisible: boolean;
}
interface IProps {
  isHeader?: boolean;
  active?: boolean;
  icon?: string | React.ReactElement;
  label: string | React.ReactElement;
  hasSubmenu?: boolean;
  className?: string;
}

export class SideBarMenuItem extends React.Component<IProps, IState> {
  state = {
    subMenuVisible: false
  };
  render() {
    const {
      children,
      isHeader = false,
      active = false,
      icon,
      label,
      hasSubmenu = false,
      className = ""
    } = this.props;
    const { subMenuVisible } = this.state;
    const menuClass = cx(
      "dui-sidebar-menu-item",
      { "dui-sidebar-menu-item-header": isHeader },
      { "dui-sidebar-menu-item-active": active || subMenuVisible },
      { "dui-sidebar-menu-item-has-sub": hasSubmenu },
      className
    );
    const subMenuClass = cx(
      "dui-sidebar-menu-submenu",
      { "dui-show": subMenuVisible },
      { "dui-hide": !subMenuVisible }
    );
    const iconComp = React.isValidElement(icon)
      ? icon
      : isString(icon) && (
          <FontAwesomeIcon margin marginDirection="right" icon={icon} />
        );
    if (isHeader) {
      return (
        <div className={menuClass}>
          <span>{label}</span>
        </div>
      );
    }
    if (!hasSubmenu) {
      return (
        <div className={menuClass}>
          <span className="dui-sidebar-menu-item-icon">{iconComp}</span>
          <span className="dui-sidebar-menu-item-label">{label}</span>
        </div>
      );
    }
    return (
      <div className={menuClass}>
        <div
          className="dui-sidebar-menu-item-subparent"
          onClick={() => this.setState({ subMenuVisible: !subMenuVisible })}
        >
          <span className="dui-sidebar-menu-item-icon">{iconComp}</span>
          <span className="dui-sidebar-menu-item-label">{label}</span>
          <span className="dui-sidebar-menu-item-caret">
            {subMenuVisible ? (
              <FontAwesomeIcon
                icon="fas fa-arrow-circle-up"
                margin={true}
                marginDirection="right"
              />
            ) : (
              <FontAwesomeIcon
                icon="fas fa-arrow-circle-down"
                margin={true}
                marginDirection="right"
              />
            )}
          </span>
        </div>
        <SideBarMenu className={subMenuClass}>{children}</SideBarMenu>
      </div>
    );
  }
}
