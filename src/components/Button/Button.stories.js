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
  "blue"
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
              key={`dashed-${variant}`}
              label={variant}
              disabled={boolean("disabled", false)}
              dashed={true}
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
  ));
