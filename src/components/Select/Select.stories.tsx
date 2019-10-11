import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Select } from "./Select";
import { SelectOption } from "./SelectOption";
import { boolean } from "@storybook/addon-knobs/react";
import { Empty } from "../Empty/Empty";
import { action } from "@storybook/addon-actions";
import { SelectOptionType } from "./SelectTypes";
import { FontAwesomeIcon } from "../FontAwesomeIcon/FontAwesomeIcon";

function getOptions(): SelectOptionType[] {
  let customers = require("../../../data/invoices.json").map(
    (i: any) => i.customer
  );

  return customers.map((c: any) => {
    return {
      label: [c.last_name, ",", c.prefix, c.first_name].join(" "),
      value: [c.last_name, ",", c.prefix, c.first_name].join(" ")
    };
  });
}

storiesOf("Controls|Select", module)
  .add("With Children", () => (
    <Select
      label="Select City"
      onChange={action("select-changed")}
      keepOpenOnLostFocus={boolean("Keep Open", true)}
    >
      <SelectOption value="some" label="Some">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap"
          }}
        >
          <img src="http://placehold.it/100x100" style={{ maxWidth: "20px" }} />
          This is some title
        </div>
      </SelectOption>
    </Select>
  ))
  .add("With Data", () => (
    <Select
      label="Select Customer"
      options={getOptions()}
      keepOpenOnLostFocus={boolean("Keep Open", true)}
      disabled={boolean("Disabled", false)}
      showEmptyPlaceholder={boolean("Show empty placeholder", false)}
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
      renderer={option => (
        <SelectOption label={option.label} value={option.value}>
          Let's render: {option.value}
        </SelectOption>
      )}
      onChange={o => console.log(o)}
    />
  ))
  .add("With Renderer & Meta", () => (
    <Select
      label="Select City"
      options={[
        {
          label: "Hi",
          value: "Hi",
          meta: { firstName: "Devexer" }
        }
      ]}
      renderer={option => (
        <SelectOption label={option.label} value={option.value}>
          Let's render: {option.meta && option.meta.firstName}
        </SelectOption>
      )}
      onChange={o => console.log(o)}
    />
  ));
