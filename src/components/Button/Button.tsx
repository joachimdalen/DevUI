import * as React from "react";
import cx from "classnames";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
export type ButtonFormat = "default" | "block";
export type ButtonSize = "small" | "medium" | "large";
export interface Props {
  label?: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: string;
  format?: ButtonFormat;
  size?: ButtonSize;
  outlined?: boolean;
  dashed?: boolean;
  loading?: boolean;
  loadingIcon?: string;
  loadingText?: string;
  icon?: string;
  className?: string;
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
      icon,
      className
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
    const buttonClass = cx(
      baseButtonClass,
      { disabled: disabled && !loading },
      { [`${baseButtonClass}-${variant}`]: !isDefaultVariant && !outlined },
      { [`${baseButtonClass}-${format}`]: !isDefaultFormat },
      { [`${baseButtonClass}-outlined-${variant}`]: outlined },
      { [`${baseButtonClass}-dashed`]: dashed && outlined },
      { [`${baseButtonClass}-loading`]: loading },
      { [`${baseButtonClass}-icon-only`]: hasButtonText === false },
      { [`${baseButtonClass}-${buttonSizeClass}`]: !isDefaultSize },
      className
    );

    const loadingIconComp = (
      <FontAwesomeIcon
        animate={true}
        animationType="spin"
        margin={true}
        marginDirection="right"
        icon={loadingIconClass}
      />
    );

    return (
      <button className={buttonClass} disabled={disabled} onClick={onClick}>
        {loading && loadingIconComp}
        {!loading && icon && (
          <FontAwesomeIcon icon={icon} margin={hasButtonText} />
        )}
        {hasButtonText && buttonText}
      </button>
    );
  }
}
