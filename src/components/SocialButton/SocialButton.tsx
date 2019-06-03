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
  | "twitch"
  | "twitter"
  | "youtube";

export type ColorType = "light" | "dark";

export interface Props {
  provider: SocialProviders;
  borderStyle?: ColorType;
  darkText?: boolean;
  iconOnly?: boolean;
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export class SocialButton extends React.Component<Props> {
  render() {
    const {
      provider,
      borderStyle = "light",
      className = "",
      iconOnly = false,
      icon,
      text,
      darkText = false,
      onClick
    } = this.props;
    const buttonClass = cx(
      "dui-social-button",
      [`dui-social-button-${provider}`],
      [`dui-social-button-border-${borderStyle}`],
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
            <FontAwesomeIcon icon={`fab fa-${provider}`} />
          )}
        </div>
        {!iconOnly && <span>{text}</span>}
      </button>
    );
  }
}