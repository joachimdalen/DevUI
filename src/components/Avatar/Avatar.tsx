import * as React from "react";
import cx from "classnames";
import { Image } from "../Image/Image";
import { GenericSizes } from "../common";

type AvatarFormat = "square" | "rounded" | "circle";
type AvatarSize = GenericSizes;
interface AvatarProps {
  src: React.ReactNode | string;
  fallbackSrc?: string;
  size?: AvatarSize;
  format?: AvatarFormat;
  width?: number;
  height?: number;
  className?: string;
}

class Avatar extends React.Component<AvatarProps> {
  static defaultProps: Partial<AvatarProps> = {
    size: "medium",
    format: "square"
  };

  render() {
    const {
      src,
      size,
      format,
      width,
      height,
      className,
      fallbackSrc
    } = this.props;

    const isDefaultFormat = format === "square";
    const hasCustomSize = (width || height) !== undefined;
    const baseClass = cx(
      "dui-avatar",
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
      <Image
        src={src as string}
        className={baseClass}
        alt="avatar"
        fallbackSrc={fallbackSrc}
      />
    );
  }
}
export { AvatarFormat, AvatarSize, AvatarProps, Avatar };
