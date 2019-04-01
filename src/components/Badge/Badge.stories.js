import React from "react";

import { storiesOf } from "@storybook/react";
import { Badge } from "./Badge";
import { text, boolean } from "@storybook/addon-knobs/react";

storiesOf("Components/Badge", module).add("Default Badge", () => (
  <Badge
    label={text("label", "Active")}
    disabled={boolean("disabled", false)}
    onClick={() => alert("hello there")}
  />
));
