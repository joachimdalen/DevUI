import * as React from "react";
import { storiesOf } from "@storybook/react";
import { TagInput } from "./TagInput";
import { action } from "@storybook/addon-actions";
storiesOf("Controls|TagInput", module)
  .add("Default", () => (
    <TagInput
      initialTags={[{ value: "Hello", removeable: false }]}
      onChange={action("onChange")}
    />
  ))
  .add("Separated", () => <div>TagInput</div>);
