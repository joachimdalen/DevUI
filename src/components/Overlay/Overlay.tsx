import cx from 'classnames';
import * as React from 'react';

export interface OverlayProps {
  className?: string;
  visible: boolean;
  backgroundColor?: string;
  children?: React.ReactNode;
}
export const Overlay: React.FunctionComponent<OverlayProps> = ({
  children,
  visible,
  className,
  backgroundColor
}: OverlayProps) => {
  const baseClass = cx('dui-overlay', className);
  return visible ? (
    <div className={baseClass} style={{ backgroundColor: backgroundColor }}>
      {children}
    </div>
  ) : null;
};
