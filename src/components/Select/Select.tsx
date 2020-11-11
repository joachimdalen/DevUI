import cx from 'classnames';
import * as React from 'react';

import { Empty } from '../Empty/Empty';
import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { SelectOption } from './SelectOption';

export interface SelectProps {
  label: string;
  options?: SelectOption[];
  defaultValue?: string | number;
  disabled?: boolean;
  keepOpenOnLostFocus?: boolean; // Keep open when focus is lost
  emptyPlaceholder?: React.ReactElement;
  className?: string;
  optionClassName?: string;
  loading?: boolean;
  renderer?: (option: SelectOption) => React.ReactElement<SelectOption>;
  previewRenderer?: (option: SelectOption) => React.ReactElement<SelectOption>;
  onChange: (value: SelectOption) => void;
}
interface State {
  expanded: boolean;
  selectedItem?: string | number;
}
export class Select extends React.Component<SelectProps, State> {
  _wrapperRef: any = React.createRef();
  state = {
    expanded: false,
    selectedItem: this.props.defaultValue === undefined ? undefined : this.props.defaultValue
  };

  public componentDidUpdate(prevProps: SelectProps): void {
    if (prevProps.defaultValue !== this.props.defaultValue) {
      this.setState({
        selectedItem: this.props.defaultValue === undefined ? undefined : this.props.defaultValue
      });
    }
  }

  public componentDidMount(): void {
    document.addEventListener('mousedown', (e: MouseEvent) => this._handleClickOutside(e));
  }
  public componentWillUnmount(): void {
    document.removeEventListener('mousedown', (e: MouseEvent) => this._handleClickOutside(e));
  }
  clearVal = (): void => {
    this.props.onChange({} as SelectOption);
  };
  public render(): React.ReactElement {
    const { expanded, selectedItem } = this.state;
    const { disabled, loading, className } = this.props;
    const containerClass = cx('dui-select', { disabled: disabled || loading }, className);
    const infoClass = cx('dui-select-info');
    const previewClass = cx('dui-select-preview', {
      'dui-select-placeholder': selectedItem === undefined
    });
    const caretContainerClass = cx('dui-select-caret-container', {
      'dui-select-placeholder': selectedItem === undefined
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

  _renderOptions(): React.ReactNode {
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
  _renderChildOptions(): React.ReactNode {
    const { children } = this.props;
    return children;
  }
  _handleClickOutside(event: MouseEvent): void {
    const { keepOpenOnLostFocus } = this.props;
    if (this._wrapperRef && !this._wrapperRef.contains(event.target) && !keepOpenOnLostFocus) {
      this.setState({ expanded: false });
    }
  }
  _toggle(): void {
    const { disabled, loading } = this.props;
    if (disabled || loading) return;

    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }
  _selectOption(option: SelectOption): void {
    const { onChange } = this.props;
    this.setState({ expanded: false, selectedItem: option.value }, () => {
      if (onChange) onChange(option);
    });
  }
  _getPreviewLabel(): React.ReactElement<SelectOption> | string {
    const { label, previewRenderer, options } = this.props;
    const { selectedItem } = this.state;
    const selectedItemValue = options?.find(x => x.value === selectedItem);
    if (selectedItemValue === undefined) {
      return label;
    }
    if (previewRenderer !== undefined) {
      return previewRenderer(selectedItemValue);
    }

    return selectedItemValue.label;
  }
}
