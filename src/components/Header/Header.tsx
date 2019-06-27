import { HeaderBrand } from "./HeaderBrand";
import { HeaderItem } from "./HeaderItem";
import { HeaderContextType, HeaderProvider } from "./HeaderTypes";
import { HeaderUserMenu } from "./HeaderUserMenu";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import cx from "classnames";
import * as React from "react";
export interface Props {
  onToggleClick?: () => void;
  brand?: React.ReactElement<HeaderBrand>;
  userMenu?: React.ReactElement<HeaderUserMenu>;
  children?: React.ReactElement<HeaderItem> | React.ReactElement<HeaderItem>[];
  toggleIcon?: string | React.ReactNode;
}
interface State {
  userMenuVisible: boolean;
}
export class Header extends React.Component<Props, State> {
  state = {
    userMenuVisible: false
  };
  render() {
    const { onToggleClick, brand, children, userMenu, toggleIcon } = this.props;
    const { userMenuVisible } = this.state;
    const contextValue: HeaderContextType = {
      toggled: this.state.userMenuVisible,
      onUserMenuToggle: () => {
        this.setState({ userMenuVisible: !userMenuVisible });
      }
    };
    const isCustomToggle = React.isValidElement(toggleIcon);
    return (
      <header className={cx("dui-header")}>
        <HeaderProvider value={contextValue}>
          {onToggleClick && (
            <div className="dui-header-toggle" onClick={onToggleClick}>
              {isCustomToggle ? (
                toggleIcon
              ) : (
                <FontAwesomeIcon icon="fas fa-bars" />
              )}
            </div>
          )}
          {brand && brand}
          {children && <div className="dui-header-items">{children}</div>}

          {userMenu && userMenu}
        </HeaderProvider>
      </header>
    );
  }
}
