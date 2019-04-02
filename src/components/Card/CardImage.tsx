import * as React from "react";
export interface Props {
  image: string;
  alt: string;
}

export class CardImage extends React.Component<Props> {
  public render() {
    const { image, alt } = this.props;
    return <img src={image} alt={alt || "Image"} className="cui-card-image" />;
  }
}
