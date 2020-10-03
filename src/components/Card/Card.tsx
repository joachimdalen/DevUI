import cx from 'classnames';
import * as React from 'react';

import { CardImage } from './CardImage';
export type CardImagePlacement = 'top' | 'left' | 'right';
export interface CardProps {
  image?: string;
  imagePlacement?: CardImagePlacement;
  width?: number | string;
  className?: string;
}

export class Card extends React.Component<CardProps> {
  public render(): React.ReactElement {
    const { children, image, imagePlacement, width, className } = this.props;
    const cardWidth = width === 'number' ? `${width}px` : width;
    const baseClass = cx(
      'dui-card',
      { [`dui-card-image-${imagePlacement}`]: image !== undefined },
      className
    );
    return (
      <div className={baseClass} style={{ width: cardWidth }}>
        {image && <CardImage image={image} />}
        {image === null ? children : <div className="dui-card-inner">{children}</div>}
      </div>
    );
  }
}
