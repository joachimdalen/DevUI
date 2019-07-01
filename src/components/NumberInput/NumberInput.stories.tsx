import * as React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";
//import { text, boolean } from "@storybook/addon-knobs";
import { NumberInput } from "./NumberInput";
import { number } from "@storybook/addon-knobs";
storiesOf("Controls|NumberInput", module).add("Basic Input", () => (
  <NumberInput
    onChange={action("input-changed")}
    max={number("Max", Number.MAX_SAFE_INTEGER)}
    min={number("Min", Number.MIN_SAFE_INTEGER)}
    step={number("Step", 1)}
    value={number("Value", 0)}
  />
));