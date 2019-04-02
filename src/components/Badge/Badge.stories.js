import React from "react";

import { storiesOf } from "@storybook/react";
import { Badge } from "./Badge";
import { text, boolean } from "@storybook/addon-knobs/react";
const variants = [
  "default",
  "primary",
  "secondary",
  "dark",
  "light",
  "danger",
  "warning",
  "blue",
  "magenta"
];
storiesOf("Components/Badge", module)
  .add("Default Badge", () => <Badge label={text("label", "Active")} />)
  .add("Neon Badge", () => (
    <Badge
      label={text("label", "Active")}
      neonMode={boolean("Neon Mode", true)}
      variant={text("Variant", "blue")}
    />
  ))
  .add("Variants", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        {variants.map(variant => {
          return <Badge label={variant} variant={variant} />;
        })}
      </div>
      <div style={{ marginTop: "10px" }}>
        {variants.map(variant => {
          return <Badge label={variant} variant={variant} neonMode={true} />;
        })}
      </div>
    </div>
  ));
