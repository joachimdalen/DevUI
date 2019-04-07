import React from "react";

import { storiesOf } from "@storybook/react";
import { CheckBoxList } from "./CheckBoxList";
import { text, boolean } from "@storybook/addon-knobs/react";
import { bool } from "prop-types";
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
storiesOf("Components/CheckBoxList", module).add("Basic CheckBox", () => (
  <CheckBoxList
    label={text("label", "Delete")}
    data={[
      {
        label: "One",
        key: "one",
        checked: false
      },
      {
        label: "Two",
        key: "two",
        checked: true
      }
    ]}
  />
));
