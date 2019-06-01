import * as React from "react";
import cx from "classnames";

export interface Props {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  sizeMode: "vertical" | "horizontal" | "both";
}
type AllProps = Props & React.HTMLAttributes<HTMLTextAreaElement>;
export class TextArea extends React.Component<AllProps> {
  public render() {
    const { onChange, sizeMode, ...rest } = this.props;
    const baseClass = cx(
      "dui-input",
      "dui-textarea",
      { "dui-textarea-vertical": sizeMode === "vertical" },
      { "dui-textarea-horizontal": sizeMode === "horizontal" }
    );
    return <textarea className={baseClass} {...rest} />;
  }
}
