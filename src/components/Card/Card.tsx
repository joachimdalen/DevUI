import * as React from "react";
import cx from "classnames";
import { CardImage } from "./CardImage";
import { isNumber } from "util";
type CardImagePlacement = "top" | "left" | "right";
interface CardProps {
  image?: string;
  imagePlacement?: CardImagePlacement;
  width?: number | string;
  className?: string;
}

class Card extends React.Component<CardProps> {
  public render() {
    const { children, image, imagePlacement, width, className } = this.props;
    const cardWidth = isNumber(width) ? `${width}px` : width;
    const baseClass = cx(
      "dui-card",
      { [`dui-card-image-${imagePlacement}`]: image !== undefined },
      className
    );
    return (
      <div className={baseClass} style={{ width: cardWidth }}>
        {image && <CardImage image={image} />}
        {image === null ? (
          children
        ) : (
          <div className="dui-card-inner">{children}</div>
        )}
      </div>
    );
  }
}

export { CardImagePlacement, CardProps, Card };
