import * as React from "react";
import cx from "classnames";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
export interface Props {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant: string;
  format: "default" | "block";
  outlined: boolean;
  dashed: boolean;
  loading: boolean;
  loadingIcon?: string;
  loadingText?: string;
}

export class Button extends React.Component<Props> {
  public render() {
    const {
      label,
      onClick,
      format = "default",
      disabled = false,
      variant = "default",
      outlined = false,
      dashed = false,
      loading = false,
      loadingIcon,
      loadingText
    } = this.props;

    const buttonText = loading ? loadingText || "Loading" : label;
    const isDefaultVariant = variant === "default";
    const isDefaultFormat = format === "default";
    const loadingIconClass = loadingIcon ? loadingIcon : "fa-spinner";

    return (
      <button
        className={cx(
          "cui-button",
          { disabled: disabled && !loading },
          { [`cui-button-${variant}`]: isDefaultVariant && !outlined },
          { [`cui-button-${format}`]: isDefaultFormat },
          { [`cui-button-outlined-${variant}`]: outlined },
          { [`cui-button-dashed`]: dashed && outlined },
          { [`cui-button-loading`]: loading }
        )}
        disabled={disabled}
        onClick={onClick}
      >
        {loading && (
          <FontAwesomeIcon
            animate={true}
            animationType="spin"
            margin
            marginDirection="right"
            icon={loadingIconClass}
            iconType="fas"
          />
        )}
        {buttonText}
      </button>
    );
  }
}
