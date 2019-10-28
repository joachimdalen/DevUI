import * as React from "react";
import { storiesOf } from "@storybook/react";
import {
  FormGroup,
  FormGroupRequiredType,
  FormGroupExtraType
} from "./FormGroup";
import { TextInput } from "../TextInput/TextInput";
import { action } from "@storybook/addon-actions";
import { Button } from "../Button/Button";
import { boolean, select, text } from "@storybook/addon-knobs";

storiesOf("Components|FormGroup", module)
  .add("Default", () => (
    <FormGroup label="Username">
      <TextInput value="devexer" onChange={action("onChange")} />
    </FormGroup>
  ))
  .add("Required", () => (
    <FormGroup
      label="Username"
      required={boolean("required", true)}
      requiredType={
        select(
          "Required Type",
          ["icon", "text"],
          "icon"
        ) as FormGroupRequiredType
      }
    >
      <TextInput value="devexer" onChange={action("onChange")} />
    </FormGroup>
  ))
  .add("Inline Controls", () => (
    <FormGroup
      label="Username"
      inline
      extra={text("Extra", "This is the username you used when signing up")}
    >
      <TextInput value="devexer" onChange={action("onChange")} />
      <Button
        size="small"
        icon="fas fa-save"
        variant="success"
        onClick={action("onClick")}
      />
    </FormGroup>
  ))
  .add("Inline label", () => (
    <FormGroup
      label="Username"
      inline={boolean("Inline", true)}
      inlineLabel={boolean("Inline Label", true)}
    >
      <TextInput value="devexer" onChange={action("onChange")} />
      <Button
        size="small"
        icon="fas fa-save"
        variant="success"
        onClick={action("onClick")}
      />
    </FormGroup>
  ))
  .add("Extra", () => (
    <FormGroup
      label="Username"
      extra={text("Extra", "This is the username you used when signing up")}
      extraType={
        select(
          "ExtraType",
          ["success", "normal", "danger", "warning"],
          "normal"
        ) as FormGroupExtraType
      }
    >
      <TextInput value="devexer" onChange={action("onChange")} />
    </FormGroup>
  ))
  .add("With counter", () => (
    <FormGroup
      label="Username"
      extra={text("Extra", "This is the username you used when signing up")}
      extraType={
        select(
          "ExtraType",
          ["success", "normal", "danger", "warning"],
          "normal"
        ) as FormGroupExtraType
      }
      maxLength={100}
      currentLength={300}
    >
      <TextInput value="devexer" onChange={action("onChange")} />
    </FormGroup>
  ))
  .add("With Error", () => (
    <FormGroup
      label="Username"
      extra={text("Extra", "This is the username you used when signing up")}
      error={{ code: 400, message: "Username is already taken" }}
      errorAccessor={error => error.message}
    >
      <TextInput value="devexer" onChange={action("onChange")} />
    </FormGroup>
  ))
  .add("With Notice", () => (
    <FormGroup
      label="Username"
      errorAccessor={error => error.message}
      notice="This username is what you will be recognized as by other users throughout the app"
    >
      <TextInput value="devexer" onChange={action("onChange")} />
    </FormGroup>
  ));
