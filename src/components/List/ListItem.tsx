import * as React from "react";
import cx from "classnames";
import { isNull } from "util";
export interface Props {
  title: string;
  subtitle?: string;
  icon?: string;
}

export class ListItem extends React.Component<Props> {
  public render() {
    const { title, subtitle, icon } = this.props;
    if (isNull(icon)) {
      return (
        <ul className={cx("cb-list-item")}>
          <p className={cx("cb-list-item-title")}>{title}</p>
        </ul>
      );
    }
    return (
      <ul className={cx("cb-list-item")}>
        {icon && <span className="cb-list-item-icon">{icon}</span>}
        <div className="cb-list-item-content">
          <p className={cx("cb-list-item-content-title")}>{title}</p>
          {subtitle && (
            <p className={cx("cb-list-item-content-subtitle")}>{subtitle}</p>
          )}
        </div>
      </ul>
    );
  }
}
