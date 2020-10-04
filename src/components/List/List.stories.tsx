import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { List, ListProps } from './List';
import { ListActionItem } from './ListActionItem';
import { ListItem } from './ListItem';

export default {
  title: 'Display Components/List',
  component: List,
  args: {
    title: 'List title'
  }
} as Meta;

export const Default: Story<ListProps> = args => (
  <List {...args}>
    <ListItem title={'This is a long item title'} />
    <ListItem title={'This is a long item title'} />
    <ListItem title={'This is a long item title'} />
  </List>
);

export const WithoutTitle: Story<ListProps> = args => (
  <List {...args}>
    <ListItem title={'This is a long item title'} />
    <ListItem title={'This is a long item title'} />
    <ListItem title={'This is a long item title'} />
  </List>
);
WithoutTitle.args = { title: undefined };
export const FullList: Story<ListProps> = args => (
  <List {...args}>
    <ListItem
      title="This is a long item title"
      subtitle="While this is a long item subtitle"
      leftIcon="ABC"
    />
    <ListItem
      title="This is a long item title"
      subtitle="While this is a long item subtitle"
      leftIcon="ABC"
    />
    <ListItem
      title="This is a long item title"
      subtitle="While this is a long item subtitle"
      leftIcon="ABC"
    />
  </List>
);
export const Bordered: Story<ListProps> = args => (
  <List {...args}>
    <ListItem title={'This is a long item title'} />
    <ListItem title={'This is a long item title'} />
    <ListItem title={'This is a long item title'} />
  </List>
);
Bordered.args = { bordered: true };

export const WithAction: Story<ListProps> = args => (
  <List {...args}>
    <ListItem title={'This is a long item title'} />
    <ListItem title={'This is a long item title'} />
    <ListItem title={'This is a long item title'} />
    <ListActionItem title="Load more..." onClick={() => console.log('')} />
  </List>
);

export const IconPlacement: Story<ListProps> = args => (
  <List {...args}>
    <ListItem
      title="This is a long item title"
      subtitle="While this is a long item subtitle"
      leftIcon={
        <img src="https://www.ntbinfo.no/data/images/00163/604fce71-7704-4ba9-8808-95c92a479aa2-w_960_h_960.png" />
      }
    />
    <ListItem
      title="This is a long item title"
      subtitle="While this is a long item subtitle"
      rightIcon={
        <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png" />
      }
    />
    <ListItem
      title="This is a long item title"
      subtitle="While this is a long item subtitle"
      leftIcon={'LA'}
    />
    <ListItem
      title="This is a long item title"
      subtitle="While this is a long item subtitle"
      rightIcon={'LA'}
    />
    <ListItem
      title="This is a long item title"
      subtitle="While this is a long item subtitle"
      leftIcon={
        <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png" />
      }
      rightIcon={'LA'}
    />
    <ListItem
      title="This is a long item title"
      subtitle="While this is a long item subtitle that could also be even longer than the short subtitles above"
    />
    <ListActionItem title="Load more..." onClick={() => console.log()} />
  </List>
);
IconPlacement.args = {
  bordered: true
};
