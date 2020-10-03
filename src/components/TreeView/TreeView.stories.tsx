import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { TreeView } from './TreeView';
import { TreeViewNode } from './TreeViewTypes';

const nodes: TreeViewNode[] = [
  {
    key: '0000',
    label: '0000 - Finances',
    nodes: [
      { key: 1000, label: '1000 - Car Loan' },
      { key: 2000, label: '2000 - Bank Statement' },
      { key: 3000, label: '3000 - Bills', nodes: [{ key: 3001, label: '3001 - Power' }] }
    ]
  },
  {
    key: 3002,
    label: '3002 - Phone',
    nodes: [
      { key: 2016, label: '2016' },
      { key: 2017, label: '2017' },
      { key: 2018, label: '2018' }
    ]
  },
  { key: 4000, label: '4000 - File', icon: 'fa-file-pdf' }
];
storiesOf('WIP|TreeView', module).add('Default', () => (
  <TreeView
    nodes={nodes}
    onSelect={action('onSelect')}
    onExpanded={action('onExpanded')}
    onCheck={action('onCheck')}
    multiselect={boolean('Multiselect', false)}
  ></TreeView>
));
