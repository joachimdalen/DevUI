import * as React from "react";
import cx from "classnames";
import { CardImage } from "./CardImage";
export interface Props {
  image: string;
  imagePlacement: "top" | "left" | "right";
  width: number;
}

export class Card extends React.Component<Props> {
  public render() {
    const { children, image, imagePlacement, width } = this.props;

    return (
      <div
        className={cx("cui-card", {
          [`cui-card-image-${imagePlacement}`]: image !== undefined
        })}
        style={{
          width: `${width}px`
        }}
      >
        {image && <CardImage image={image} />}
        {image === null ? (
          children
        ) : (
          <div className="cui-card-inner">{children}</div>
        )}
      </div>
    );
  }
}
