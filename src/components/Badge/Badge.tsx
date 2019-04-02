import * as React from "react";
import cx from "classnames";
export interface Props {
  label: string;
  variant: string;
  neonMode: boolean;
}

export class Badge extends React.Component<Props> {
  public render() {
    const { label, variant, neonMode = false } = this.props;
    return (
      <span
        className={cx(
          "cui-badge",
          {
            [`cui-badge-${variant}`]: variant !== "default" && !neonMode
          },
          {
            [`cui-badge-neon-${variant}`]: variant !== "default" && neonMode
          }
        )}
      >
        {label}
      </span>
    );
  }
}
