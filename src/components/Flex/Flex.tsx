import cx from 'classnames';
import * as React from 'react';

export type FlexGap = 'small' | 'medium' | 'large';
export type FlexDirection = 'row' | 'column';
export type FlexWrap = 'wrap' | 'reverse';
export type FlexJustify = 'flexStart' | 'flexEnd' | 'center' | 'between' | 'around' | 'evenly';
export type FlexAlign = 'flexStart' | 'flexEnd' | 'center' | 'between' | 'around' | 'stretch';

export interface FlexProps {
  gap?: FlexGap;
  wrap?: FlexWrap;
  justify?: FlexJustify;
  align?: FlexAlign;
  flexDirection?: FlexDirection;
  children: any;
  className?: string;
}

const getWrapClass = (wrap?: FlexWrap): string => {
  switch (wrap) {
    case 'reverse':
      return 'dui-flex-wrap-reverse';
    case 'wrap':
      return 'dui-flex-wrap';
    default:
      return '';
  }
};
const getJustifyClass = (justify?: FlexJustify): string => {
  switch (justify) {
    case 'flexStart':
      return 'dui-flex-justify-flex-start';
    case 'flexEnd':
      return 'dui-flex-justify-flex-end';
    case 'center':
      return 'dui-flex-justify-center';
    case 'between':
      return 'dui-flex-justify-between';
    case 'around':
      return 'dui-flex-justify-around';
    case 'evenly':
      return 'dui-flex-justify-evenly';

    default:
      return '';
  }
};
const getAlignClass = (align?: FlexAlign): string => {
  switch (align) {
    case 'flexStart':
      return 'dui-flex-align-flex-start';
    case 'flexEnd':
      return 'dui-flex-align-flex-end';
    case 'center':
      return 'dui-flex-align-center';
    case 'between':
      return 'dui-flex-align-between';
    case 'around':
      return 'dui-flex-align-around';
    case 'stretch':
      return 'dui-flex-align-stretch';
    default:
      return '';
  }
};

export const Flex = ({
  gap,
  flexDirection = 'row',
  wrap,
  justify,
  align,
  className,
  children
}: FlexProps): React.ReactElement => {
  const classes = cx(
    'dui-flex',
    { [`dui-flex-gap-${gap}`]: gap !== undefined },
    [`dui-flex-${flexDirection}`],
    getWrapClass(wrap),
    getJustifyClass(justify),
    getAlignClass(align),
    className
  );

  return <div className={classes}>{children}</div>;
};
