import * as React from "react";
import cx from "classnames";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";

export interface AccordionProps {
  title: string | React.ReactElement;
  expandIcon?: string | React.ReactElement;
  collapseIcon?: string | React.ReactElement;
  initiallyExpanded?: boolean;
}
interface AccordionState {
  expanded: boolean;
}

export class Accordion extends React.Component<AccordionProps, AccordionState> {
  state = {
    expanded: this.props.initiallyExpanded || false
  };
  public render() {
    const { children, title, expandIcon, collapseIcon } = this.props;
    const { expanded } = this.state;
    const caretIcon = (
      <FontAwesomeIcon
        icon={expanded ? "fas fa-caret-up" : "fas fa-caret-down"}
      />
    );
    const expandComp = React.isValidElement(expandIcon)
      ? expandIcon
      : caretIcon;
    const collapseComp = React.isValidElement(collapseIcon)
      ? collapseIcon
      : caretIcon;
    return (
      <div className={cx("dui-accordion")}>
        <div
          className="dui-accordion-header"
          onClick={() => this.setState({ expanded: !expanded })}
        >
          <p className="dui-accordion-header-content">{title}</p>
          <span className="dui-accordion-header-toggle">
            {expanded ? collapseComp : expandComp}
          </span>
        </div>
        <div
          className={cx(
            { "dui-show": expanded },
            { "dui-hide": !expanded },
            "dui-accordion-content",
            { "dui-accordion-content-expanded": expanded }
          )}
        >
          {children}
        </div>
      </div>
    );
  }
}
