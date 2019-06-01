import React from "react";

import { storiesOf } from "@storybook/react";
import { TextInput } from "./TextInput";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
storiesOf("Components/Inputs/TextInput", module)
  .add("Basic Input", () => (
    <TextInput
      onChange={action("input-changed")}
      disabled={boolean("Disabled", false)}
    />
  ))
  .add("with Addon", () => (
    <TextInput
      addonBefore="@"
      addonAfter=".com"
      onChange={action("input-changed")}
    />
  ))
  .add("with Fix", () => (
    <TextInput
      prefix={<FontAwesomeIcon icon="fas fa-check" />}
      suffix={<FontAwesomeIcon icon="fab fa-discord" />}
      onChange={action("input-changed")}
    />
  ))
  .add("Sizes", () => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <TextInput
        placeholder="Small"
        size="small"
        onChange={action("input-changed")}
      />
      <TextInput
        placeholder="Normal (default)"
        onChange={action("input-changed")}
      />
      <TextInput
        placeholder="Large"
        size="large"
        onChange={action("input-changed")}
      />
    </div>
  ));
