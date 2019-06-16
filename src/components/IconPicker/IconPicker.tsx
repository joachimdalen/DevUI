import * as React from 'react';
import cx from 'classnames';
import { TextInput } from '../TextInput/TextInput';

export interface IconPickerState {
    query: string;
    picked: Icon;
}
export interface Props {
    onIconSelect: (icon: Icon) => void;
    hiddenIcons?: string[];
    paginate?: boolean;
}
export interface Icon {
    prefix: "fas" | "far" | "fab";
    icon: string;
}

const icons: Icon[] =
    [{
        prefix: "fas",
        icon: "fa-check"
    },
    {
        prefix: "fas",
        icon: "fa-trash"
    }];

export class IconPicker extends React.Component<Props>{
    render() {
        return <div className={cx('dui-icon-picker')}>
            <div className="dui-icon-picker-selector">d</div>
            <div className="dui-icon-picker-container">
                <div className="dui-icon-picker-search">
                    <TextInput name="search" value="" placeholder="Search" size="small" onChange={() => console.log(1)}></TextInput>
                </div>
                <div className="dui-icon-picker-icons">
                    {icons.filter(() => this._isHidden).map((i: Icon) => {
                        return <span className="dui-icon-picker-icon" onClick={() => this._selectIcon(i)}>
                            <i className={`${i.prefix} ${i.icon}`}></i>
                        </span>
                    })}
                </div>

            </div>
        </div>
    }
    _isHidden(icon: Icon) {
        const { hiddenIcons } = this.props;
        if (!hiddenIcons) return false;
        return hiddenIcons.findIndex(i => i == icon.icon) !== -1;
    }
    _selectIcon(icon: Icon) {
        console.log("Selected icon" + icon.icon);
    }
}