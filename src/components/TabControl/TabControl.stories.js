import React from "react";

import { storiesOf } from "@storybook/react";
import { TabControl } from "./TabControl";
import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const tabControlTabs = [
  {
    label: "Hello",
    key: "hello",
    icon: "fas fa-user",
    render: () => {
      return <div>Hello234</div>;
    }
  },
  {
    label: "Hello2",
    key: "hello2",
    icon: null,
    render: () => {
      return <div>Hello2</div>;
    }
  },
  {
    label: "Profile Settings",
    key: "hello12",
    icon: null,
    disabled: true,
    render: () => {
      return <div>Profile</div>;
    }
  }
];
storiesOf("Components/TabControl", module).add("TabControl", () => (
  <div style={{ minWidth: "400px" }}>
    <TabControl tabs={tabControlTabs} />
  </div>
));
