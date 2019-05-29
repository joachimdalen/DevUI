import React from "react";

import { storiesOf } from "@storybook/react";
import { Select } from "./Select";
import { SelectOption } from "./SelectOption";
import { text, boolean } from "@storybook/addon-knobs/react";
import { Empty } from "../Empty/Empty";
import {action} from '@storybook/addon-actions';
const optioons = [
  { label: "Hi", value: "Hi" },
  { label: "Bye", value: "Bye" },
  { label: "France", value: 2 }
];
function getOptions(amount) {
  let options = [];

  for (let i = 0; i < amount; i++) {
    options.push({
      label: "France => " + i,
      value: i
    });
  }
  return options;
}

storiesOf("Components/Select", module)
  .add("With Children", () => (
    <Select
      label="Select City"
      onChange={action('select-changed')}
      keepOpenOnLostFocus={boolean("Keep Open", true)}
    >
      <SelectOption value="l" group="l">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: 'nowrap'
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
      label="Select City"
      options={getOptions(100)}
      keepOpenOnLostFocus={boolean("Keep Open", true)}
      disabled={boolean("Disabled", false)}
      showEmptyPlaceholder={boolean("Show empty placeholder", false)}
      onChange={action('select-changed')}
      emptyPlaceholder={<Empty icon="fas fa-check" />}
    />
  ));
/* .add("With Renderer", () => (
    <Select
      label="Select City"
      options={[{ label: "Hi", value: "Hi" }]}
      renderer={option => (
        <SelectOption label={option.label} style={{ color: "red" }}>
          {option.value}
        </SelectOption>
      )}
      onChange={o => console.log(o)}
    />
  )) */
