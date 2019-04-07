import React from "react";

import { storiesOf } from "@storybook/react";
import { Accordion } from "./Accordion";

import { text } from "@storybook/addon-knobs/dist/deprecated";
import { number } from "@storybook/addon-knobs";

storiesOf("Components/Accordion", module).add("Basic Accordion", () => (
  <Accordion>Hello</Accordion>
));
