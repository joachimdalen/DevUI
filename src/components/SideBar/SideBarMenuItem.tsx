import cx from 'classnames';
import * as React from 'react';
import { isString } from 'util';

import { CustomComponent } from '../common';
import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { SideBarMenu } from './SideBarMenu';

interface SideBarMenuItemState {
  subMenuVisible: boolean;
}
export interface SideBarMenuItemProps extends CustomComponent {
  isHeader?: boolean;
  active?: boolean;
  icon?: string | React.ReactElement;
  expandIcon?: string | React.ReactElement;
  collapseIcon?: string | React.ReactElement;
  label: string | React.ReactElement;
  hasSubmenu?: boolean;
  className?: string;
}

export class SideBarMenuItem extends React.Component<SideBarMenuItemProps, SideBarMenuItemState> {
  state = {
    subMenuVisible: false
  };
  static defaultProps: Partial<SideBarMenuItemProps> = {
    isHeader: false,
    active: false,
    hasSubmenu: false,
    className: ''
  };
  componentDidUpdate(prevProps: SideBarMenuItemProps): void {
    if (prevProps !== this.props) {
      if (this.props.hasSubmenu && this.props.active) {
        this.setState({
          subMenuVisible: true
        });
      }
    }
  }
  render(): React.ReactElement {
    const {
      children,
      isHeader,
      active,
      icon,
      expandIcon,
      collapseIcon,
      label,
      hasSubmenu,
      className,
      component,
      componentProps
    } = this.props;
    const { subMenuVisible } = this.state;
    const menuClass = cx(
      'dui-sidebar-menu-item',
      { 'dui-sidebar-menu-item-header': isHeader },
      { 'dui-sidebar-menu-item-active': active || subMenuVisible },
      { 'dui-sidebar-menu-item-has-sub': hasSubmenu },
      className
    );
    const subMenuClass = cx(
      'dui-sidebar-menu-submenu',
      { 'dui-show': subMenuVisible },
      { 'dui-hide': !subMenuVisible }
    );
    const iconComp = React.isValidElement(icon)
      ? icon
      : isString(icon) && <FontAwesomeIcon iconStyle="solid" marginDirection="right" icon={icon} />;
    const expandComp = React.isValidElement(expandIcon) ? (
      expandIcon
    ) : (
      <FontAwesomeIcon iconStyle="solid" icon="fa-arrow-circle-up" marginDirection="right" />
    );
    const collapseComp = React.isValidElement(collapseIcon) ? (
      collapseIcon
    ) : (
      <FontAwesomeIcon iconStyle="solid" icon="fa-arrow-circle-down" marginDirection="right" />
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
