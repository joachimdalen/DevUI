import React from "react";

import { storiesOf } from "@storybook/react";
import { Table } from "./Table";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { DataTable, Column } from "./DataTable";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const columnHeaders = [
  {
    key: "first_name",
    label: "First Name",
    accessor: item => item.name.first_name
  },
  {
    key: "last_name",
    label: "Last Name",
    accessor: item => item.name.last_name
  },
  { key: "age", label: "Age" }
];
const values = [
  { name: { prefix: "Mr", first_name: "John", last_name: "Doe" }, age: 22 },
  { name: { prefix: "Mrs", first_name: "Jane", last_name: "Doe" }, age: 55 },
  { name: { prefix: "Mrs", first_name: "Jane", last_name: "Doe" }, age: 55 },
  { name: { prefix: "Mrs", first_name: "Jane", last_name: "Doe" }, age: 55 },
  { name: { prefix: "Mrs", first_name: "Jane", last_name: "Doe" }, age: 55 }
];

storiesOf("Components/Table", module)
  .add("With Children", () => (
    <Table
      caption="This is my table"
      captionLocation="top"
      bordered={boolean("bordered", false)}
      striped={boolean("striped", false)}
      hoverable={boolean("hoverable", true)}
    >
      <TableRow bordered={true}>
        <TableCell isHeader={true}>Hi</TableCell>
        <TableCell isHeader={true}>Hi</TableCell>
        <TableCell isHeader={true}>Hi</TableCell>
        <TableCell isHeader={true}>Hi</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Hello</TableCell>
        <TableCell>Hello Hello Hello </TableCell>
        <TableCell>Hello</TableCell>
        <TableCell>Hello</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Hello</TableCell>
        <TableCell>Hello</TableCell>
        <TableCell>Hello</TableCell>
        <TableCell>Hello</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Hello</TableCell>
        <TableCell>Hello</TableCell>
        <TableCell>Hello</TableCell>
        <TableCell>Hello</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>HelloHelloHelloHello</TableCell>
        <TableCell>Hello</TableCell>
        <TableCell>Hello</TableCell>
        <TableCell>Hello</TableCell>
      </TableRow>
    </Table>
  ))
  .add("DataTable", () => (
    <DataTable
      rows={values}
      columns={columnHeaders}
      multiSelect={true}
      bordered={boolean("bordered", false)}
      striped={boolean("striped", false)}
      hoverable={boolean("hoverable", true)}
      multiSelect={boolean("multi-select", true)}
    />
  ));
