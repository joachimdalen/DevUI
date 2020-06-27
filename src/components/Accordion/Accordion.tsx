import * as React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "../FontAwesomeIcon/FontAwesomeIcon";

export interface AccordionProps {
  title: string | React.ReactNode;
  expandIcon?: string | React.ReactElement;
  collapseIcon?: string | React.ReactElement;
  expanded?: boolean;
  borderless?: boolean;
  onToggle?: (state: boolean) => void;
}
interface AccordionState {
  expanded: boolean;
}

export class Accordion extends React.Component<AccordionProps, AccordionState> {
  state = {
    expanded: this.props.expanded || false
  };
  componentDidUpdate(
    prevProps: AccordionProps,
    prevState: AccordionState,
    snapshot: any
  ) {
    if (prevProps !== this.props) {
      this.setState({
        expanded: this.props.expanded || false
      });
    }
  }
  public render() {
    const {
      children,
      title,
      expandIcon,
      collapseIcon,
      borderless,
      onToggle
    } = this.props;
    const { expanded } = this.state;
    const caretIcon = (
      <FontAwesomeIcon iconStyle="solid" icon={"fa-caret-down"} />
    );
    const expandComp = React.isValidElement(expandIcon)
      ? expandIcon
      : caretIcon;
    const collapseComp = React.isValidElement(collapseIcon)
      ? collapseIcon
      : caretIcon;
    return (
      <div
        className={cx(
          "dui-accordion",
          { "dui-accordion-expanded": expanded },
          { "dui-accordion-borderless": borderless }
        )}
      >
        <div
          className="dui-accordion-header"
          onClick={() =>
            this.setState({ expanded: !expanded }, () => {
              onToggle && onToggle(this.state.expanded);
            })
          }
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
            "dui-accordion-content"
          )}
        >
          {children}
        </div>
      </div>
    );
  }
}
