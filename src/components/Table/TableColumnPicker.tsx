import cx from "classnames";
import * as React from "react";
import { Column } from "./TableTypes";
import { CheckBoxList } from "../CheckBoxList/CheckBoxList";
import { Button } from "../Button/Button";

export interface Props {
  columns: Column[];
  visibleColumns: string[];
  onColumnUpdate: (visible: string[]) => void;
}
export interface State {
  visible: boolean;
  selected: any[];
}

export class TableColumnPicker extends React.Component<Props, State> {
  state = {
    visible: false,
    selected: [] as any[]
  };

  componentDidMount() {}

  _toggleItem(item: any) {
    const { selected } = this.state;
    const checkIndex = selected.indexOf(item);
    var arrCpy = [...selected];
    if (checkIndex !== -1) {
      arrCpy.splice(checkIndex, 1);
      this.setState({ selected: arrCpy });
    } else {
      const newItems = [...selected, item];
      this.setState({ selected: newItems });
    }
  }
  public render() {
    const { columns, onColumnUpdate } = this.props;
    const { selected } = this.state;
    const baseClass = cx("dui-table-column-picker");
    const contentClass = cx("dui-table-column-picker-content", {
      visible: this.state.visible
    });
    const columnNames = columns.map((c: Column) => {
      return {
        key: c.key,
        label: c.label
      };
    });
    return (
      <div className={baseClass}>
        <Button
          onClick={() => this.setState({ visible: !this.state.visible })}
          size="small"
          variant="light"
          icon="fas fa-columns"
        />
        <div className={contentClass}>
          <div className="dui-table-column-picker-content-header">Columns</div>
          <CheckBoxList
            showCheckAll={true}
            showCheckCount={true}
            items={columnNames}
            defaultChecked={selected}
            onCheckChange={e => this.setState({ selected: e })}
          />
          <Button
            label="Select"
            onClick={() => {
              onColumnUpdate &&
                onColumnUpdate(
                  this.state.selected.map(i => {
                    return i.key;
                  })
                );
              this.setState({ visible: false });
            }}
            variant="blue"
            size="small"
            format="block"
          />
        </div>
      </div>
    );
  }
}
