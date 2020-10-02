import cx from 'classnames';
import * as React from 'react';

import { Button, ButtonProps } from './Button';

export interface SplitButtonProps extends Omit<ButtonProps, 'variant'> {
  children: any;
  mainButton?: Omit<ButtonProps, 'size' | 'label'>;
  splitButton?: Omit<ButtonProps, 'size' | 'label' | 'icon' | 'iconOnly'>;
}

export const SplitButton = ({
  children,
  size = 'medium',
  mainButton,
  splitButton,
  ...rest
}: SplitButtonProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const wrapperClass = cx('dui-split-button', {
    [`dui-split-button-visible`]: expanded
  });
  const actionClass = cx('dui-split-button-actions', [`dui-split-button-actions-${size}`]);

  return (
    <div className={wrapperClass}>
      <div className="dui-split-button-items">
        <Button {...mainButton} {...rest} size={size} className="dui-split-button-main" />
        <div className={actionClass}>{children}</div>
      </div>
      <Button
        {...splitButton}
        className="dui-split-button-second"
        size={size}
        icon="fa-angle-down"
        iconOnly
        onClick={() => setExpanded(!expanded)}
      />
    </div>
  );
};
