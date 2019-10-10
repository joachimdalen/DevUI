import cx from "classnames";
import * as React from "react";
import { Column } from "./TableTypes";
import { CheckBoxList, ICheckBoxItem } from "../CheckBoxList/CheckBoxList";
import { Button } from "../Button/Button";

interface TableColumnPickerProps {
  columns: Column[];
  visibleColumns: string[];
  forcedColumns?: string[];
  onColumnUpdate: (visible: string[]) => void;
}
interface State {
  visible: boolean;
  selected: ICheckBoxItem[];
}

class TableColumnPicker extends React.Component<TableColumnPickerProps, State> {
  _mapColumn = (column: Column): ICheckBoxItem => {
    return {
      key: column.key,
      label: column.label
    };
  };

  state = {
    visible: false,
    selected: this.props.columns.map(this._mapColumn) || []
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
    const columnNames = columns.map(this._mapColumn);
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
            disabledItems={this.props.forcedColumns}
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
export { TableColumnPickerProps, TableColumnPicker };
