import * as React from "react";
export interface Props {
  title: string;
  onClick: () => void;
  icon?: string;
}

export class ListActionItem extends React.Component<Props> {
  public render() {
    const { title, onClick } = this.props;
    return (
      <ul className="cui-list-item cui-list-center">
        <a className="cui-list-more" onClick={onClick}>
          {title}
        </a>
      </ul>
    );
  }
}
