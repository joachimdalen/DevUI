import * as React from "react";
export interface ListActionItemProps {
  title: string;
  onClick: () => void;
  icon?: string;
}

export class ListActionItem extends React.Component<ListActionItemProps> {
  public render() {
    const { title, onClick } = this.props;
    return (
      <ul className="dui-list-item dui-list-center">
        <a className="dui-list-more" onClick={onClick}>
          {title}
        </a>
      </ul>
    );
  }
}
