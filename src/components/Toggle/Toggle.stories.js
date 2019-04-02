import React from "react";

import { storiesOf } from "@storybook/react";
import { Toggle } from "./Toggle";
import { text, boolean } from "@storybook/addon-knobs/react";
const variants = [
  "primary",
  "secondary",
  "dark",
  "light",
  "danger",
  "warning",
  "blue",
  "magenta"
];
storiesOf("Components/Toggle", module)
  .add("Basic Toggle", () => <Toggle toggled={boolean("Toggled", true)} />)
  .add("Rounded Toggle", () => (
    <Toggle
      toggled={boolean("Toggled", true)}
      rounded={boolean("Rounded", true)}
    />
  ))
  .add("Large Toggle", () => (
    <Toggle
      toggled={boolean("Toggled", true)}
      rounded={boolean("Rounded", false)}
      size={text("Size", "large")}
    />
  ))
  .add("With labels", () => (
    <Toggle
      toggled={boolean("Toggled", true)}
      rounded={boolean("Rounded", false)}
      size={text("Size", "large")}
      showLabels={boolean("Show labels", true)}
    />
  ))
  .add("Variants", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        {variants.map(variant => {
          return (
            <Toggle
              key={`normal-block-${variant}`}
              variant={variant}
              toggled={boolean("Toggled", true)}
              showLabels={boolean("Show Labels", false)}
            />
          );
        })}
      </div>
      <div style={{ marginTop: "10px" }}>
        {variants.map(variant => {
          return (
            <Toggle
              key={`large-rounded-${variant}`}
              variant={variant}
              rounded={true}
              toggled={boolean("Toggled", true)}
              showLabels={boolean("Show Labels", false)}
            />
          );
        })}
      </div>
      <div style={{ marginTop: "10px" }}>
        {variants.map(variant => {
          return (
            <Toggle
              key={`large-block-${variant}`}
              variant={variant}
              toggled={boolean("Toggled", true)}
              size="large"
              showLabels={boolean("Show Labels", false)}
            />
          );
        })}
      </div>
      <div style={{ marginTop: "10px" }}>
        {variants.map(variant => {
          return (
            <Toggle
              key={`large-rounded-${variant}`}
              variant={variant}
              toggled={boolean("Toggled", true)}
              size="large"
              rounded={true}
              showLabels={boolean("Show Labels", false)}
            />
          );
        })}
      </div>
    </div>
  ));
