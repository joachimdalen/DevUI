import React from "react";

import { storiesOf } from "@storybook/react";
import { TextArea } from "./TextArea";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
storiesOf("Components/Inputs/TextArea", module).add("Basic Input", () => (
  <TextArea
    onChange={action("input-changed")}
    sizeMode={text("Size mode", "both")}
  />
));
