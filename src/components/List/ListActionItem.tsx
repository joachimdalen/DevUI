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
      <ul className="cb-list-item cb-list-center">
        <a className="cb-list-more" onClick={onClick}>
          {title}
        </a>
      </ul>
    );
  }
}
