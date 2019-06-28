import { CheckBox } from "../CheckBox/CheckBox";
import { Empty } from "../Empty/Empty";
import cx from "classnames";
import * as React from "react";
import { isString } from "util";
export interface CheckBoxListProps {
  items: ILB[];
  defaultChecked?: ILB[] | string[];
  disabledItems?: ILB[] | string[];
  showCheckCount?: boolean;
  showCheckAll?: boolean;
  onCheckChange: (checked: ILB[]) => any;
}
export interface ILB {
  label: string;
  key: string;
}
interface State {
  checked: ILB[];
}
export class CheckBoxList extends React.Component<CheckBoxListProps, State> {
  static defaultProps: Partial<CheckBoxListProps> = {
    showCheckAll: false,
    showCheckCount: false
  };
  state: State = {
    checked: []
  };

  componentDidMount() {
    this._setDefaultItems();
  }

  public render() {
    const { items, showCheckAll, showCheckCount } = this.props;
    const { checked } = this.state;
    const isIndeterminate =
      checked.length !== 0 && !(items.length === checked.length);
    const isAllChecked = items.length !== 0 && items.length === checked.length;
    return (
      <div className={cx("dui-checkbox-list")}>
        {(showCheckCount || showCheckAll) && (
          <div className="dui-checkbox-list-header">
            {showCheckAll && (
              <CheckBox
                label="Check all"
                checked={isAllChecked}
                onCheckChange={() => this._toggleAll()}
                className="dui-checkbox-list-header-check-all"
                disabled={!items.length}
                indeterminate={isIndeterminate}
                name="check_all"
              />
            )}
            {showCheckCount && (
              <span className="dui-checkbox-list-header-counter">{`(${
                checked.length
              }/${items.length})`}</span>
            )}
          </div>
        )}
        {items.length ? (
          <ul className="dui-checkbox-list-items">
            {items &&
              items.map((item: ILB) => {
                const isChecked =
                  checked.findIndex(i => i.key === item.key) !== -1;
                return (
                  <li className="dui-checkbox-list-item" key={item.label}>
                    <CheckBox
                      label={item.label}
                      checked={isChecked}
                      onCheckChange={() => this._toggleItem(item)}
                      name={item.key}
                    />
                  </li>
                );
              })}
          </ul>
        ) : (
          <Empty icon="fas fa-minus" description="No items" />
        )}
      </div>
    );
  }

  _toggleItem(item: ILB) {
    const { onCheckChange } = this.props;
    const { checked } = this.state;
    const checkIndex = checked.findIndex((i: ILB) => i.key === item.key);
    var arrCpy = [...this.state.checked];
    if (checkIndex !== -1) {
      arrCpy.splice(checkIndex, 1);
      this.setState({ checked: arrCpy }, () => {
        onCheckChange && onCheckChange(this.state.checked);
      });
    } else {
      const newItems = [...this.state.checked, item];
      this.setState({ checked: newItems }, () => {
        onCheckChange && onCheckChange(newItems);
      });
    }
  }

  _toggleAll(): void {
    const { items, onCheckChange } = this.props;
    const { checked } = this.state;
    if (items.length !== checked.length) {
      this.setState({ checked: items }, () => {
        onCheckChange && onCheckChange(this.state.checked);
      });
    } else {
      this.setState({ checked: [] }, () => {
        onCheckChange && onCheckChange(this.state.checked);
      });
    }
  }
  _setDefaultItems(): void {
    const { defaultChecked } = this.props;
    if (!defaultChecked) {
      return;
    }
    const checkedItems: ILB[] = [];
    for (let i = 0; i < defaultChecked.length; i++) {
      const rawItem = defaultChecked[i];
      if (isString(rawItem)) {
        const item = this._findItem(rawItem);
        if (item) {
          checkedItems.push(item);
        }
      } else {
        checkedItems.push(defaultChecked[i] as ILB);
      }
    }
    this.setState({ checked: checkedItems });
  }

  _findItem(key: string): ILB | undefined {
    const { items } = this.props;
    return items.find((i: ILB) => i.key === key);
  }
}
