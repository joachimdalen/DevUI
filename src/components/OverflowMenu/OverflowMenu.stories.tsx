import * as React from "react";
import { storiesOf } from "@storybook/react";
import { OverflowMenu } from "./OverflowMenu";
import { OverflowMenuItem } from "./OverflowMenuItem";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import { action } from "@storybook/addon-actions";

storiesOf("Controls|OverflowMenu", module)
    .add("Default", () => (<OverflowMenu>
        <OverflowMenuItem onClick={action('editItemClicked')}>
            <FontAwesomeIcon icon="fa-edit" iconStyle="regular" margin marginDirection="right" />
            Edit
        </OverflowMenuItem>
        <OverflowMenuItem onClick={action('viewItemClicked')}>
            <FontAwesomeIcon icon="fa-eye" iconStyle="regular" margin marginDirection="right" />
            View
        </OverflowMenuItem>
        <OverflowMenuItem onClick={action('deleteItemClicked')}>
            <FontAwesomeIcon icon="fa-trash-alt" iconStyle="solid" margin marginDirection="right" />
            Delete
        </OverflowMenuItem>
    </OverflowMenu>))
    .add("Custom button props", () => (<OverflowMenu triggerButtonProps={{
        variant: "primary",
        label: "View Menu"
    }}>
        <OverflowMenuItem onClick={action('editItemClicked')}>
            <FontAwesomeIcon icon="fa-edit" iconStyle="regular" margin marginDirection="right" />
            Edit
        </OverflowMenuItem>
        <OverflowMenuItem onClick={action('viewItemClicked')}>
            <FontAwesomeIcon icon="fa-eye" iconStyle="regular" margin marginDirection="right" />
            View
        </OverflowMenuItem>
        <OverflowMenuItem onClick={action('deleteItemClicked')}>
            <FontAwesomeIcon icon="fa-trash-alt" iconStyle="solid" margin marginDirection="right" />
            Delete
        </OverflowMenuItem>
    </OverflowMenu>));