import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { Overlay, OverlayProps } from './Overlay';

export default {
  title: 'Layout/Overlay',
  component: Overlay,
  args: {
    visible: true
  }
} as Meta;

const BaseTemplate: Story<OverlayProps> = args => <Overlay {...args} />;

export const Default: Story<OverlayProps> = BaseTemplate.bind({});

export const Loader: Story<OverlayProps> = args => (
  <Overlay {...args}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        color: 'white'
      }}
    >
      <FontAwesomeIcon animate animationType="spin" iconStyle="solid" icon="fa-spinner" />
      <span
        style={{
          marginTop: '10px'
        }}
      >
        Loading..
      </span>
    </div>
  </Overlay>
);
