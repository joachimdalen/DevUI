import { CheckBox, CheckBoxIndicatorLocation } from "../CheckBox/CheckBox";
import { Empty } from "../Empty/Empty";
import cx from "classnames";
import * as React from "react";
import { isString } from "util";
import { FontAwesomeIcon } from "../FontAwesomeIcon/FontAwesomeIcon";

export interface CheckBoxListProps {
  items: ICheckBoxItem[];
  defaultChecked?: ICheckBoxItem[] | string[];
  disabledItems?: ICheckBoxItem[] | string[];
  showCheckCount?: boolean;
  showCheckAll?: boolean;
  onCheckChange: (checked: ICheckBoxItem[]) => any;
  indicatorLocation?: CheckBoxIndicatorLocation;
  checkboxVariant?: string;
}
export interface ICheckBoxItem {
  label: string;
  key: string;
}
interface State {
  checked: ICheckBoxItem[];
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
    const {
      items,
      showCheckAll,
      showCheckCount,
      indicatorLocation,
      checkboxVariant
    } = this.props;
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
                variant={checkboxVariant}
                indicatorLocation={indicatorLocation}
              />
            )}
            {showCheckCount && (
              <span className="dui-checkbox-list-header-counter">{`(${checked.length}/${items.length})`}</span>
            )}
          </div>
        )}
        {items.length ? (
          <ul className="dui-checkbox-list-items">
            {items &&
              items.map((item: ICheckBoxItem) => {
                const isChecked =
                  checked.findIndex(i => i.key === item.key) !== -1;
                return (
                  <li className="dui-checkbox-list-item" key={item.label}>
                    <CheckBox
                      label={item.label}
                      checked={isChecked}
                      onCheckChange={() => this._toggleItem(item)}
                      name={item.key}
                      variant={checkboxVariant}
                      indicatorLocation={indicatorLocation}
                    />
                  </li>
                );
              })}
          </ul>
        ) : (
          <Empty
            image={
              <FontAwesomeIcon
                icon="fa-minus"
                iconStyle="solid"
              ></FontAwesomeIcon>
            }
            header="No items"
          />
        )}
      </div>
    );
  }

  private _toggleItem(item: ICheckBoxItem) {
    const { onCheckChange } = this.props;
    const { checked } = this.state;
    const checkIndex = checked.findIndex(
      (i: ICheckBoxItem) => i.key === item.key
    );
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

  private _toggleAll(): void {
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

  private _setDefaultItems(): void {
    const { defaultChecked } = this.props;
    if (!defaultChecked) {
      return;
    }
    const checkedItems: ICheckBoxItem[] = [];
    for (let i = 0; i < defaultChecked.length; i++) {
      const rawItem = defaultChecked[i];
      if (isString(rawItem)) {
        const item = this._findItem(rawItem);
        if (item) {
          checkedItems.push(item);
        }
      } else {
        checkedItems.push(defaultChecked[i] as ICheckBoxItem);
      }
    }
    this.setState({ checked: checkedItems });
  }

  private _findItem(key: string): ICheckBoxItem | undefined {
    const { items } = this.props;
    return items.find((i: ICheckBoxItem) => i.key === key);
  }
}
