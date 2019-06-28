import * as React from "react";
import cx from "classnames";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import { CustomComponent } from "../common";
export type ButtonFormat = "default" | "block";
export type ButtonSize = "small" | "medium" | "large";
export interface ButtonProps extends CustomComponent {
  label?: string;
  onClick?: () => void;
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

export class Button extends React.Component<ButtonProps> {
  static defaultProps: Partial<ButtonProps> = {
    format: "default",
    disabled: false,
    variant: "default",
    size: "medium",
    outlined: false,
    dashed: false,
    loading: false
  };
  public render() {
    const {
      label,
      format,
      disabled,
      variant,
      size,
      outlined,
      dashed,
      loading,
      loadingIcon,
      loadingText,
      icon,
      className,
      component,
      componentProps,
      ...rest
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
    const content = (
      <React.Fragment>
        {loading && loadingIconComp}
        {!loading && icon && (
          <FontAwesomeIcon icon={icon} margin={hasButtonText} />
        )}
        {hasButtonText && buttonText}
      </React.Fragment>
    );
    if (component) {
      const Component = component;
      return (
        <Component
          className={buttonClass}
          disabled={disabled}
          {...componentProps}
          {...rest}
        >
          {content}
        </Component>
      );
    }
    return (
      <button className={buttonClass} disabled={disabled} {...rest}>
        {content}
      </button>
    );
  }
}
