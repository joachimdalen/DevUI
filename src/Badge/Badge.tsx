import * as React from "react";
import cx from "classnames";
export interface Props {
  /** this dictates what the button will say  */
  label: string;
}

export class Badge extends React.Component<Props> {
  public render() {
    const { label } = this.props;
    return <span className={cx("cb-badge")}>{label}</span>;
  }
}
