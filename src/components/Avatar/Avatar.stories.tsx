import * as React from "react";

import { storiesOf } from "@storybook/react";
import { Avatar } from "./Avatar";

storiesOf("Components/Avatar", module)
  .add("Avatar", () => <Avatar img={"//placehold.it/400x400"} />)
  .add("Formats", () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gridColumnGap: "10px"
      }}
    >
      <Avatar img={"//placehold.it/400x400"} />
      <Avatar img={"//placehold.it/400x400"} format="rounded" />
      <Avatar img={"//placehold.it/400x400"} format="circle" />
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
      <Avatar img={"//placehold.it/400x400"} size="small" />
      <Avatar img={"//placehold.it/400x400"} />
      <Avatar img={"//placehold.it/400x400"} size="large" />
    </div>
  ))
  .add("Custom Size", () => (
    <Avatar
      img={"//placehold.it/400x400"}
      width={150}
      height={150}
      size="large"
    />
  ));
