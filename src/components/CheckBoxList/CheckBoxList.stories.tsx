import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import variants from '../../storyUtil/variants';
import { CheckBoxList, ICheckBoxItem } from './CheckBoxList';

const items: ICheckBoxItem[] = [
  { label: 'One', key: '0' },
  { label: 'Two', key: '1' },
  { label: 'Three', key: '2' },
  { label: 'Four', key: '3' },
  { label: 'Five', key: '4' }
];
storiesOf('Controls/CheckBoxList', module)
  .add('Basic CheckBox', () => (
    <CheckBoxList
      items={items}
      defaultChecked={[items[0], items[2]]}
      disabledItems={[items[3]]}
      showCheckAll={boolean('Show Check All', true)}
      showCheckCount={boolean('Show Check Count', true)}
      onCheckChange={action('onCheckChange')}
      checkboxVariant={select('Checkbox Varient', variants, 'primary')}
    />
  ))
  .add('Empty', () => (
    <CheckBoxList
      items={[]}
      showCheckAll={boolean('Show Check All', true)}
      showCheckCount={boolean('Show Check Count', true)}
      onCheckChange={action('onCheckChange')}
      checkboxVariant={select('Checkbox Varient', variants, 'primary')}
    />
  ))
  .add('Right indicator', () => (
    <CheckBoxList
      items={items}
      defaultChecked={[items[0], items[2]]}
      disabledItems={[items[3]]}
      showCheckAll={boolean('Show Check All', true)}
      showCheckCount={boolean('Show Check Count', true)}
      onCheckChange={action('onCheckChange')}
      indicatorLocation="right"
      checkboxVariant={select('Checkbox Varient', variants, 'primary')}
    />
  ));
