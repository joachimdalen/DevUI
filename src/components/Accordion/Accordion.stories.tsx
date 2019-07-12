import { Accordion } from "./Accordion";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

storiesOf("Components|Accordion", module)
  .add("Basic Accordion", () => (
    <Accordion
      title={text("Account", "Account")}
      expanded={boolean("expanded", true)}
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