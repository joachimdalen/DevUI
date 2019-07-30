import * as React from 'react';
import { Button, ButtonProps } from '../Button/Button';
import cx from 'classnames';
export interface OverflowMenuProps {
    triggerButtonProps?: ButtonProps;
    className?: string;
}
export interface OverflowMenuState {
    visible: boolean;
}
export class OverflowMenu extends React.Component<OverflowMenuProps, OverflowMenuState> {
    state = {
        visible: false
    }
    render() {
        const { className, triggerButtonProps } = this.props;
        const wrapperClass = cx('dui-overflow-menu-wrapper', className)
        const containerClass = cx("dui-overflow-menu-content");
        const itemsClass = cx("dui-overflow-menu-items");
        return <div className={wrapperClass}>
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
    }
    _toggleMenu = () => {
        this.setState({ visible: !this.state.visible });
    }
}