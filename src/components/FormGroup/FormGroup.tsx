import * as React from "react";
import cx from "classnames";
export interface Props {
  label: string | React.ReactElement;
  inline?: boolean;
  extra?: string;
  extraType?: "success" | "danger" | "warning" | "normal";
  className?: string;
}
export class FormGroup extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
    inline: false,
    extraType: "normal"
  };
  render() {
    const { label, extra, className, inline, children } = this.props;
    const labelComponent = React.isValidElement(label) ? (
      label
    ) : (
      <label className="dui-form-group-label">{label}</label>
    );
    const bodyComp = inline ? (
      <div className="dui-form-group-inline">{children}</div>
    ) : (
      children
    );

    return (
      <div className={cx("dui-form-group", className)}>
        {labelComponent}
        {bodyComp}
        {extra && <small className="dui-form-group-extra">{extra}</small>}
      </div>
    );
  }
}
