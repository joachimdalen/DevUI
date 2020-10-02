import * as React from "react";

import { storiesOf } from "@storybook/react";
import { Alert, AlertVariant } from "./Alert";
import { select } from "@storybook/addon-knobs";
const typeOptions = {
  info: "info",
  warning: "warning",
  success: "success",
  danger: "danger"
};
storiesOf("Display Components|Alert", module)
  .add("Default", () => (
    <Alert
      message="This is the message"
      description="This is the description"
      variant={select("Variant", typeOptions, "info") as AlertVariant}
    />
  ))
  .add("With icon", () => (
    <Alert
      message="This is the message"
      description="This is the description"
      variant={select("Variant", typeOptions, "info") as AlertVariant}
      withIcon
    />
  ));
