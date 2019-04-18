import React from "react";

import { storiesOf } from "@storybook/react";
import { TextInput } from "./TextInput";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
storiesOf("Components/Inputs/TextInput", module)
  .add("Basic Input", () => <TextInput />)
  .add("with Addon", () => <TextInput addonBefore="@" addonAfter=".com" />)
  .add("with Fix", () => (
    <TextInput
      prefix={<FontAwesomeIcon icon="fas fa-check" />}
      suffix={<FontAwesomeIcon icon="fab fa-discord" />}
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
      <TextInput placeholder="Small" size="small" />
      <TextInput placeholder="Normal (default)" />
      <TextInput placeholder="Large" size="large" />
    </div>
  ));
