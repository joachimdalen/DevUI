import React from "react";

import { storiesOf } from "@storybook/react";
import { Table } from "./Table";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { DataTable, Column } from "./DataTable";
import { TableColumnPicker } from "./TableColumnPicker";
import { boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
const values = require("../../../data/invoices.json");
const columnHeaders = [
  {
    key: "id",
    label: "Invoice",
    sortable: false,
    searchable: true
  },
  {
    key: "created",
    label: "Created",
    sortable: true,
    searchable: true
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
    searchable: true,
    renderer: item => {
      if (item.status === "Paid")
        return <span className="dui-color-success">{item.status}</span>;
      else if (item.status === "Pending")
        return <span className="dui-color-warning">{item.status}</span>;
      else return <span className="dui-color-danger">{item.status}</span>;
    }
  },
  {
    key: "first_name",
    label: "First Name",
    accessor: item => item.customer.first_name,
    sortable: true,
    searchable: true
  },
  {
    key: "last_name",
    label: "Last Name",
    accessor: item => item.customer.last_name
  },
  {
    key: "company",
    label: "Company",
    accessor: item => item.customer.company,
    renderer: item =>
      item.customer.company ? (
        <span>
          {item.customer.company.name} ({item.customer.company.id})
        </span>
      ) : (
        "-"
      )
  },
  { key: "service", label: "Service" },
  {
    key: "amount",
    label: "Amount",
    sortable: true,
    renderer: item => (
      <span>
        <FontAwesomeIcon
          icon="fas fa-dollar-sign"
          className="dui-color-success"
        />{" "}
        {item.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
      </span>
    )
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
  ))
  .add("DataTable Pagination", () => (
    <DataTable
      rows={values}
      columns={columnHeaders}
      multiSelect={true}
      bordered={boolean("bordered", false)}
      striped={boolean("striped", false)}
      hoverable={boolean("hoverable", true)}
      paginationEnabled={boolean("Paginate", true)}
      paginationPageSize={number("PageSize", 3)}
      multiSelect={boolean("multi-select", true)}
    />
  ))
  .add("TableColumnPicker", () => (
    <TableColumnPicker columns={columnHeaders} />
  ));
