import * as React from "react";
import cx from "classnames";
export interface Props {
  header: string;
  description?: string | React.ReactNode;
  image: string | React.ReactElement;
  primaryAction?: React.ReactElement;
  secondaryAction?: React.ReactElement;
  tertiaryAction?: React.ReactElement;
}

export class Empty extends React.Component<Props> {
  public render() {
    const { image, description, header, primaryAction, secondaryAction, tertiaryAction } = this.props;

    return (
      <div className={cx("dui-empty")}>
        <div className="dui-empty-image">
          {React.isValidElement(image) ? image : <img className="dui-empty-image" src={image as string}></img>}
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
  }
}
