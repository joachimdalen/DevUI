import * as React from "react";
import { configure } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/react";

const minWidth = (storyFn) => (
  <div
    style={{
      minWidth: "500px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    {storyFn()}
  </div>
);
import "../src/styles/main.scss";
addDecorator(minWidth);
addDecorator(withKnobs);
addDecorator(centered);

// automatically import all files ending in *.stories.js
const req = require.context("../src/components", true, /.stories.(tsx|js)$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
