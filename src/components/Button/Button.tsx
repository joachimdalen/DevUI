import * as React from "react";
import cx from "classnames";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
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
  dashed?: boolean;
  loading?: boolean;
  loadingIcon?: string;
  loadingText?: string;
  icon?: string | React.ReactElement;
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
      linkButton,
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
      { [`${baseButtonClass}-${variant}`]: !isDefaultVariant && !outlined && !linkButton },
      { [`${baseButtonClass}-${format}`]: !isDefaultFormat },
      { [`${baseButtonClass}-outlined-${variant}`]: outlined && !linkButton },
      { [`${baseButtonClass}-dashed`]: dashed && outlined && !linkButton },
      { [`${baseButtonClass}-loading`]: loading },
      { [`${baseButtonClass}-icon-only`]: hasButtonText === false },
      { [`${baseButtonClass}-${buttonSizeClass}`]: !isDefaultSize },
      { [`${baseButtonClass}-link`]: linkButton },
      className
    );

    const loadingIconComp = (
      <FontAwesomeIcon
        iconStyle="solid"
        animate={true}
        animationType="spin"
        margin={true}
        marginDirection="right"
        icon={loadingIconClass}
      />
    );
    const iconComp = React.isValidElement(icon) ? (
      icon
    ) : (
        <FontAwesomeIcon
          iconStyle="solid"
          icon={icon as string}
          margin={hasButtonText}
        />
      );
    const content = (
      <React.Fragment>
        {loading && loadingIconComp}
        {!loading && icon && iconComp}
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
