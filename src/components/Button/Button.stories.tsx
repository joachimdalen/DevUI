import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Button, ButtonFormat } from "./Button";
import { text, boolean } from "@storybook/addon-knobs/react";
import variants from "../../storyUtil/variants";
import { action } from "@storybook/addon-actions";
storiesOf("Components/Button", module)
  .add("Basic Button", () => (
    <Button
      label={text("label", "Delete")}
      disabled={boolean("disabled", false)}
      variant={text("variant", "default")}
      onClick={action("button-clicked")}
    />
  ))
  .add("Block Button", () => (
    <Button
      label={text("label", "Button")}
      disabled={boolean("disabled", false)}
      variant={text("variant", "default")}
      onClick={action("button-clicked")}
      format={text("format", "block") as ButtonFormat}
    />
  ))
  .add("Outlined Button", () => (
    <Button
      label={text("label", "Delete")}
      disabled={boolean("disabled", false)}
      outlined={boolean("outlined", true)}
      variant={text("variant", "danger")}
      onClick={action("button-clicked")}
    />
  ))
  .add("Dashed Button", () => (
    <Button
      label={text("label", "Delete")}
      disabled={boolean("disabled", false)}
      outlined={boolean("outlined", true)}
      dashed={boolean("dashed", true)}
      variant={text("variant", "danger")}
      onClick={action("button-clicked")}
    />
  ))
  .add("Disabled Button", () => (
    <Button
      label={text("label", "Delete")}
      disabled={boolean("disabled", true)}
      variant={text("variant", "danger")}
      onClick={action("button-clicked")}
    />
  ))
  .add("Loading Button", () => (
    <Button
      label={text("label", "Delete")}
      disabled={boolean("disabled", true)}
      variant={text("variant", "danger")}
      onClick={action("button-clicked")}
      loadingIcon={text("Loading Icon", "fas fa-spinner")}
      loadingText={text("Loading Text", "Loading")}
      loading={boolean("Loading", true)}
    />
  ))
  .add("Icon Button", () => (
    <Button
      variant={text("variant", "secondary")}
      onClick={action("button-clicked")}
      icon="fas fa-check"
      label="Approve"
    />
  ))
  .add("Icon Only Button", () => (
    <Button
      variant={text("variant", "secondary")}
      onClick={action("button-clicked")}
      icon="fas fa-check"
    />
  ))
  .add("Variants", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        {variants.map((variant: string) => {
          return (
            <Button
              key={`normal-${variant}`}
              label={variant}
              disabled={boolean("disabled", false)}
              variant={variant}
              onClick={action("button-clicked-" + variant)}
            />
          );
        })}
      </div>
      <div style={{ marginTop: "10px" }}>
        {variants.map(variant => {
          return (
            <Button
              key={`outlined-${variant}`}
              label={variant}
              disabled={boolean("disabled", false)}
              outlined={boolean("outlined", true)}
              variant={variant}
              onClick={action("button-outlined-clicked-" + variant)}
            />
          );
        })}
      </div>
      <div style={{ marginTop: "10px" }}>
        {variants.map(variant => {
          return (
            <Button
              key={`dashed-outlined-${variant}`}
              label={variant}
              disabled={boolean("disabled", false)}
              dashed={true}
              outlined={true}
              variant={variant}
              onClick={action("button-dashed-clicked-" + variant)}
            />
          );
        })}
      </div>
    </div>
  ))
  .add("Sizes", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Button
          label="small"
          disabled={boolean("disabled", false)}
          onClick={action("button-small-clicked")}
          size="small"
          variant="secondary"
        />
        <Button
          label="Medium"
          disabled={boolean("disabled", false)}
          onClick={action("button-medium-clicked")}
          variant="secondary"
        />
        <Button
          label="Large"
          disabled={boolean("disabled", false)}
          onClick={action("button-large-clicked")}
          size="large"
          variant="secondary"
        />
      </div>
    </div>
  ));
