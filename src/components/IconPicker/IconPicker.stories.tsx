import * as React from "react";
import { storiesOf } from "@storybook/react";
import { IconPicker } from './IconPicker';
import { action } from '@storybook/addon-actions';
storiesOf("Components/IconPicker", module)
    .add("Default", () => <IconPicker onIconSelect={action("onIconSelect")} />);
