import React from "react";
import { storiesOf } from "@storybook/react";
import { SocialButton } from "./SocialButton";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
storiesOf("Components/SocialButton/Providers", module)
  .add("Twitch", () => (
    <SocialButton provider="twitch" text="Sign in with Twitch" />
  ))
  .add("YouTube", () => (
    <SocialButton provider="youtube" text="Sign in with YouTube" />
  ))
  .add("Discord", () => (
    <SocialButton provider="discord" text="Sign in with Discord" />
  ))
  .add("Twitter", () => (
    <SocialButton provider="twitter" text="Sign in with Twitter" />
  ))
  .add("GitHub", () => (
    <SocialButton provider="github" text="Sign in with GitHub" />
  ))
  .add("Instagram", () => (
    <SocialButton provider="instagram" text="Sign in with Instagram" />
  ))
  .add("PayPal", () => (
    <SocialButton provider="paypal" text="Sign in with PayPal" />
  ))
  .add("Spotify", () => (
    <SocialButton provider="spotify" text="Sign in with Spotify" />
  ))
  .add("Reddit", () => (
    <SocialButton provider="reddit" text="Sign in with Reddit" />
  ))
  .add("Snapchat", () => (
    <SocialButton provider="snapchat" darkText text="Sign in with Snapchat" />
  ))
  .add("BitBucket", () => (
    <SocialButton provider="bitbucket" text="Sign in with BitBucket" />
  ))
  .add("Dropbox", () => (
    <SocialButton provider="dropbox" text="Sign in with Dropbox" />
  ));
storiesOf("Components/SocialButton", module)
  .add("Border style - Light", () => (
    <SocialButton provider="spotify" text="Sign in with Spotify" />
  ))
  .add("Border style - Dark", () => (
    <SocialButton
      provider="spotify"
      borderStyle="dark"
      text=" Sign in with Spotify"
    />
  ))
  .add("Custom Icon", () => (
    <SocialButton
      provider="steam"
      icon={<FontAwesomeIcon icon="fab fa-steam-square" />}
      text="Sign in with Steam"
    />
  ))
  .add("Icon Only", () => <SocialButton provider="dropbox" iconOnly />);
