import * as React from 'react';

import { CustomComponent } from '../common';

export type HeaderBrandProps = CustomComponent;

export class HeaderBrand extends React.Component<HeaderBrandProps> {
  render():React.ReactElement {
    const { children, component, componentProps } = this.props;
    if (component) {
      const Component = component;
      return (
        <Component className="dui-header-brand" {...componentProps}>
          {children}
        </Component>
      );
    }
    return <div className="dui-header-brand">{children}</div>;
  }
}
