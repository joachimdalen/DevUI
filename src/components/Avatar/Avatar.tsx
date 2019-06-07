import * as React from "react";
import cx from "classnames";

export interface Props {
  img: React.ReactNode | string;
  size?: "small" | "normal" | "large";
  format?: "square" | "rounded" | "circle";
  width?: number;
  height?: number;
  className?: string;
}

export class Avatar extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
    size: "normal",
    format: "square"
  };

  render() {
    const { img, size, format, width, height, className } = this.props;

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
        <img
          src={img as string}
          height={height}
          width={width}
          className={baseClass}
          alt="avatar"
        />
      );
    }
    return <img src={img as string} className={baseClass} alt="avatar" />;
  }
}
