import React from "react";

import { storiesOf } from "@storybook/react";
import { Table } from "./Table";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { DataTable, Column } from "./DataTable";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";

const columnHeaders = [
  {
    key: "avatar",
    label: "",
    accessor: item => (
      <img
        style={{ borderRadius: "50%" }}
        src={`https://api.adorable.io/avatars/10/${item.first_name}.png`}
      />
    )
  },
  {
    key: "first_name",
    label: "First Name",
    accessor: item => item.name.first_name,
    sortable: true
  },
  {
    key: "last_name",
    label: "Last Name",
    accessor: item => item.name.last_name
  },
  { key: "age", label: "Age", sortable: true },
  { key: "degree", label: "Degree", sortable: true },
  {
    key: "income",
    label: "Income",
    accessor: item => (
      <span>
        <FontAwesomeIcon
          icon="fas fa-dollar-sign"
          className="dui-color-success"
        />{" "}
        {item.income}
      </span>
    )
  }
];
const values = [
  {
    name: { prefix: "Mr", first_name: "Adam", last_name: "Doe" },
    age: 22,
    income: "200,000",
    degree: "A"
  },
  {
    name: { prefix: "Mrs", first_name: "Bever", last_name: "Doe" },
    age: 23,
    income: "200,000",
    degree: "D"
  },
  {
    name: { prefix: "Mrs", first_name: "Jane", last_name: "Doe" },
    age: 15,
    income: "200,000",
    degree: "C"
  },
  {
    name: { prefix: "Mrs", first_name: "Charlie", last_name: "Doe" },
    age: 59,
    income: "200,000",
    degree: "B"
  },
  {
    name: { prefix: "Mrs", first_name: "Zorro", last_name: "Doe" },
    age: 5,
    income: "200,000",
    degree: "F"
  }
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
