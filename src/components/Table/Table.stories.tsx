import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Table } from "./Table";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { DataTable } from "./DataTable";
import { boolean, number } from "@storybook/addon-knobs";
import { FontAwesomeIcon } from "../FontAwesomeIcon/FontAwesomeIcon";
import { Column } from "./TableTypes";
const values = require("../../../data/invoices.json");
const columnHeaders: Column[] = [
  {
    key: "id",
    label: "Invoice",
    sortable: false,
    forceVisible: true
  },
  {
    key: "created",
    label: "Created",
    sortable: true
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
    renderer: (item: any) => {
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
    accessor: (item: any) => item.customer.first_name,
    sortable: true
  },
  {
    key: "last_name",
    label: "Last Name",
    accessor: (item: any) => item.customer.last_name
  },
  {
    key: "company",
    label: "Company",
    accessor: (item: any) => item.customer.company,
    renderer: (item: any) =>
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
    renderer: (item: any) => (
      <span>
        <FontAwesomeIcon
          iconStyle="solid"
          icon="fa-dollar-sign"
          className="dui-color-success"
        />{" "}
        {item.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
      </span>
    )
  }
];
storiesOf("Display Components|Table", module)
  .add("With Children", () => (
    <Table
      bordered={boolean("bordered", false)}
      striped={boolean("striped", false)}
      hoverable={boolean("hoverable", true)}
    >
      <TableRow bordered={true} isHeader={true}>
        <TableCell>Hi</TableCell>
        <TableCell>Hi</TableCell>
        <TableCell>Hi</TableCell>
        <TableCell>Hi</TableCell>
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
      bordered={boolean("bordered", false)}
      striped={boolean("striped", false)}
      hoverable={boolean("hoverable", true)}
      multiSelect={boolean("multi-select", true)}
      condensed={boolean("condensed", true)}
    />
  ))
  .add("DataTable Pagination", () => (
    <DataTable
      rows={values}
      columns={columnHeaders}
      bordered={boolean("bordered", false)}
      striped={boolean("striped", false)}
      hoverable={boolean("hoverable", true)}
      multiSelect={boolean("multi-select", true)}
    />
  ));
