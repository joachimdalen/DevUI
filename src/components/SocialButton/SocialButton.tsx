import cx from 'classnames';
import * as React from 'react';

import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';

export type SocialProviders =
  | 'bitbucket'
  | 'discord'
  | 'dropbox'
  | 'github'
  | 'instagram'
  | 'paypal'
  | 'reddit'
  | 'spotify'
  | 'steam'
  | 'snapchat'
  | 'twitch'
  | 'twitter'
  | 'youtube';

export interface SocialButtonProps {
  provider: SocialProviders;
  darkText?: boolean;
  iconOnly?: boolean;
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const SocialButton = ({
  provider,
  className,
  iconOnly,
  icon,
  text,
  darkText,
  onClick
}: SocialButtonProps): React.ReactElement => {
  const buttonClass = cx(
    'dui-social-button',
    [`dui-social-button-${provider}`],
    { 'dui-social-button-text-dark': darkText },
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
};
