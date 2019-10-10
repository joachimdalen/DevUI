import * as React from "react";
import cx from "classnames";

interface ProgressBarProps {
  className?: string;
  completed: number;
  striped?: boolean;
  animated?: boolean;
  variant?: string;
  title?: string;
}

class ProgressBar extends React.Component<ProgressBarProps> {
  static defaultProps: Partial<ProgressBarProps> = {
    className: "",
    variant: "default",
    striped: false,
    animated: false
  };
  public render() {
    const {
      className,
      variant,
      completed,
      title,
      striped,
      animated
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
export { ProgressBar, ProgressBarProps };
