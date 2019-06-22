import * as React from "react";
import { storiesOf } from "@storybook/react";
import { SocialButton } from "./SocialButton";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import { action } from "@storybook/addon-actions";
storiesOf("Components/SocialButton/Providers", module)
  .add("Twitch", () => (
    <SocialButton
      onClick={action("onClick")}
      provider="twitch"
      text="Sign in with Twitch"
    />
  ))
  .add("YouTube", () => (
    <SocialButton
      onClick={action("onClick")}
      provider="youtube"
      text="Sign in with YouTube"
    />
  ))
  .add("Discord", () => (
    <SocialButton
      onClick={action("onClick")}
      provider="discord"
      text="Sign in with Discord"
    />
  ))
  .add("Twitter", () => (
    <SocialButton
      onClick={action("onClick")}
      provider="twitter"
      text="Sign in with Twitter"
    />
  ))
  .add("GitHub", () => (
    <SocialButton
      onClick={action("onClick")}
      provider="github"
      text="Sign in with GitHub"
    />
  ))
  .add("Instagram", () => (
    <SocialButton
      onClick={action("onClick")}
      provider="instagram"
      text="Sign in with Instagram"
    />
  ))
  .add("PayPal", () => (
    <SocialButton
      onClick={action("onClick")}
      provider="paypal"
      text="Sign in with PayPal"
    />
  ))
  .add("Spotify", () => (
    <SocialButton
      onClick={action("onClick")}
      provider="spotify"
      text="Sign in with Spotify"
    />
  ))
  .add("Reddit", () => (
    <SocialButton
      onClick={action("onClick")}
      provider="reddit"
      text="Sign in with Reddit"
    />
  ))
  .add("Snapchat", () => (
    <SocialButton
      onClick={action("onClick")}
      provider="snapchat"
      darkText
      text="Sign in with Snapchat"
    />
  ))
  .add("BitBucket", () => (
    <SocialButton
      onClick={action("onClick")}
      provider="bitbucket"
      text="Sign in with BitBucket"
    />
  ))
  .add("Dropbox", () => (
    <SocialButton
      onClick={action("onClick")}
      provider="dropbox"
      text="Sign in with Dropbox"
    />
  ));
storiesOf("Components/SocialButton", module)
  .add("Border style - Light", () => (
    <SocialButton
      onClick={action("onClick")}
      provider="spotify"
      text="Sign in with Spotify"
    />
  ))
  .add("Custom Icon", () => (
    <SocialButton
      onClick={action("onClick")}
      provider="steam"
      icon={<FontAwesomeIcon icon="fab fa-steam-square" />}
      text="Sign in with Steam"
    />
  ))
  .add("Icon Only", () => (
    <SocialButton onClick={action("onClick")} provider="dropbox" iconOnly />
  ));
