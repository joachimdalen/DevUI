import * as React from "react";
import cx from "classnames";

export interface Props {
  className?: string;
  completed: number;
  striped?: boolean;
  animated?: boolean;
  variant?: string;
  title?: string;
}

export class ProgressBar extends React.Component<Props> {
  public render() {
    const {
      className = "",
      variant = "default",
      completed,
      title,
      striped = false,
      animated = false
    } = this.props;

    const innerClass = cx(
      "dui-progress-bar-inner",
      [`dui-progress-${variant}`],
      { "dui-progress-striped": striped },
      { "dui-progress-animated": animated },
      className
    );
    return (
      <div className={cx("dui-progress-bar-container")}>
        <div className={innerClass} style={{ width: `${completed}%` }}>
          <span>{title}</span>
        </div>
      </div>
    );
  }
}
