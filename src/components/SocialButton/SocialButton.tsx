import * as React from "react";
import cx from "classnames";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";

export type SocialProviders =
  | "bitbucket"
  | "discord"
  | "dropbox"
  | "github"
  | "instagram"
  | "paypal"
  | "reddit"
  | "spotify"
  | "steam"
  | "snapchat"
  | "twitch"
  | "twitter"
  | "youtube";

export interface SocialButtonProps {
  provider: SocialProviders;
  darkText?: boolean;
  iconOnly?: boolean;
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export class SocialButton extends React.Component<SocialButtonProps> {
  static defaultProps: Partial<SocialButtonProps> = {
    className: "",
    iconOnly: false,
    darkText: false
  };
  render() {
    const {
      provider,
      className,
      iconOnly,
      icon,
      text,
      darkText,
      onClick
    } = this.props;
    const buttonClass = cx(
      "dui-social-button",
      [`dui-social-button-${provider}`],
      { "dui-social-button-text-dark": darkText },
      className
    );

    const hasCustomIcon = React.isValidElement(icon);
    return (
      <button className={buttonClass} onClick={e => onClick && onClick(e)}>
        <div className="dui-social-button-icon">
          {hasCustomIcon ? (
            icon
          ) : (
            <FontAwesomeIcon iconStyle="brands" icon={`fa-fw fa-${provider}`} />
          )}
        </div>
        {!iconOnly && <span>{text}</span>}
      </button>
    );
  }
}
