import { Accordion } from "./Accordion";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { AccordionGroup } from "./AccordionGroup";

storiesOf("Components|Accordion", module)
  .add("Basic Accordion", () => (
    <Accordion
      title={text("Account", "Account")}
      expanded={boolean("expanded", true)}
    >
      Hello
    </Accordion>
  ))
  .add("Borderless", () => (
    <Accordion
      title={text("Account", "Account")}
      expanded={boolean("expanded", true)}
      borderless={boolean("borderless", true)}
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
            marginDirection="right"
          />
          Delete
        </span>
      }
    >
      Hello
    </Accordion>
  )).add("Group", () => (
    <AccordionGroup>
      <Accordion
        title={text("Account", "Account")}
        expanded={boolean("expanded", true)}
      >
        Hello
    </Accordion>
      <Accordion
        title={text("Account", "Account")}
        expanded={boolean("expanded", true)}
      >
        Hello
    </Accordion>
    </AccordionGroup>
  ));
