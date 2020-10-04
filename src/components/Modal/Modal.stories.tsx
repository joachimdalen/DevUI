import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { Button } from '../Button/Button';
import { Modal, ModalProps } from './Modal';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';

export default {
  title: 'Layout/Modal',
  component: Modal,
  args: {
    visible: true
  },
  argTypes: { onBackdropClick: { action: 'onClick' }, onClose: { action: 'onClick' } }
} as Meta;

export const Default: Story<ModalProps> = args => (
  <Modal {...args}>
    <ModalHeader title="Some title">This is me</ModalHeader>
    <ModalBody>This is you </ModalBody>
    <ModalFooter>
      <div style={{ float: 'right' }}>
        <Button label="Save" icon="fas fa-save" size="small" />
      </div>
    </ModalFooter>
  </Modal>
);
