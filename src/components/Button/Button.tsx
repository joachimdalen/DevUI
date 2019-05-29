import * as React from "react";
import cx from "classnames";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
export interface Props {
  label?: string;
  onClick: () => void;
  disabled?: boolean;
  variant: string;
  format: "default" | "block";
  size?: "small" | "medium" | "large";
  outlined: boolean;
  dashed: boolean;
  loading: boolean;
  loadingIcon?: string;
  loadingText?: string;
  icon?: string;
}

export class Button extends React.Component<Props> {
  public render() {
    const {
      label,
      onClick,
      format = "default",
      disabled = false,
      variant = "default",
      size = "medium",
      outlined = false,
      dashed = false,
      loading = false,
      loadingIcon,
      loadingText,
      icon
    } = this.props;

    const buttonText = loading ? loadingText || "Loading" : label;
    const isDefaultVariant = variant === "default";
    const isDefaultFormat = format === "default";
    const loadingIconClass = loadingIcon ? loadingIcon : "fas fa-spinner";
    const baseButtonClass = "dui-button";
    const hasButtonText = !(
      label === undefined ||
      label === null ||
      label === ""
    );
    const isDefaultSize = size === "medium";
    const buttonSizeClass = isDefaultSize
      ? ""
      : size === "small"
      ? "small"
      : "large";
    return (
      <button
        className={cx(
          baseButtonClass,
          { disabled: disabled && !loading },
          { [`${baseButtonClass}-${variant}`]: !isDefaultVariant && !outlined },
          { [`${baseButtonClass}-${format}`]: isDefaultFormat },
          { [`${baseButtonClass}-outlined-${variant}`]: outlined },
          { [`${baseButtonClass}-dashed`]: dashed && outlined },
          { [`${baseButtonClass}-loading`]: loading },
          { [`${baseButtonClass}-icon-only`]: hasButtonText === false },
          { [`${baseButtonClass}-${buttonSizeClass}`]: !isDefaultSize }
        )}
        disabled={disabled}
        onClick={onClick}
      >
        {loading && (
          <FontAwesomeIcon
            animate={true}
            animationType="spin"
            margin={true}
            marginDirection="right"
            icon={loadingIconClass}
          />
        )}
        {!loading && icon && (
          <FontAwesomeIcon icon={icon} margin={hasButtonText} />
        )}
        {buttonText}
      </button>
    );
  }
}
