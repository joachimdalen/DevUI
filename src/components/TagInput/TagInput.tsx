import * as React from "react";
import cx from "classnames";
import { Badge } from "../Badge/Badge";
import { TextInput } from "../TextInput/TextInput";
export interface Tag {
  value: string;
  removeable?: boolean;
}

export interface State {
  tags: Tag[];
  value: string;
}
export interface Props {
  initialTags?: Tag[];
  onChange?: (tags: Tag[]) => void;
}

export class TagInput extends React.Component<Props, State> {
  state = {
    tags: this.props.initialTags || ([] as Tag[]),
    value: ""
  };
  render() {
    const badges = this.state.tags.map((t: Tag) => {
      return (
        <Badge
          label={t.value}
          onDismiss={() => this._removeTag(t)}
        />
      );
    });
    const input = (
      <TextInput
        className="dui-tag-input-control"
        value={this.state.value}
        name="tags"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          this._handleChange(event)
        }
        onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) =>
          this._handleKeyPress(event)
        }
        size="small"
      />
    );

    return (
      <div className={cx("dui-tag-input")}>
        <div className="dui-tag-input-tags">{badges}</div>
        <div className="dui-tag-input-type">{input}</div>
      </div>
    );
  }

  _handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.charCode !== 44) return;
    if (this.state.value !== "") {
      this._addTag();
      return false;
    }
    return true;
  }
  _handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }
  _removeTag(tag: Tag) {
    const { tags } = this.state;
    const index = tags.indexOf(tag);
    var arrCpy = [...this.state.tags];
    if (index !== -1) {
      arrCpy.splice(index, 1);
      this.setState({ tags: arrCpy }, () => {
        this._triggerChange();
      });
    }
  }
  _addTag() {
    let tags = this.state.tags;
    const val = this.state.value || "";
    const index = this.state.tags.findIndex((t: Tag) => t.value === val);

    if (index === -1) {
      const tag: Tag = {
        value: val,
        removeable: true
      };
      tags.push(tag);
      this.setState({ tags: tags, value: "" }, () => {
        this._triggerChange();
      });
    } else {
      this.setState({ value: "" });
    }
  }
  _triggerChange() {
    const { tags } = this.state;
    const { onChange } = this.props;
    onChange && onChange(tags);
  }
}
