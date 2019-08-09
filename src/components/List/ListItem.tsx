import * as React from "react";
import cx from "classnames";
export interface ListItemProps {
  title: string;
  subtitle?: string;
  icon?: string | React.ReactNode;
  iconPlacement?: "left" | "right";
}

export class ListItem extends React.Component<ListItemProps> {
  static defaultProps: Partial<ListItemProps> = {
    iconPlacement: "left"
  };
  public render() {
    const { title, subtitle, icon, iconPlacement } = this.props;
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
