import * as React from "react";
import { storiesOf } from "@storybook/react";
import { List } from "./List";
import { ListItem } from "./ListItem";
import { ListActionItem } from "./ListActionItem";
import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

storiesOf("Display Components|List", module)
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
  .add("Without title", () => (
    <List>
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
        leftIcon="ABC"
      />
      <ListItem
        title={text("Item title", "This is a long item title", "List Items")}
        subtitle={text(
          "Item subtitle",
          "While this is a long item subtitle",
          "List Items"
        )}
        leftIcon="ABC"
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
        leftIcon="ABC"
      />
      <ListItem
        title={text("Item title", "This is a long item title", "List Items")}
        subtitle={text(
          "Item subtitle",
          "While this is a long item subtitle",
          "List Items"
        )}
        leftIcon="ABC"
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
        leftIcon="ABC"
      />
      <ListItem
        title={text("Item title", "This is a long item title", "List Items")}
        subtitle={text(
          "Item subtitle",
          "While this is a long item subtitle",
          "List Items"
        )}
        leftIcon="ABC"
      />
      <ListItem
        title={text("Item title", "This is a long item title", "List Items")}
        subtitle={text(
          "Item subtitle",
          "While this is a long item subtitle",
          "List Items"
        )}
        leftIcon="ABC"
      />
      <ListItem
        title={text("Item title", "This is a long item title", "List Items")}
        subtitle={text(
          "Item subtitle",
          "While this is a long item subtitle",
          "List Items"
        )}
      />
      <ListActionItem
        title={text("Action Title", "Load more...", "List Actions")}
        onClick={action("list-item-clicked")}
      />
    </List>
  ))
  .add("Icon placement", () => (
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
        leftIcon={
          <img src="https://www.ntbinfo.no/data/images/00163/604fce71-7704-4ba9-8808-95c92a479aa2-w_960_h_960.png" />
        }
      />
      <ListItem
        title={text("Item title", "This is a long item title", "List Items")}
        subtitle={text(
          "Item subtitle",
          "While this is a long item subtitle",
          "List Items"
        )}
        rightIcon={
          <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png" />
        }
      />
      <ListItem
        title={text("Item title", "This is a long item title", "List Items")}
        subtitle={text(
          "Item subtitle",
          "While this is a long item subtitle",
          "List Items"
        )}
        leftIcon={"LA"}
      />
      <ListItem
        title={text("Item title", "This is a long item title", "List Items")}
        subtitle={text(
          "Item subtitle",
          "While this is a long item subtitle",
          "List Items"
        )}
        rightIcon={"LA"}
      />
      <ListItem
        title={text("Item title", "This is a long item title", "List Items")}
        subtitle={text(
          "Item subtitle",
          "While this is a long item subtitle",
          "List Items"
        )}
        leftIcon={
          <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png" />
        }
        rightIcon={"LA"}
      />
      <ListItem
        title={text("Item title", "This is a long item title", "List Items")}
        subtitle={text(
          "Long Subtitle",
          "While this is a long item subtitle that could also be even longer than the short subtitles above",
          "List Items"
        )}
      />
      <ListActionItem
        title={text("Action Title", "Load more...", "List Actions")}
        onClick={action("list-item-clicked")}
      />
    </List>
  ));
