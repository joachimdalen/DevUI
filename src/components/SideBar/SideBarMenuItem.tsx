import * as React from "react";
import cx from "classnames";
import { SideBarMenu } from "./SideBarMenu";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import { isString } from "util";
import { CustomComponent } from "../common";

interface SideBarMenuItemState {
  subMenuVisible: boolean;
}
interface SideBarMenuItemProps extends CustomComponent {
  isHeader?: boolean;
  active?: boolean;
  icon?: string | React.ReactElement;
  expandIcon?: string | React.ReactElement;
  collapseIcon?: string | React.ReactElement;
  label: string | React.ReactElement;
  hasSubmenu?: boolean;
  className?: string;
}

export class SideBarMenuItem extends React.Component<
  SideBarMenuItemProps,
  SideBarMenuItemState
> {
  state = {
    subMenuVisible: false
  };
  render() {
    const {
      children,
      isHeader = false,
      active = false,
      icon,
      expandIcon,
      collapseIcon,
      label,
      hasSubmenu = false,
      className = "",
      component,
      componentProps
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
          <FontAwesomeIcon
            iconStyle="solid"
            margin
            marginDirection="right"
            icon={icon}
          />
        );
    const expandComp = React.isValidElement(expandIcon) ? (
      expandIcon
    ) : (
      <FontAwesomeIcon
        iconStyle="solid"
        icon="fa-arrow-circle-up"
        margin={true}
        marginDirection="right"
      />
    );
    const collapseComp = React.isValidElement(collapseIcon) ? (
      collapseIcon
    ) : (
      <FontAwesomeIcon
        iconStyle="solid"
        icon="fa-arrow-circle-down"
        margin={true}
        marginDirection="right"
      />
    );

    if (isHeader) {
      return (
        <div className={menuClass}>
          <span>{label}</span>
        </div>
      );
    }

    if (!hasSubmenu || React.Children.count(children) === 0) {
      const baseChildren = (
        <React.Fragment>
          <span className="dui-sidebar-menu-item-icon">{iconComp}</span>
          <span className="dui-sidebar-menu-item-label">{label}</span>
        </React.Fragment>
      );

      if (component) {
        const Component = component;
        return (
          <Component className={menuClass} {...componentProps}>
            {baseChildren}
          </Component>
        );
      }
      return <div className={menuClass}>{baseChildren}</div>;
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
            {subMenuVisible ? expandComp : collapseComp}
          </span>
        </div>
        <SideBarMenu className={subMenuClass}>{children}</SideBarMenu>
      </div>
    );
  }
}
