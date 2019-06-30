import * as React from "react";
import { storiesOf } from "@storybook/react";
import { FormGroup } from "./FormGroup";
import { TextInput } from "../TextInput/TextInput";
import { action } from "@storybook/addon-actions";
import { Button } from "../Button/Button";

storiesOf("Components|FormGroup", module)
  .add("Default", () => (
    <FormGroup label="Username">
      <TextInput value="devexer" onChange={action("onChange")} />
    </FormGroup>
  ))
  .add("Inline", () => (
    <FormGroup
      label="Username"
      inline
      extra="This is the username you used when signing up"
    >
      <TextInput value="devexer" onChange={action("onChange")} />
      <Button
        size="small"
        icon="fas fa-save"
        variant="success"
        onClick={action("onClick")}
      />
    </FormGroup>
  ));
