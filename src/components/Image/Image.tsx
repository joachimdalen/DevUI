import cx from 'classnames';
import * as React from 'react';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src: string;
  alt: string;
  fallbackSrc?: string;
}
interface ImageState {
  failed: boolean;
}
export class Image extends React.Component<ImageProps, ImageState> {
  state = {
    failed: false
  };

  _failbackCall = (): void => {
    this.setState({ failed: true });
  };
  render(): React.ReactElement {
    const { src, alt, fallbackSrc, className, ...rest } = this.props;
    if (this.state.failed && fallbackSrc)
      return <img src={fallbackSrc} alt={alt} className={cx('dui-image', className)} {...rest} />;
    return (
      <img
        src={src}
        alt={alt}
        onError={this._failbackCall}
        className={cx('dui-image', className)}
        {...rest}
      />
    );
  }
}
