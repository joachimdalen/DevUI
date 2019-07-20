import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Badge } from "./Badge";
import { text } from "@storybook/addon-knobs/react";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import { action } from "@storybook/addon-actions";
import variants from "../../storyUtil/variants";
storiesOf("Display Components|Badge", module)
  .add("Default Badge", () => <Badge label={text("label", "Active")} />)
  .add("Dismissible", () => (
    <Badge
      label={text("label", "Active")}
      onDismiss={action("badge-dismissed")}
    />
  ))
  .add("Custom Dismiss Icon", () => (
    <Badge
      label={text("label", "Active")}
      onDismiss={action("badge-dismissed")}
      dismissText={<FontAwesomeIcon iconStyle="solid" icon="fa-egg" />}
    />
  ))
  .add("Variants", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        {variants.map(variant => {
          return <Badge label={variant} variant={variant} />;
        })}
      </div>
    </div>
  ));
