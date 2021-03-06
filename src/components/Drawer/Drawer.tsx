import cx from 'classnames';
import * as React from 'react';

import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { Overlay } from '../Overlay/Overlay';

export type DrawerLocation = 'left' | 'right';
export interface DrawerProps {
  width?: number | string;
  className?: string;
  visible: boolean;
  location?: DrawerLocation;
  onClose?: () => void;
  backgroundColor?: string;
}

export class Drawer extends React.Component<DrawerProps> {
  static defaultProps: DrawerProps = {
    location: 'right',
    visible: false
  };
  public render(): React.ReactElement {
    const { width, visible, onClose, location, backgroundColor, className } = this.props;
    const contentWidth = width === 'number' ? `${width}px` : width;
    const baseClass = cx('dui-drawer', [`dui-drawer-${location}`], className);
    return (
      <Overlay visible={visible} backgroundColor={backgroundColor}>
        <div className="dui-drawer-container">
          <div className={baseClass} style={{ maxWidth: contentWidth }}>
            {onClose && (
              <FontAwesomeIcon
                className="close-icon"
                iconStyle="solid"
                icon="fa-times"
                onClick={onClose}
              />
            )}
            {this.props.children}
          </div>
        </div>
      </Overlay>
    );
  }
}
