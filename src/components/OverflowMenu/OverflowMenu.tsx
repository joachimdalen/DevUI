import cx from 'classnames';
import * as React from 'react';

import { Button, ButtonProps } from '../Button/Button';
import { camelCaseToDash } from '../common';

export type OverflowMenuLocation = 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft';
export interface OverflowMenuProps {
  triggerButtonProps?: ButtonProps;
  className?: string;
  menuLocation?: OverflowMenuLocation;
}
interface OverflowMenuState {
  visible: boolean;
}
export class OverflowMenu extends React.Component<OverflowMenuProps, OverflowMenuState> {
  state = {
    visible: false
  };
  render(): React.ReactElement {
    const { className, triggerButtonProps, menuLocation = 'bottomRight' } = this.props;
    const wrapperClass = cx(
      'dui-overflow-menu-wrapper',
      {
        [`dui-overflow-menu-${camelCaseToDash(menuLocation)}`]: menuLocation !== 'bottomRight'
      },
      className
    );
    const containerClass = cx('dui-overflow-menu-content');
    const itemsClass = cx('dui-overflow-menu-items');
    return (
      <div className={wrapperClass}>
        <Button
          iconOnly
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
  _toggleMenu = (): void => {
    this.setState({ visible: !this.state.visible });
  };
}
