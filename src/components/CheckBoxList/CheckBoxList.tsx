import * as React from "react";
import cx from "classnames";
import { CheckBox } from "../CheckBox/CheckBox";
import { Empty } from "../Empty/Empty";
export interface Props {
  items: ILB[];
  showCheckCount: boolean;
  showCheckAll: boolean;
  onCheckChange: (checked: ILB[]) => any;
}
export interface ILB {
  label: string;
  key: string;
  checked: boolean;
}
interface State {}
export class CheckBoxList extends React.Component<Props, State> {
  public render() {
    const { items, showCheckAll = true, showCheckCount = true } = this.props;
    return (
      <div className={cx("cui-checkbox-list")}>
        {(showCheckCount || showCheckAll) && (
          <div className="cui-checkbox-list-header">
            {showCheckAll && (
              <CheckBox
                label="Check all"
                checked={false}
                onCheckChange={() => this.toggleAll()}
                className="cui-checkbox-list-header-check-all"
              />
            )}
            {showCheckCount && (
              <span className="cui-checkbox-list-header-counter">(0/3)</span>
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
                      checked={item.checked}
                      onCheckChange={() => this.toggleItem(item)}
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

  private toggleItem(item: ILB) {
    console.log(item.label);
  }
  private toggleAll() {
    console.log("toggle all");
  }
}
