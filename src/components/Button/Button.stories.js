import React from "react";

import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { text, boolean } from "@storybook/addon-knobs/react";
const variants = [
  "primary",
  "secondary",
  "dark",
  "light",
  "danger",
  "warning",
  "blue",
  "magenta"
];
storiesOf("Components/Button", module)
  .add("Basic Button", () => (
    <Button
      label={text("label", "Delete")}
      disabled={boolean("disabled", false)}
      variant={text("variant", "default")}
      onClick={() => alert("hello there")}
    />
  ))
  .add("Block Button", () => (
    <Button
      label={text("label", "Button")}
      disabled={boolean("disabled", false)}
      variant={text("variant", "default")}
      onClick={() => alert("hello there")}
      format={text("format", "block")}
    />
  ))
  .add("Outlined Button", () => (
    <Button
      label={text("label", "Delete")}
      disabled={boolean("disabled", false)}
      outlined={boolean("outlined", true)}
      variant={text("variant", "danger")}
      onClick={() => alert("hello there")}
    />
  ))
  .add("Dashed Button", () => (
    <Button
      label={text("label", "Delete")}
      disabled={boolean("disabled", false)}
      outlined={boolean("outlined", true)}
      dashed={boolean("dashed", true)}
      variant={text("variant", "danger")}
      onClick={() => alert("hello there")}
    />
  ))
  .add("Disabled Button", () => (
    <Button
      label={text("label", "Delete")}
      disabled={boolean("disabled", true)}
      variant={text("variant", "danger")}
      onClick={() => alert("hello there")}
    />
  ))
  .add("Loading Button", () => (
    <Button
      label={text("label", "Delete")}
      disabled={boolean("disabled", true)}
      variant={text("variant", "danger")}
      onClick={() => alert("hello there")}
      loadingIcon={text("Loading Icon", "fas fa-spinner")}
      loadingText={text("Loading Text", "Loading")}
      loading={boolean("Loading", true)}
    />
  ))
  .add("Icon Button", () => (
    <Button
      variant={text("variant", "secondary")}
      onClick={() => alert("hello there")}
      icon="fas fa-check"
      label="Approve"
    />
  ))
  .add("Icon Only Button", () => (
    <Button
      variant={text("variant", "secondary")}
      onClick={() => alert("hello there")}
      icon="fas fa-check"
    />
  ))
  .add("Variants", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        {variants.map(variant => {
          return (
            <Button
              key={`normal-${variant}`}
              label={variant}
              disabled={boolean("disabled", false)}
              variant={variant}
              onClick={() => alert("hello there")}
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
              onClick={() => alert("hello there")}
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
              onClick={() => alert("hello there")}
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
          label="slim"
          disabled={boolean("disabled", false)}
          onClick={() => alert("hello there")}
          size="slim"
          variant="secondary"
        />
        <Button
          label="Medium"
          disabled={boolean("disabled", false)}
          onClick={() => alert("hello there")}
          variant="secondary"
        />
        <Button
          label="Large"
          disabled={boolean("disabled", false)}
          onClick={() => alert("hello there")}
          size="large"
          variant="secondary"
        />
      </div>
    </div>
  ));
