import { CheckBox } from "../CheckBox/CheckBox";
import { Empty } from "../Empty/Empty";
import cx from "classnames";
import * as React from "react";
import { isString } from "util";
export interface Props {
  items: ILB[];
  defaultChecked?: ILB[] | string[];
  disabledItems?: ILB[] | string[];
  showCheckCount: boolean;
  showCheckAll: boolean;
  onCheckChange: (checked: ILB[]) => any;
}
export interface ILB {
  label: string;
  key: string;
}
interface State {
  checked: ILB[];
}
export class CheckBoxList extends React.Component<Props, State> {
  state: State = {
    checked: []
  };

  componentDidMount() {
    this._setDefaultItems();
  }

  public render() {
    const { items, showCheckAll = true, showCheckCount = true } = this.props;
    const { checked } = this.state;
    const isIndeterminate =
      checked.length !== 0 && !(items.length === checked.length);
    const isAllChecked = items.length !== 0 && items.length === checked.length;
    console.log(isIndeterminate, isAllChecked);
    return (
      <div className={cx("cui-checkbox-list")}>
        {(showCheckCount || showCheckAll) && (
          <div className="cui-checkbox-list-header">
            {showCheckAll && (
              <CheckBox
                label="Check all"
                checked={isAllChecked}
                onCheckChange={() => this._toggleAll()}
                className="cui-checkbox-list-header-check-all"
                disabled={!items.length}
                indeterminate={isIndeterminate}
                name="check_all"
              />
            )}
            {showCheckCount && (
              <span className="cui-checkbox-list-header-counter">{`(${
                checked.length
              }/${items.length})`}</span>
            )}
          </div>
        )}
        {items.length ? (
          <li className="cui-checkbox-list-items">
            {items &&
              items.map((item: ILB) => {
                return (
                  <ul className="cui-checkbox-list-item" key={item.label}>
                    <CheckBox
                      label={item.label}
                      checked={checked.indexOf(item) !== -1}
                      onCheckChange={() => this._toggleItem(item)}
                      name={item.key}
                    />
                  </ul>
                );
              })}
          </li>
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
      this.setState(
        {
          checked: newItems
        },
        () => {
          onCheckChange && onCheckChange(newItems);
        }
      );
    }
  }

  _toggleAll(): void {
    const { items } = this.props;
    const { checked } = this.state;
    if (items.length !== checked.length) {
      this.setState({ checked: items });
    } else {
      this.setState({ checked: [] });
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
