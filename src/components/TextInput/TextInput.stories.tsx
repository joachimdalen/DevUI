import * as React from "react";

import { storiesOf } from "@storybook/react";
import { TextInput } from "./TextInput";
import { FontAwesomeIcon } from "../FontAwesomeIcon/FontAwesomeIcon";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
storiesOf("Controls|TextInput", module)
  .add("Basic Input", () => (
    <TextInput
      onChange={action("input-changed")}
      disabled={boolean("Disabled", false)}
      value=""
    />
  ))
  .add("with Addon", () => (
    <TextInput
      addonBefore="@"
      addonAfter=".com"
      onChange={action("input-changed")}
      value=""
    />
  ))
  .add("with Fix", () => (
    <TextInput
      suffix={<FontAwesomeIcon iconStyle="brands" icon="fa-discord" />}
      prefix={<FontAwesomeIcon iconStyle="solid" icon="fa-check" />}
      onChange={action("input-changed")}
      value=""
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
        value=""
      />
      <TextInput
        placeholder="Normal (default)"
        onChange={action("input-changed")}
        value=""
      />
      <TextInput
        placeholder="Large"
        size="large"
        onChange={action("input-changed")}
        value=""
      />
    </div>
  ));
