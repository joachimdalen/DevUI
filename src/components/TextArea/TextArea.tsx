import * as React from "react";
import cx from "classnames";

export type TextAreaSizeMode = "vertical" | "horizontal" | "both";
export interface Props {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  sizeMode?: TextAreaSizeMode;
  disabled?: boolean;
}
type AllProps = Props & React.HTMLAttributes<HTMLTextAreaElement>;
export class TextArea extends React.Component<AllProps> {
  static defaultProps: Partial<Props> = {
    sizeMode: "both"
  };

  public render() {
    const { onChange, sizeMode, disabled, ...rest } = this.props;
    const baseClass = cx(
      "dui-input",
      { "dui-input-disabled": disabled },
      "dui-textarea",
      { "dui-textarea-vertical": sizeMode === "vertical" },
      { "dui-textarea-horizontal": sizeMode === "horizontal" }
    );
    return <textarea className={baseClass} disabled={disabled} {...rest} />;
  }
}
