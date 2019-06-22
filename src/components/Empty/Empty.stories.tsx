import { Empty } from "./Empty";
import { Button } from "../Button/Button";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";
import * as React from "react";

storiesOf("Components/Empty", module)
  .add("Default", () => <Empty />)
  .add("Custom Description Text", () => (
    <Empty description={text("Description", "Not Found")} />
  ))
  .add("Custom Description", () => (
    <Empty
      description={
        <span>
          Click <a href="#">here</a> for more info
        </span>
      }
    />
  ))
  .add("Children", () => (
    <Empty description="No items exist">
      <Button
        label="Create New"
        variant="blue"
        size="small"
        icon="fas fa-plus"
        onClick={action("onClick")}
      />
    </Empty>
  ))
  .add("Custom Icon", () => (
    <Empty description="No items exist" icon="fas fa-frown" />
  ))
  .add("Image Icon", () => (
    <Empty
      description="No items exist"
      image={
        <img
          style={{ maxHeight: "50px" }}
          src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png"
        />
      }
    />
  ));
