import * as React from "react";
import cx from "classnames";
import { isNumber } from "util";
import { Overlay } from "../Overlay/Overlay";
import { FontAwesomeIcon } from "../FontAwesomeIcon/FontAwesomeIcon";

export type DrawerLocation = "left" | "right";
export interface DrawerProps {
    width?: number | string;
    className?: string;
    visible: boolean;
    onClose?: () => void;
}

export class Drawer extends React.Component<DrawerProps> {
    public render() {
        const { width, visible, onClose } = this.props;
        const cardWidth = isNumber(width) ? `${width}px` : width;
        const baseClass = cx(
            "dui-drawer"
        );
        console.log(cardWidth);
        return (
            <Overlay visible={visible}>
                <div className="dui-drawer-container">

                    <div className={baseClass}>
                        {onClose && (
                            <FontAwesomeIcon iconStyle="solid" icon="fa-times" onClick={onClose} />
                        )}
                        Hello
                    </div>
                </div>
            </Overlay>
        );
    }
}
