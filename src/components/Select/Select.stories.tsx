import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Select } from "./Select";
import { SelectOption } from "./SelectOption";
import { boolean } from "@storybook/addon-knobs";
import { Empty } from "../Empty/Empty";
import { action } from "@storybook/addon-actions";
import { FontAwesomeIcon } from "../FontAwesomeIcon/FontAwesomeIcon";

function getOptions(): SelectOption[] {
  let customers = require("../../../data/invoices.json").map(
    (i: any) => i.customer
  );

  return customers.map((c: any) => {
    return {
      label: [c.last_name, ",", c.prefix, c.first_name].join(" "),
      value: [c.last_name, ",", c.prefix, c.first_name].join(" "),
    };
  });
}

storiesOf("Controls|Select", module)
  .add("With Data", () => (
    <Select
      label="Select Customer"
      options={getOptions()}
      keepOpenOnLostFocus={boolean("Keep Open", true)}
      disabled={boolean("Disabled", false)}
      onChange={action("select-changed")}
      emptyPlaceholder={
        <Empty
          header=""
          image={<FontAwesomeIcon icon="fa-check" iconStyle="solid" />}
        />
      }
    />
  ))
  .add("With Empty", () => (
    <Select
      label="Select Customer"
      options={[]}
      keepOpenOnLostFocus={boolean("Keep Open", true)}
      disabled={boolean("Disabled", false)}
      onChange={action("select-changed")}
      emptyPlaceholder={
        <Empty
          header=""
          image={<FontAwesomeIcon icon="fa-check" iconStyle="solid" />}
        />
      }
    />
  ))
  .add("With Renderer", () => (
    <Select
      label="Select City"
      options={[{ label: "Hi", value: "Hi" }]}
      renderer={(option) => <p>Let's render: {option.value}</p>}
      onChange={(o) => console.log(o)}
    />
  ))
  .add("With Renderer & Meta", () => (
    <Select
      label="Select City"
      options={[
        {
          label: "Hi",
          value: "Hi",
          meta: { firstName: "Devexer" },
        },
      ]}
      renderer={(option) => (
        <p>Let's render: {option.meta && option.meta.firstName}</p>
      )}
      onChange={(o) => console.log(o)}
    />
  ));
