import * as React from "react";
import cx from "classnames";
import { CheckBox } from "../CheckBox/CheckBox";
export interface Props {
  data: ILB[];
}
export interface ILB {
  label: string;
  key: string;
  checked: boolean;
}
export class CheckBoxList extends React.Component<Props> {
  public render() {
    const { data } = this.props;
    return (
      <div className={cx("cui-checkbox-list")}>
        <div className="cui-checkbox-list-header">
          <CheckBox
            label="Check all"
            checked={false}
            onCheckChange={() => console.log("hello")}
          />
          <span className="cui-checkbox-list-header-counter">(0/3)</span>
        </div>
        <li className="cui-checkbox-list-items">
          {data &&
            data.map((data: ILB) => {
              return (
                <ul>
                  <CheckBox
                    key={data.label}
                    label={data.label}
                    checked={data.checked}
                    onCheckChange={() => console.log("hello")}
                  />
                </ul>
              );
            })}
        </li>
      </div>
    );
  }
}
