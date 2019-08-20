import { Breadcrumb } from "./Breadcrumb";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { BreadcrumbItem } from "./BreadcrumbItem";
import { Crumb } from "./BreadcrumbTypes";
let crumbs : Crumb[] = [
  { label: "Home", path: "/a" },
  { label: "Users", path: "/a/users" },
  { label: "All", path: "/a/users/all" }
];
storiesOf("Layout|Breadcrumb", module).add("Default", () => (
  <Breadcrumb crumbs={crumbs}>
    <BreadcrumbItem text="Home" />
    <BreadcrumbItem text="Users" />
    <BreadcrumbItem text="All" />
  </Breadcrumb>
));
