import cx from "classnames";
import * as React from "react";
import { Button } from "../Button/Button";
import { ButtonGroup } from "../Button/ButtonGroup";

export interface TablePaginatorProps {
  totalItems: number;
  pageLimit: number;
  from: number;
  to: number;
  onPageChange: (from: number, to: number) => void;
}

export class TablePaginator extends React.Component<TablePaginatorProps> {
  public render() {
    const baseClass = cx("dui-table-paginator");
    const countClass = cx("dui-table-paginator-count");
    const { totalItems, from, to } = this.props;
    return (
      <div className={baseClass}>
        <div className={countClass}>
          <span>{`${from}-${Math.min(to, totalItems)}`}</span> of{" "}
          <span>{totalItems}</span>
        </div>
        <ButtonGroup>
          <Button
            icon="fas fa-angle-left"
            size="small"
            variant="light"
            onClick={this.movePrev}
            disabled={from == 1 || totalItems == 0}
          />
          <Button
            icon="fas fa-angle-right"
            size="small"
            variant="light"
            onClick={this.moveNext}
            disabled={to === totalItems || totalItems == 0}
          />
        </ButtonGroup>
      </div>
    );
  }
  moveNext = () => {
    const { to, pageLimit, totalItems, onPageChange } = this.props;
    const newFrom = to + 1;
    const newTo = to + pageLimit > totalItems ? totalItems : to + pageLimit;
    onPageChange(newFrom, newTo);
  };
  movePrev = () => {
    const { from, pageLimit, onPageChange } = this.props;
    const newFrom = from - pageLimit < 1 ? 1 : from - pageLimit;
    const newTo = from - 1;
    onPageChange(newFrom, newTo);
  };
}
