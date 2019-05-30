import cx from "classnames";
import * as React from "react";
import { Button } from "../Button/Button";

export interface Props {}

export class TablePaginator extends React.Component<Props> {
  public render() {
    const baseClass = cx("dui-table-paginator");
    const countClass = cx("dui-table-paginator-count");
    return (
      <div className={baseClass}>
        <div className={countClass}>
          <span>1-20</span> of <span>803</span>
        </div>
        <Button
          icon="fas fa-angle-left"
          size="small"
          variant="light"
          onClick={() => console.log("back")}
        />
        <Button
          icon="fas fa-angle-right"
          size="small"
          variant="light"
          onClick={() => console.log("back")}
        />
      </div>
    );
  }
}
