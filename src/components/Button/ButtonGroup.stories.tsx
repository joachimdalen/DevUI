import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { Button } from './Button';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';

export default {
  title: 'Controls/Button/Group',
  component: ButtonGroup,
  argTypes: { onClick: { action: 'clicked' } }
} as Meta;

export const Default: Story<ButtonGroupProps> = () => (
  <ButtonGroup>
    <Button label="Save" variant="success" icon="fas fa-save" />
    <Button label="Edit" variant="warning" icon="fas fa-edit" />
    <Button label="Delete" variant="danger" icon="fas fa-trash" />
  </ButtonGroup>
);
export const Vertical: Story<ButtonGroupProps> = () => (
  <ButtonGroup vertical>
    <Button label="Save" variant="success" icon="fas fa-save" />
    <Button label="Edit" variant="warning" icon="fas fa-edit" />
    <Button label="Delete" variant="danger" icon="fas fa-trash" />
  </ButtonGroup>
);
