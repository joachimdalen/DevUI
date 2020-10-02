import cx from 'classnames';
import * as React from 'react';

export type TextAreaSizeMode = 'vertical' | 'horizontal' | 'both';
export interface TextAreaProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  sizeMode?: TextAreaSizeMode;
}
type AllProps = TextAreaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({
  sizeMode = 'both',
  disabled,
  ...rest
}: AllProps): React.ReactElement => {
  const baseClass = cx(
    'dui-input',
    { 'dui-input-disabled': disabled },
    'dui-textarea',
    { 'dui-textarea-vertical': sizeMode === 'vertical' },
    { 'dui-textarea-horizontal': sizeMode === 'horizontal' }
  );
  return <textarea className={baseClass} disabled={disabled} {...rest} />;
};
