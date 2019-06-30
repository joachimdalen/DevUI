import * as React from "react";

import { storiesOf } from "@storybook/react";
import { Toggle, ToggleSize } from "./Toggle";
import { text, boolean } from "@storybook/addon-knobs/react";
import { List } from "../List/List";
import { ListItem } from "../List/ListItem";
import variants from "../../storyUtil/variants";
import { action } from "@storybook/addon-actions";

storiesOf("Controls|Toggle", module)
  .add("Basic Toggle", () => (
    <Toggle toggled={boolean("Toggled", true)} onToggle={action("toggled")} />
  ))
  .add("Rounded Toggle", () => (
    <Toggle
      toggled={boolean("Toggled", true)}
      rounded={boolean("Rounded", true)}
      onToggle={action("toggled")}
    />
  ))
  .add("Large Toggle", () => (
    <Toggle
      toggled={boolean("Toggled", true)}
      rounded={boolean("Rounded", false)}
      size={text("Size", "large") as ToggleSize}
      onToggle={action("toggled")}
    />
  ))
  .add("With labels", () => (
    <Toggle
      toggled={boolean("Toggled", true)}
      rounded={boolean("Rounded", false)}
      size={text("Size", "large") as ToggleSize}
      showLabels={boolean("Show labels", true)}
      onToggle={action("toggled")}
    />
  ))
  .add("With context", () => (
    <List
      title={text("Title", "List title", "List")}
      bordered={boolean("Bordered", true, "Styling")}
    >
      <ListItem
        title={text("Item title", "This is a long item title", "List Items")}
        subtitle={text(
          "Item subtitle",
          "While this is a long item subtitle",
          "List Items"
        )}
        icon={
          <Toggle
            toggled={boolean("Toggled", true)}
            rounded={boolean("Rounded", false)}
            showLabels={boolean("Show labels", true)}
            onToggle={action("toggled")}
          />
        }
        iconPlacement="right"
      />
    </List>
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
              onToggle={action("toggled")}
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
              onToggle={action("toggled")}
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
              onToggle={action("toggled")}
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
              onToggle={action("toggled")}
            />
          );
        })}
      </div>
    </div>
  ));
