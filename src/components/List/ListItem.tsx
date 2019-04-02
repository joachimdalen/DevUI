import * as React from "react";
import cx from "classnames";
import { isNull } from "util";
export interface Props {
  title: string;
  subtitle?: string;
  icon?: string;
  iconPlacement?: "left" | "right";
}

export class ListItem extends React.Component<Props> {
  public render() {
    const { title, subtitle, icon, iconPlacement = "left" } = this.props;
    if (isNull(icon)) {
      return (
        <ul className={cx("cui-list-item")}>
          <p className={cx("cui-list-item-title")}>{title}</p>
        </ul>
      );
    }
    return (
      <ul className={cx("cui-list-item")}>
        {icon && (
          <span
            className={cx("cui-list-item-icon", {
              [`cui-list-item-icon-right`]: iconPlacement === "right"
            })}
          >
            {icon}
          </span>
        )}
        <div className="cui-list-item-content">
          <p className={cx("cui-list-item-content-title")}>{title}</p>
          {subtitle && (
            <p className={cx("cui-list-item-content-subtitle")}>{subtitle}</p>
          )}
        </div>
      </ul>
    );
  }
}
