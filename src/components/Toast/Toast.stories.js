import React from "react";

import { storiesOf } from "@storybook/react";
import { Toast } from "./Toast";
import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
storiesOf("Display Components|Toast", module)
  .add("Toast", () => (
    <Toast
      title={text("Title", "Changes applied")}
      subtitle={text("Subtitle", "Your profile was successfully updated")}
      time={text("Time", "24 seconds ago")}
      variant={text("Variant", "success")}
      dismissible={boolean("Dismissible", false)}
      onDismiss={action("onDismiss")}
    />
  ))
  .add("Toast with icon", () => (
    <Toast
      title={text("Title", "Changes applied")}
      subtitle={text("Subtitle", "Your profile was successfully updated")}
      time={text("Time", "24 seconds ago")}
      variant={text("Variant", "blue")}
      icon={text("Icon", "fab fa-twitter fa-3x")}
      dismissible={boolean("Dismissible", true)}
      onDismiss={action("onDismiss")}
    />
  ));
