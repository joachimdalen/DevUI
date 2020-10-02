import * as React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "../FontAwesomeIcon/FontAwesomeIcon";
import { CustomComponent, GenericSizes } from "../common";

export type ButtonFormat = "default" | "block";
export type ButtonSize = GenericSizes;
export interface ButtonProps extends CustomComponent {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: string;
  format?: ButtonFormat;
  size?: ButtonSize;
  outlined?: boolean;
  linkButton?: boolean;
  loading?: boolean;
  loadingIcon?: string;
  loadingText?: string;
  icon?: string | React.ReactElement;
  iconOnly?: boolean;
  className?: string;
  fixedIconSize?: boolean;
}

export class Button extends React.Component<ButtonProps> {
  static defaultProps: Partial<ButtonProps> = {
    format: "default",
    disabled: false,
    variant: "primary",
    size: "medium",
    outlined: false,
    loading: false,
    fixedIconSize: false,
    iconOnly: false,
  };
  public render() {
    const {
      label,
      format,
      disabled,
      variant,
      size,
      linkButton,
      outlined,
      loading,
      loadingIcon,
      loadingText,
      icon,
      className,
      component,
      componentProps,
      fixedIconSize,
      iconOnly,
      ...rest
    } = this.props;

    const buttonText = loading ? loadingText || "Loading" : label;
    const isDefaultFormat = format === "default";
    const loadingIconClass = loadingIcon ? loadingIcon : "fa-spinner";
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
      { [`${baseButtonClass}-${variant}`]: !outlined && !linkButton },
      { [`${baseButtonClass}-${format}`]: !isDefaultFormat },
      { [`${baseButtonClass}-outlined-${variant}`]: outlined && !linkButton },
      { [`${baseButtonClass}-loading`]: loading },
      { [`${baseButtonClass}-icon-only`]: iconOnly },
      { [`${baseButtonClass}-${buttonSizeClass}`]: !isDefaultSize },
      { [`${baseButtonClass}-link`]: linkButton },
      { [`${baseButtonClass}-link-${variant}`]: linkButton },
      className
    );

    const loadingIconComp = (
      <FontAwesomeIcon
        iconStyle="solid"
        animate={true}
        animationType="spin"
        marginDirection="right"
        icon={loadingIconClass}
        fixedWidth={iconOnly || fixedIconSize}
      />
    );
    const iconComp = React.isValidElement(icon) ? (
      icon
    ) : (
      <FontAwesomeIcon
        iconStyle="solid"
        icon={icon as string}
        marginDirection={
          hasButtonText && !iconOnly && !linkButton ? "right" : undefined
        }
        fixedWidth={iconOnly || fixedIconSize}
      />
    );
    const content = (
      <React.Fragment>
        {loading && loadingIconComp}
        {!loading && icon && iconComp}
        {hasButtonText && !iconOnly && buttonText}
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
        <span>{content}</span>
      </button>
    );
  }
}
