import { Accordion } from "./Accordion";
import { FontAwesomeIcon } from "../FontAwesomeIcon/FontAwesomeIcon";
import { boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { AccordionGroup } from "./AccordionGroup";

storiesOf("Components|Accordion", module)
  .add("Basic Accordion", () => (
    <Accordion
      title={text("Account", "Account")}
      expanded={boolean("expanded", true)}
      onToggle={action("onToggle")}
    >
      Hello
    </Accordion>
  ))
  .add("Nested", () => (
    <Accordion
      key="2"
      title={text("Account", "Account")}
      expanded={boolean("expanded", true)}
      
      onToggle={action("onToggle")}
    >
      Hello There
      <Accordion
        key="1"
        title={text("Account", "Account")}
        expanded={boolean("nestedExpanded", true)}
      
        onToggle={action("onToggleNested")}
      >
        Hello
      </Accordion>
    </Accordion>
  ))
  .add("Borderless", () => (
    <Accordion
      title={text("Account", "Account")}
      expanded={boolean("expanded", true)}
      borderless={boolean("borderless", true)}
      onToggle={action("onToggle")}
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
      onToggle={action("onToggle")}
    >
      Hello
    </Accordion>
  ))
  .add("Group", () => (
    <AccordionGroup multiExpand={boolean("Multi Expand", false)}>
      <Accordion
        title={text("Account", "Account")}
        expanded={boolean("expanded", true)}
        onToggle={action("onToggle")}
      >
        Hello
      </Accordion>
      <Accordion
        title={text("Account", "Account")}
        expanded={boolean("expanded", true)}
        onToggle={action("onToggle")}
      >
        Hello
      </Accordion>
    </AccordionGroup>
  ))
  .add("Borderless Group", () => {
    return (
      <AccordionGroup
        accordionProps={{
          expanded: boolean("expanded", true),
          borderless: boolean("borderless", true),
          onToggle: action("onToggle"),
        }}
      >
        <Accordion title="This is one">Hello</Accordion>
        <Accordion title="This is two">Hello</Accordion>
      </AccordionGroup>
    );
  });
