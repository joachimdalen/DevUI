import * as React from "react";
import cx from "classnames";
interface CardHeaderProps {
  title: string;
}

class CardHeader extends React.Component<CardHeaderProps> {
  public render() {
    const { title, children } = this.props;
    return (
      <div className={cx("dui-card-header")}>
        <h3 className="dui-card-header-title">{title}</h3>
        {children}
      </div>
    );
  }
}
export { CardHeaderProps, CardHeader };
