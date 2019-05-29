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
        <ul className={cx("dui-list-item")}>
          <p className={cx("dui-list-item-title")}>{title}</p>
        </ul>
      );
    }
    return (
      <ul className={cx("dui-list-item")}>
        {icon && (
          <span
            className={cx("dui-list-item-icon", {
              [`dui-list-item-icon-right`]: iconPlacement === "right"
            })}
          >
            {icon}
          </span>
        )}
        <div className="dui-list-item-content">
          <p className={cx("dui-list-item-content-title")}>{title}</p>
          {subtitle && (
            <p className={cx("dui-list-item-content-subtitle")}>{subtitle}</p>
          )}
        </div>
      </ul>
    );
  }
}
