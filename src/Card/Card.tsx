import * as React from "react";
import cx from "classnames";
import { CardImage } from "./CardImage";
export interface Props {
  image: string;
  imagePlacement: "top" | "left";
  width: number;
}

export class Card extends React.Component<Props> {
  public render() {
    const { children, image, imagePlacement, width } = this.props;
    return (
      <div
        className={cx("cb-card", {
          [`cb-card-image-${imagePlacement}`]: image !== undefined
        })}
        style={{
          width: `${width}px`
        }}
      >
        {image && <CardImage image={image} alt={"image"} />}
        {image === null ? (
          children
        ) : (
          <div className="cb-card-inner">{children}</div>
        )}
      </div>
    );
  }
}
