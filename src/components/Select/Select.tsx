import { SelectOption } from "./SelectOption";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import cx from "classnames";
import * as React from "react";
import { isUndefined } from "util";
import { Empty } from "../Empty/Empty";
import { Option, SelectProvider, SelectContextType } from "./SelectTypes";

export interface Props {
  label: string;
  options?: Option[];
  children?:
    | React.ReactElement<SelectOption>
    | React.ReactElement<SelectOption>[];
  iconOpen?: string | React.ReactNode;
  iconClose?: string | React.ReactNode;
  keepOpenOnLostFocus?: boolean; // Keep open when focus is lost
  renderer?: (option: Option) => React.ReactElement<SelectOption>;
  onChange: (value: Option) => void;
  defaultValue?: Option;
  disabled?: boolean;
  showEmptyPlaceholder?: boolean;
  emptyPlaceholder?: React.ReactElement<Empty>;
}
export interface State {
  expanded: boolean;
  selectedItem?: Option;
}
export class Select extends React.Component<Props, State> {
  _wrapperRef: any = React.createRef();
  state = {
    expanded: false,
    selectedItem: this.props.defaultValue || undefined
  };

  public componentDidMount() {
    document.addEventListener("mousedown", (e: MouseEvent) =>
      this._handleClickOutside(e)
    );
  }
  public componentWillUnmount() {
    document.removeEventListener("mousedown", (e: MouseEvent) =>
      this._handleClickOutside(e)
    );
  }

  public render() {
    const { expanded } = this.state;
    const { disabled } = this.props;
    const containerClass = cx("dui-select", { disabled: disabled });
    const infoClass = cx("dui-select-info");
    const previewClass = cx("dui-select-preview");
    const caretContainerClass = cx("dui-select-caret-container");
    const optionsClass = cx("dui-select-options");
    const optionsListClass = cx("dui-select-options-list");
    const caretIcon = expanded ? "fas fa-caret-up" : "fas fa-caret-down";
    const contextValue: SelectContextType = {
      options: this.props.options,
      onSelect: (item: Option) => {
        this._selectOption(item);
      }
    };
    return (
      <SelectProvider value={contextValue}>
        <div
          className={containerClass}
          role="select"
          ref={node => (this._wrapperRef = node)}
        >
          <div className={infoClass} onClick={() => this._toggle()}>
            <div className={previewClass}>{this._getPreviewLabel()}</div>
            <span className={caretContainerClass}>
              <FontAwesomeIcon icon={caretIcon} />
            </span>
          </div>
           
          {expanded && (
            <div className={optionsClass}>
              <div className={optionsListClass}>{this._renderOptions()}</div>
            </div>
          )}
        </div>
      </SelectProvider>
    );
  }

  _renderOptions() {
    const { children, options, renderer } = this.props;

    const hasChildOptions = !isUndefined(children);
    const hasCustomRender = !isUndefined(renderer);
    const hasOptions = !isUndefined(options);

    if (hasChildOptions || !hasOptions) {
      return this._renderChildOptions();
    } else if (hasCustomRender) {
      return this._renderCustomOptions();
    } else {
      return this._renderDataOptions();
    }
  }
  _renderCustomOptions() {
    const { options, renderer } = this.props;
    return options && renderer && options.map(renderer);
  }
  _renderDataOptions() {
    const {
      options,
      showEmptyPlaceholder = false,
      emptyPlaceholder
    } = this.props;
    if (!options || (!options.length && showEmptyPlaceholder)) {
      return emptyPlaceholder || <Empty description="No options" />;
    }
    return options.map((option: Option) => {
      return (
        <div
          className={cx("dui-select-option")}
          key={option.value}
          onClick={() => this._selectOption(option)}
        >
          {option.label}
        </div>
      );
    });
  }
  _renderChildOptions() {
    const { children } = this.props;
    return children;
  }
  _handleClickOutside(event: MouseEvent) {
    const { keepOpenOnLostFocus } = this.props;
    if (
      this._wrapperRef &&
      !this._wrapperRef.contains(event.target) &&
      !keepOpenOnLostFocus
    ) {
      this.setState({ expanded: false });
    }
  }
  _toggle() {
    const { disabled } = this.props;
    if (disabled) return;

    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }
  _selectOption(option: Option) {
    const { onChange } = this.props;
    this.setState({ expanded: false, selectedItem: option }, () => {
      onChange && onChange(option);
    });
  }
  _getPreviewLabel() {
    const { label } = this.props;
    const { selectedItem } = this.state;
    if (isUndefined(selectedItem)) {
      return label;
    }
    return selectedItem.label;
  }
}
