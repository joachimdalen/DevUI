import cx from 'classnames';
import * as React from 'react';

import { GenericSizes } from '../common';
import { Image } from '../Image/Image';

export type AvatarFormat = 'square' | 'rounded' | 'circle';
export type AvatarSize = GenericSizes;
export interface AvatarProps {
  src: React.ReactNode | string;
  fallbackSrc?: string;
  size?: AvatarSize;
  format?: AvatarFormat;
  width?: number;
  height?: number;
  className?: string;
}

export class Avatar extends React.Component<AvatarProps> {
  static defaultProps: Partial<AvatarProps> = {
    size: 'medium',
    format: 'square'
  };

  render(): React.ReactElement {
    const { src, size, format, width, height, className, fallbackSrc } = this.props;

    const isDefaultFormat = format === 'square';
    const hasCustomSize = (width || height) !== undefined;
    const baseClass = cx(
      'dui-avatar',
      { [`dui-avatar-${size}`]: !hasCustomSize },
      { [`dui-avatar-${format}`]: !isDefaultFormat },
      className
    );
    if (hasCustomSize) {
      return (
        <Image
          src={src as string}
          height={height}
          width={width}
          className={baseClass}
          alt="avatar"
          fallbackSrc={fallbackSrc}
        />
      );
    }
    return (
      <Image src={src as string} className={baseClass} alt="avatar" fallbackSrc={fallbackSrc} />
    );
  }
}
