import * as React from "react";
import cx from "classnames";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src: string;
  alt: string;
  fallbackSrc?: string;
}
interface ImageState {
  failed: boolean;
}
class Image extends React.Component<ImageProps, ImageState> {
  state = {
    failed: false
  };

  _failbackCall = () => {
    this.setState({ failed: true });
  };
  render() {
    const { src, alt, fallbackSrc, className, ...rest } = this.props;
    if (this.state.failed && fallbackSrc)
      return (
        <img
          src={fallbackSrc}
          alt={alt}
          className={cx("dui-image", className)}
          {...rest}
        />
      );
    return (
      <img
        src={src}
        alt={alt}
        onError={this._failbackCall}
        className={cx("dui-image", className)}
        {...rest}
      />
    );
  }
}
export { ImageProps, Image };
