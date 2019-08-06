import { Breadcrumb } from "./Breadcrumb";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BreadcrumbItem } from "./BreadcrumbItem";

storiesOf("Layout|Breadcrumb", module).add("Default", () => (
  <Breadcrumb>
    <BreadcrumbItem text="Home" />
    <BreadcrumbItem text="Users" />
    <BreadcrumbItem text="All" />
  </Breadcrumb>
));
