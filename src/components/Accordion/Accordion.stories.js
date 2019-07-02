import React from "react";
import { storiesOf } from "@storybook/react";
import { Accordion } from "./Accordion";
import { text } from "@storybook/addon-knobs/dist/deprecated";
import { boolean } from "@storybook/addon-knobs";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";

storiesOf("Components|Accordion", module)
  .add("Basic Accordion", () => (
    <Accordion
      title={text("Account", "Account")}
      initiallyExpanded={boolean("Initially Expanded", true)}
    >
      Hello
    </Accordion>
  ))
  .add("Custom Title", () => (
    <Accordion
      title={
        <span className="dui-color-danger">
          <FontAwesomeIcon
            iconStyle="solid"
            icon="fa-trash"
            margin
            marginDirection="right"
          />
          Delete
        </span>
      }
    >
      Hello
    </Accordion>
  ));
