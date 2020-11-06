import cx from 'classnames';
import * as React from 'react';
export interface EmptyProps {
  className: string;
  header: string;
  description?: string | React.ReactNode;
  image: string | React.ReactElement;
  primaryAction?: React.ReactElement;
  secondaryAction?: React.ReactElement;
  tertiaryAction?: React.ReactElement;
}

export const Empty = ({
  image,
  description,
  header,
  primaryAction,
  secondaryAction,
  tertiaryAction,
  className = ''
}: EmptyProps): React.ReactElement => {
  return (
    <div className={cx('dui-empty', className)}>
      <div className="dui-empty-image">
        {React.isValidElement(image) ? (
          image
        ) : (
          <img className="dui-empty-image" src={image as string}></img>
        )}
      </div>
      <h3 className="dui-empty-header">{header}</h3>
      <p className="dui-empty-description">{description}</p>
      <div className="dui-empty-main-actions">
        {primaryAction && primaryAction}
        {secondaryAction && secondaryAction}
      </div>
      {tertiaryAction && tertiaryAction}
    </div>
  );
};
