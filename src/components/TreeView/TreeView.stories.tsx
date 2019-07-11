import * as React from "react";
import { storiesOf } from "@storybook/react";
import { TreeView } from "./TreeView";


storiesOf("Components|TreeView", module)
  .add("Default", () => (
    <TreeView />
  ));
