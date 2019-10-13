import { Drawer } from "./Drawer";
import { number, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

storiesOf("Layout|Drawer", module)
    .add("Default", () => (
        <Drawer visible={boolean('Visible', false)} width={number("card width", 200)}></Drawer>
    ));
