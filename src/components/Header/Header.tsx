import cx from 'classnames';
import * as React from 'react';

import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { HeaderBrand } from './HeaderBrand';
import { HeaderItem } from './HeaderItem';
import { HeaderContextType, HeaderProvider } from './HeaderTypes';
import { HeaderUserMenu } from './HeaderUserMenu';
export interface HeaderProps {
  onToggleClick?: () => void;
  responsive?: boolean;
  brand?: React.ReactElement<HeaderBrand>;
  userMenu?: React.ReactElement<HeaderUserMenu>;
  children?: React.ReactElement<HeaderItem> | React.ReactElement<HeaderItem>[];
  toggleIcon?: string | React.ReactNode;
}
interface State {
  userMenuVisible: boolean;
  mobileExpanded: boolean;
}
export class Header extends React.Component<HeaderProps, State> {
  state = {
    userMenuVisible: false,
    mobileExpanded: false
  };
  render() {
    const { onToggleClick, brand, children, userMenu, toggleIcon, responsive } = this.props;
    const { userMenuVisible, mobileExpanded } = this.state;
    const contextValue: HeaderContextType = {
      toggled: this.state.userMenuVisible,
      onUserMenuToggle: () => {
        this.setState({ userMenuVisible: !userMenuVisible });
      }
    };
    const isCustomToggle = React.isValidElement(toggleIcon);
    return (
      <header
        className={cx('dui-header', {
          'dui-header-toggled': responsive && mobileExpanded
        })}
      >
        <HeaderProvider value={contextValue}>
          {onToggleClick && (
            <div className="dui-header-toggle" onClick={onToggleClick}>
              {isCustomToggle ? toggleIcon : <FontAwesomeIcon iconStyle="solid" icon="fa-bars" />}
            </div>
          )}
          {brand && brand}
          {children && <div className="dui-header-items">{children}</div>}

          {userMenu && userMenu}
        </HeaderProvider>
        <div
          className="dui-header-mobile-toggle"
          onClick={() => this.setState({ mobileExpanded: !this.state.mobileExpanded })}
        >
          <FontAwesomeIcon
            icon={mobileExpanded ? 'fa-times' : 'fa-bars'}
            iconStyle="solid"
            size="large"
            fixedWidth
          />
        </div>
      </header>
    );
  }
}
