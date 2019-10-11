import * as React from "react";
export interface CardImageProps {
  image: string;
}

export class CardImage extends React.Component<CardImageProps> {
  public render() {
    const { image } = this.props;
    const style: React.CSSProperties = {
      backgroundImage: "url(" + image + ")"
    };
    return <header style={style} className="dui-card-image-header" />;
  }
}
