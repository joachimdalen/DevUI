import cx from 'classnames';
import * as React from 'react';

interface ButtonGroupProps {
  children: React.ReactNode;
  vertical?: boolean;
}
const ButtonGroup = ({ children, vertical }: ButtonGroupProps): React.ReactElement => {
  const groupClass = cx('dui-button-group', {
    'dui-button-group-vertical': vertical
  });

  return <div className={groupClass}>{children}</div>;
};
export { ButtonGroupProps, ButtonGroup };
