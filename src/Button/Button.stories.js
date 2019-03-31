import React from "react";

import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { text, boolean } from "@storybook/addon-knobs/react";
storiesOf("Components/Button", module)
  .add("Basic Button", () => (
    <Button
      label={text("label", "Delete")}
      disabled={boolean("disabled", false)}
      variant={text("variant", "default")}
      onClick={() => alert("hello there")}
    />
  ))
  .add("Block Button", () => (
    <Button
      label={text("label", "Button")}
      disabled={boolean("disabled", false)}
      variant={text("variant", "default")}
      onClick={() => alert("hello there")}
      format={text("format", "block")}
    />
  ))
  .add("Outlined Button", () => (
    <Button
      label={text("label", "Delete")}
      disabled={boolean("disabled", false)}
      outlined={boolean("outlined", true)}
      variant={text("variant", "danger")}
      onClick={() => alert("hello there")}
    />
  ));
