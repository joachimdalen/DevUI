import * as React from "react";
import { storiesOf } from "@storybook/react";
import { CheckBoxList, ICheckBoxItem } from "./CheckBoxList";
import { boolean } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";

const items: ICheckBoxItem[] = [
  { label: "One", key: "0" },
  { label: "Two", key: "1" },
  { label: "Three", key: "2" },
  { label: "Four", key: "3" },
  { label: "Five", key: "4" }
];
storiesOf("Controls|CheckBoxList", module)
  .add("Basic CheckBox", () => (
    <CheckBoxList
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
      items={[]}
      showCheckAll={boolean("Show Check All", true)}
      showCheckCount={boolean("Show Check Count", true)}
      onCheckChange={action("onCheckChange")}
    />
  ))
  .add("Right indicator", () => (
    <CheckBoxList
      items={items}
      defaultChecked={[items[0], items[2]]}
      disabledItems={[items[3]]}
      showCheckAll={boolean("Show Check All", true)}
      showCheckCount={boolean("Show Check Count", true)}
      onCheckChange={action("onCheckChange")}
      indicatorLocation="right"
    />
  ));
