import { configure, addParameters } from "@storybook/react";
import { setAddon, addDecorator } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs/react";
import centered from '@storybook/addon-centered/react';
import "../src/styles/main.scss";
addDecorator(withKnobs);
addDecorator(centered);

// automatically import all files ending in *.stories.js
const req = require.context("../src/components", true, /.stories.(tsx|js)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
