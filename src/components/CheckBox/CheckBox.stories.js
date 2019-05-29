import React from "react";

import { storiesOf } from "@storybook/react";
import { CheckBox } from "./CheckBox";
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
storiesOf("Components/CheckBox", module)
  .add("Basic CheckBox", () => (
    <CheckBox
      label={text("label", "Delete")}
      disabled={boolean("disabled", false)}
      variant={text("variant", "default")}
      checked={boolean("Checked", false)}
      onCheckChange={() => alert("hello there")}
    />
  ))
  .add("Indeterminate CheckBox", () => (
    <CheckBox
      label={text("label", "Delete")}
      disabled={boolean("disabled", false)}
      variant={text("variant", "default")}
      checked={boolean("Checked", false)}
      onCheckChange={() => alert("hello there")}
      indeterminate={boolean("Indeterminate", true)}
    />
  ))
  .add("Variants", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        {variants.map(variant => {
          return (
            <CheckBox
              key={`normal-${variant}`}
              label={variant}
              disabled={boolean("disabled", false)}
              variant={variant}
              checked={boolean("Checked", true)}
              onCheckChange={() => alert("hello there")}
            />
          );
        })}
      </div>
    </div>
  ));
