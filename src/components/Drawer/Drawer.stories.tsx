import { Drawer } from "./Drawer";
import { number, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { action } from "@storybook/addon-actions";

storiesOf("Layout|Drawer", module)
    .add("Default", () => (
        <Drawer
            visible={boolean('Visible', false)}
            width={number("Drawer width", 400)}
            onClose={action('onClose')}>
            <h1>Hello</h1>
        </Drawer>
    ));
