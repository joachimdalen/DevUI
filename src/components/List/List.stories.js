import React from "react";

import { storiesOf } from "@storybook/react";
import { List } from "./List";
import { ListItem } from "./ListItem";
import { ListActionItem } from "./ListActionItem";
import { text } from "@storybook/addon-knobs/dist/deprecated";
import { boolean } from "@storybook/addon-knobs";

storiesOf("Components/List", module)
  .add("Basic List", () => (
    <List title={text("List title", "List title", "List")}>
      <ListItem
        title={text("Item title", "This is a long item title", "List Items")}
      />
      <ListItem
        title={text("Item title", "This is a long item title", "List Items")}
      />
      <ListItem
        title={text("Item title", "This is a long item title", "List Items")}
      />
    </List>
  ))
  .add("Full list", () => (
    <List title={text("Title", "List title", "List")}>
      <ListItem
        title={text("Item title", "This is a long item title", "List Items")}
        subtitle={text(
          "Item subtitle",
          "While this is a long item subtitle",
          "List Items"
        )}
        icon="ABC"
      />
      <ListItem
        title={text("Item title", "This is a long item title", "List Items")}
        subtitle={text(
          "Item subtitle",
          "While this is a long item subtitle",
          "List Items"
        )}
        icon="ABC"
      />
    </List>
  ))
  .add("Bordered list", () => (
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
        icon="ABC"
      />
      <ListItem
        title={text("Item title", "This is a long item title", "List Items")}
        subtitle={text(
          "Item subtitle",
          "While this is a long item subtitle",
          "List Items"
        )}
        icon="ABC"
      />
    </List>
  ))
  .add("With action", () => (
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
        icon="ABC"
      />
      <ListItem
        title={text("Item title", "This is a long item title", "List Items")}
        subtitle={text(
          "Item subtitle",
          "While this is a long item subtitle",
          "List Items"
        )}
        icon="ABC"
      />
      <ListActionItem
        title={text("Action Title", "Load more...", "List Actions")}
        onClick={() => console.log("h")}
      />
    </List>
  ));
