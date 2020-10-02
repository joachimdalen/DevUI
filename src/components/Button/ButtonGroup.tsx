import cx from 'classnames';
import * as React from 'react';

import { Button } from './Button';
interface ButtonGroupProps {
  children: React.ReactElement<Button> | React.ReactElement<Button>[];
  vertical?: boolean;
}

class ButtonGroup extends React.Component<ButtonGroupProps> {
  static defaultProps: Partial<ButtonGroupProps> = {
    vertical: false
  };
  public render(): React.ReactElement {
    const { children, vertical } = this.props;
    const groupClass = cx('dui-button-group', {
      'dui-button-group-vertical': vertical
    });

    return <div className={groupClass}>{children}</div>;
  }
}
export { ButtonGroupProps, ButtonGroup };
