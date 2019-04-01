import { configure } from "@storybook/react";
import { setAddon, addDecorator } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { withKnobs, select } from "@storybook/addon-knobs/react";
import centered from '@storybook/addon-centered/react';
import "../src/styles/main.scss";
addDecorator(withKnobs);
addDecorator(centered);
setAddon(JSXAddon);

// automatically import all files ending in *.stories.js
const req = require.context("../src/components", true, /.stories.js$/);
function loadStories() {
  require("./welcomeStory");
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
