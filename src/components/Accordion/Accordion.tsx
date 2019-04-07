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
      <div className={cx("cui-accordion")}>
        <div className="cui-accordion-header">
          <p className="cui-accordion-header-title">Hello</p>
          <span className="cui-accordion-header-toggle">_</span>
        </div>
        <div className="cui-accordion-content">{children}</div>
      </div>
    );
  }
}
