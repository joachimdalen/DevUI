import * as React from "react";

import { storiesOf } from "@storybook/react";
import { Avatar } from "./Avatar";

storiesOf("Components/Avatar", module)
  .add("Avatar", () => (
    <Avatar
      img={
        "https://static-cdn.jtvnw.net/jtv_user_pictures/brahemic-profile_image-8bb8af35b7da3313-70x70.jpeg"
      }
    />
  ))
  .add("Formats", () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gridColumnGap: "10px"
      }}
    >
      <Avatar
        img={
          "https://static-cdn.jtvnw.net/jtv_user_pictures/brahemic-profile_image-8bb8af35b7da3313-70x70.jpeg"
        }
      />
      <Avatar
        img={
          "https://static-cdn.jtvnw.net/jtv_user_pictures/brahemic-profile_image-8bb8af35b7da3313-70x70.jpeg"
        }
        format="rounded"
      />
      <Avatar
        img={
          "https://static-cdn.jtvnw.net/jtv_user_pictures/brahemic-profile_image-8bb8af35b7da3313-70x70.jpeg"
        }
        format="circle"
      />
    </div>
  ))
  .add("Sizes", () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gridColumnGap: "10px"
      }}
    >
      <Avatar
        img={
          "https://static-cdn.jtvnw.net/jtv_user_pictures/brahemic-profile_image-8bb8af35b7da3313-70x70.jpeg"
        }
        size="small"
      />
      <Avatar
        img={
          "https://static-cdn.jtvnw.net/jtv_user_pictures/brahemic-profile_image-8bb8af35b7da3313-70x70.jpeg"
        }
      />
      <Avatar
        img={
          "https://static-cdn.jtvnw.net/jtv_user_pictures/brahemic-profile_image-8bb8af35b7da3313-70x70.jpeg"
        }
        size="large"
      />
    </div>
  ))
  .add("Custom Size", () => (
    <Avatar
      img={
        "https://static-cdn.jtvnw.net/jtv_user_pictures/brahemic-profile_image-8bb8af35b7da3313-70x70.jpeg"
      }
      width={150}
      height={150}
      size="large"
    />
  ));
