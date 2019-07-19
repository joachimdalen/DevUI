import * as React from "react";
import { storiesOf } from "@storybook/react";
import { TreeView } from "./TreeView";
import { TreeViewNode } from "./TreeViewTypes";
import { action } from "@storybook/addon-actions";

const nodes: TreeViewNode[] = [
  {
    key: "0000",
    label: "0000 - Finances",
    nodes:
      [
        { key: 1000, label: "1000 - Car Loan" },
        { key: 2000, label: "2000 - Bank Statement" },
        { key: 3000, label: "3000 - Bills", nodes: [{ key: 3001, label: "3001 - Power" }] }
      ]
  },
  { key: 3002, label: "3002 - Phone", nodes: [{ key: 2016, label: "2016" }, { key: 2017, label: "2017" }, { key: 2018, label: "2018" }] },
  { key: 4000, label: "4000 - File", icon: "fa-file-pdf" }
]
storiesOf("Components|TreeView", module)
  .add("Default", () => (
    <TreeView nodes={nodes}
      onSelect={action('onSelect')}
      onExpanded={action('onExpanded')}
      onCheck={action('onCheck')}
    >
      {/*   <TreeViewItem label="0001 - Finances">
        <TreeViewItem label="1001 - Car loan" />
        <TreeViewItem label="1002 - Bank statements" />
        <TreeViewItem label="1003 - Bills">
          <TreeViewItem label="1004 - Power" />
          <TreeViewItem label="1005 - Phone">
            <TreeViewItem label="1006 - 2016" />
            <TreeViewItem label="1007 - 2017" />
            <TreeViewItem label="1008 - 2018" />
          </TreeViewItem>
          <TreeViewItem label="1008 - 2018" />
        </TreeViewItem>
      </TreeViewItem>
      <TreeViewItem label="1008 - 2018" >
        <TreeViewItem label="1008 - 2018" leafIcon="fa-file-pdf" />
        <TreeViewItem label="1008 - 2018" />
      </TreeViewItem>
      <TreeViewItem label="1008 - 2018" /> */}
    </TreeView>
  ));
