import * as React from "react";
import cx from "classnames";

export interface Props {
  title: string;
  expanded: boolean;
}

export class Accordion extends React.Component<Props> {
  public render() {
    const { children } = this.props;
    return (
      <div className={cx("dui-accordion")}>
        <div className="dui-accordion-header">
          <p className="dui-accordion-header-title">Hello</p>
          <span className="dui-accordion-header-toggle">_</span>
        </div>
        <div className="dui-accordion-content">{children}</div>
      </div>
    );
  }
}
