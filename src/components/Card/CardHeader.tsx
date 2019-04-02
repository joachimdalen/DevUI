import * as React from "react";
import cx from "classnames";
export interface Props {
  title: string;
}

export class CardHeader extends React.Component<Props> {
  public render() {
    const { title } = this.props;
    return (
      <div className={cx("cui-card-header")}>
        <h3 className="cui-card-header-title">{title}</h3>
      </div>
    );
  }
}
