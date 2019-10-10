import * as React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "../FontAwesomeIcon/FontAwesomeIcon";
interface PanelProps {}

class Panel extends React.Component<PanelProps> {
  render() {
    const baseClass = cx("dui-panel");
    return (
      <div className={baseClass}>
        <div className="dui-panel-header">
          <h3 className="dui-panel-title">Lofts</h3>
          <div className="dui-panel-actions">
            <FontAwesomeIcon
              icon="fa-angle-double-up"
              iconStyle="solid"
              fixedWidth
              onClick={() => console.log("up")}
            />
            <FontAwesomeIcon icon="fa-sync-alt" iconStyle="solid" fixedWidth />
            <FontAwesomeIcon icon="fa-times" iconStyle="solid" fixedWidth />
          </div>
        </div>
        <div className="dui-panel-body">This is some content</div>
      </div>
    );
  }
}
export { PanelProps, Panel };
