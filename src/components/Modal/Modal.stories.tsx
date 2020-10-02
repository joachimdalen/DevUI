import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { Modal, ModalSize } from './Modal';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { Button } from '../Button/Button';

storiesOf('Layout|Modal', module).add('Default', () => (
  <Modal
    size={text('Size', 'medium') as ModalSize}
    onBackdropClick={action('onBackdropClick')}
    closeOnBackdropClick={boolean('closeOnBackdropClick', false)}
    visible={boolean('visible', true)}
    onClose={action('onClose')}
  >
    <ModalHeader title={text('Title', 'Some title')}>This is me</ModalHeader>
    <ModalBody>This is you </ModalBody>
    <ModalFooter>
      <div style={{ float: 'right' }}>
        <Button label="Save" icon="fas fa-save" size="small" onClick={action('onButtonClick')} />
      </div>
    </ModalFooter>
  </Modal>
));
