import * as  React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs";
import { RadioButton } from "./RadioButton";
import { action } from "@storybook/addon-actions";
import variants from "../../storyUtil/variants";

storiesOf("Controls|RadioButton", module)
  .add("Default", () => (
    <RadioButton
      label={text("label", "Check me")}
      checked={boolean("Checked", false)}
      onCheckChange={action("onCheckChange")}
    />
  ))
  .add("Colors", () => (
    <div style={{ backgroundColor: "white", display: "inline-flex" }}>
      {variants.map((variant: string) => {
        return (
          <RadioButton
            key={variant}
            label={variant}
            checked={true}
            onCheckChange={action("onCheckChange")}
            variant={variant}
          />
        );
      })}
    </div>
  ));
