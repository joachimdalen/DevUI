import React from "react";

import { storiesOf } from "@storybook/react";
import { CheckBoxList } from "./CheckBoxList";
import { text, boolean } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
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
const items = [
  { label: "One", key: 0 },
  { label: "Two", key: 1 },
  { label: "Three", key: 2 },
  { label: "Four", key: 3 },
  { label: "Five", key: 4 }
];
storiesOf("Components/CheckBoxList", module)
  .add("Basic CheckBox", () => (
    <CheckBoxList
      label={text("label", "Delete")}
      items={items}
      defaultChecked={[items[0], items[2]]}
      disabledItems={[items[3]]}
      showCheckAll={boolean("Show Check All", true)}
      showCheckCount={boolean("Show Check Count", true)}
      onCheckChange={action("onCheckChange")}
    />
  ))
  .add("Empty", () => (
    <CheckBoxList
      label={text("label", "Delete")}
      items={[]}
      showCheckAll={boolean("Show Check All", true)}
      showCheckCount={boolean("Show Check Count", true)}
      onCheckChange={action("onCheckChange")}
    />
  ));
