import * as React from "react";
import cx from "classnames";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import { isUndefined } from "util";
export interface Props {
  description?: string | React.ReactNode;
  icon?: string;
  image?: string | React.ReactNode;
}

export class Empty extends React.Component<Props> {
  public render() {
    const { icon, image, description, children } = this.props;

    const isCustomIcon = !isUndefined(icon) || !isUndefined(image);
    const isCustomImage = !isUndefined(image);
    const isCustomDescription = !isUndefined(description);
    const iconClass =
      isCustomIcon && !isUndefined(icon) ? icon : "fas fa-inbox";
    const descriptionItem = isCustomDescription ? description : "No Data";
    return (
      <div className={cx("dui-empty")}>
        <div className="dui-empty-preset">
          {isCustomImage ? (
            image
          ) : (
            <FontAwesomeIcon icon={iconClass} size="large" />
          )}
          <p className="dui-empty-preset-description">{descriptionItem}</p>
        </div>
        {children}
      </div>
    );
  }
}
