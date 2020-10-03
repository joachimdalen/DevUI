import cx from 'classnames';
import * as React from 'react';

import { Badge, BadgeProps } from '../Badge/Badge';
import { Omit } from '../common';
import { TextInput } from '../TextInput/TextInput';

export interface Tag {
  value: string;
  removeable?: boolean;
}

interface State {
  tags: Tag[];
  value: string;
}
export interface TagInputProps {
  initialTags?: Tag[];
  onChange?: (tags: Tag[]) => void;
  badgeProps?: Omit<BadgeProps, 'label' | 'onDismiss'>;
}

export class TagInput extends React.Component<TagInputProps, State> {
  state = {
    tags: this.props.initialTags || ([] as Tag[]),
    value: ''
  };

  render(): React.ReactElement {
    const badges = this.state.tags.map((t: Tag) => {
      return (
        <Badge
          key={t.value}
          label={t.value}
          onDismiss={t.removeable ? () => this._removeTag(t) : undefined}
          {...this.props.badgeProps}
        />
      );
    });

    const input = (
      <TextInput
        className="dui-tag-input-control"
        value={this.state.value}
        name="tags"
        placeholder="..."
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => this._handleChange(event)}
        onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => this._handleKeyPress(event)}
        small
      />
    );

    return (
      <div className={cx('dui-tag-input')}>
        <div className="dui-tag-input-tags">{badges}</div>
        <div className="dui-tag-input-type">{input}</div>
      </div>
    );
  }

  _handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>): boolean {
    if (event.key.charCodeAt(0) !== 44 && event.key.charCodeAt(0) !== 13) return false;
    if (this.state.value !== '') {
      this._addTag();
      event.preventDefault();
      return false;
    }
    return true;
  }
  _handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ value: e.target.value });
  }
  _removeTag(tag: Tag): void {
    const { tags } = this.state;
    const index = tags.indexOf(tag);
    const arrCpy = [...this.state.tags];
    if (index !== -1) {
      arrCpy.splice(index, 1);
      this.setState({ tags: arrCpy }, () => {
        this._triggerChange();
      });
    }
  }
  _addTag(): void {
    const tags = this.state.tags;
    const val = this.state.value || '';
    const index = this.state.tags.findIndex((t: Tag) => t.value === val);

    if (index === -1) {
      const tag: Tag = {
        value: val,
        removeable: true
      };
      tags.push(tag);
      this.setState({ tags: tags, value: '' }, () => {
        this._triggerChange();
      });
    } else {
      this.setState({ value: '' });
    }
  }
  _triggerChange(): void {
    const { tags } = this.state;
    const { onChange } = this.props;
    if (onChange) onChange(tags);
  }
}
