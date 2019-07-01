import { HeaderConsumer, HeaderContextType } from "./HeaderTypes";
import { HeaderUserMenuItem } from "./HeaderUserMenuItem";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import cx from "classnames";
import * as React from "react";
import { Avatar, AvatarProps } from "../Avatar/Avatar";
import { Omit } from "../common";
interface IProps {
  username?: string;
  avatar?: string | React.ReactElement<Avatar>;
  closeIcon?: string | React.ReactElement;
  openIcon?: string | React.ReactElement;
  children?:
    | React.ReactElement<HeaderUserMenuItem>
    | React.ReactElement<HeaderUserMenuItem>[];
  avatarProps?: Omit<AvatarProps, "img">;
}
export class HeaderUserMenu extends React.Component<IProps> {
  render() {
    const {
      username,
      avatar,
      closeIcon,
      openIcon,
      children,
      avatarProps
    } = this.props;
    const hasCustomCloseIcon = React.isValidElement(closeIcon);
    const hasCustomOpenIcon = React.isValidElement(openIcon);
    const openIconComp = hasCustomOpenIcon ? (
      openIcon
    ) : (
      <FontAwesomeIcon icon="fas fa-caret-down" />
    );
    const closeIconComp = hasCustomCloseIcon ? (
      closeIcon
    ) : (
      <FontAwesomeIcon icon="fas fa-caret-up" />
    );
    const avatarComp = React.isValidElement(avatar) ? (
      avatar
    ) : (
      <Avatar img={avatar} size="small" {...avatarProps} />
    );
    const shouldRenderDropdown = React.Children.count(children) !== 0;

    return (
      <HeaderConsumer>
        {({ toggled, onUserMenuToggle }: HeaderContextType) => (
          <div
            className={cx("dui-header-user-menu", {
              "dui-header-user-menu-visible": toggled
            })}
          >
            <div
              className="dui-header-user-menu-trigger"
              onClick={() => onUserMenuToggle && onUserMenuToggle()}
            >
              {avatar && avatarComp}
              <span>{username}</span>
              {shouldRenderDropdown && (toggled ? closeIconComp : openIconComp)}
            </div>
            {shouldRenderDropdown && (
              <div
                className={cx("dui-header-user-menu-dropdown", {
                  "dui-header-user-menu-dropdown-visible": toggled
                })}
              >
                <div>{children}</div>
              </div>
            )}
          </div>
        )}
      </HeaderConsumer>
    );
  }
}