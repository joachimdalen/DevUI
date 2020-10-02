import cx from 'classnames';
import * as React from 'react';
import { isUndefined } from 'util';

import { Empty } from '../Empty/Empty';
import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { SelectOption } from './SelectOption';

export interface SelectProps {
  label: string;
  options?: SelectOption[];
  defaultValue?: SelectOption;
  disabled?: boolean;
  keepOpenOnLostFocus?: boolean; // Keep open when focus is lost
  emptyPlaceholder?: React.ReactElement<Empty>;
  className?: string;
  optionClassName?: string;
  loading?: boolean;
  renderer?: (option: SelectOption) => React.ReactElement<SelectOption>;
  previewRenderer?: (option: SelectOption) => React.ReactElement<SelectOption>;
  onChange: (value: SelectOption) => void;
}
interface State {
  expanded: boolean;
  selectedItem?: SelectOption;
}
export class Select extends React.Component<SelectProps, State> {
  _wrapperRef: any = React.createRef();
  state = {
    expanded: false,
    selectedItem: this.props.defaultValue || undefined
  };

  public componentDidUpdate(prevProps: SelectProps) {
    if (prevProps.defaultValue !== this.props.defaultValue) {
      this.setState({
        selectedItem: this.props.defaultValue || undefined
      });
    }
  }

  public componentDidMount() {
    document.addEventListener('mousedown', (e: MouseEvent) => this._handleClickOutside(e));
  }
  public componentWillUnmount() {
    document.removeEventListener('mousedown', (e: MouseEvent) => this._handleClickOutside(e));
  }
  clearVal = () => {
    this.props.onChange({} as SelectOption);
  };
  public render() {
    const { expanded, selectedItem } = this.state;
    const { disabled, loading, className } = this.props;
    const containerClass = cx('dui-select', { disabled: disabled || loading }, className);
    const infoClass = cx('dui-select-info');
    const previewClass = cx('dui-select-preview', {
      'dui-select-placeholder': isUndefined(selectedItem)
    });
    const caretContainerClass = cx('dui-select-caret-container', {
      'dui-select-placeholder': isUndefined(selectedItem)
    });
    const optionsClass = cx('dui-select-options');
    const optionsListClass = cx('dui-select-options-list');
    const caretDirectionIcon = expanded ? 'fa-angle-up' : 'fa-angle-down';
    const caretIcon = loading ? 'fa-spinner' : caretDirectionIcon;
    const caretIconClass = cx({ 'dui-select-loading': loading });
    return (
      <div className={containerClass} role="select" ref={node => (this._wrapperRef = node)}>
        <div className={infoClass} onClick={() => this._toggle()}>
          <div className={previewClass}>{this._getPreviewLabel()}</div>
          <span className={caretContainerClass}>
            <FontAwesomeIcon
              iconStyle="solid"
              icon={caretIcon}
              animate={loading}
              className={caretIconClass}
            />
          </span>
        </div>

        {expanded && (
          <div className={optionsClass}>
            <div className={optionsListClass}>{this._renderOptions()}</div>
          </div>
        )}
      </div>
    );
  }

  _renderOptions() {
    const { options, emptyPlaceholder, renderer, optionClassName } = this.props;
    if (!options || (!options.length && emptyPlaceholder)) {
      return (
        emptyPlaceholder || (
          <Empty
            header="No options"
            image={<FontAwesomeIcon icon="fa-inbox" iconStyle="solid" />}
          />
        )
      );
    }
    return options.map((option: SelectOption) => {
      return (
        <div
          className={cx('dui-select-option', optionClassName)}
          role="option"
          key={option.value}
          onClick={() => this._selectOption(option)}
        >
          {renderer ? renderer(option) : option.label}
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
    if (this._wrapperRef && !this._wrapperRef.contains(event.target) && !keepOpenOnLostFocus) {
      this.setState({ expanded: false });
    }
  }
  _toggle() {
    const { disabled, loading } = this.props;
    if (disabled || loading) return;

    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }
  _selectOption(option: SelectOption) {
    const { onChange } = this.props;
    this.setState({ expanded: false, selectedItem: option }, () => {
      onChange && onChange(option);
    });
  }
  _getPreviewLabel() {
    const { label, previewRenderer } = this.props;
    const { selectedItem } = this.state;
    if (isUndefined(selectedItem)) {
      return label;
    }
    if (!isUndefined(previewRenderer)) {
      return previewRenderer(selectedItem);
    }
    return selectedItem.label;
  }
}
