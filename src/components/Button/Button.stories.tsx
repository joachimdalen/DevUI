import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, ButtonFormat } from './Button';
import { text, boolean, select } from '@storybook/addon-knobs';
import variants from '../../storyUtil/variants';
import { action } from '@storybook/addon-actions';
import { ButtonGroup } from './ButtonGroup';
import { SplitButton } from './SplitButton';
import { SplitButtonAction } from './SplitButtonAction';
import { Flex } from '../Flex/Flex';

storiesOf('Controls|Button/Default', module)
  .add('Basic Button', () => (
    <Button
      label={text('label', 'Delete')}
      disabled={boolean('disabled', false)}
      variant={select('Variant', variants, 'primary')}
      onClick={action('button-clicked')}
    />
  ))
  .add('Block Button', () => (
    <Button
      label={text('label', 'Button')}
      disabled={boolean('disabled', false)}
      variant={select('Variant', variants, 'primary')}
      onClick={action('button-clicked')}
      format={text('format', 'block') as ButtonFormat}
    />
  ))
  .add('Outlined Button', () => (
    <Button
      label={text('label', 'Delete')}
      disabled={boolean('disabled', false)}
      outlined={boolean('outlined', true)}
      variant={select('Variant', variants, 'danger')}
      icon={text('icon', 'fas fa-trash')}
      size={select('Size', ['small', 'medium', 'large'], 'medium')}
      iconOnly={boolean('iconOnly', false)}
      onClick={action('button-clicked')}
    />
  ))
  .add('Link Button', () => (
    <Button
      label={text('label', 'Delete')}
      linkButton={boolean('Link Button', true)}
      disabled={boolean('disabled', false)}
      onClick={action('button-clicked')}
      variant="secondary"
    />
  ))
  .add('Disabled Button', () => (
    <Button
      label={text('label', 'Delete')}
      disabled={boolean('disabled', true)}
      variant={select('Variant', variants, 'primary')}
      onClick={action('button-clicked')}
    />
  ))
  .add('Loading Button', () => (
    <Button
      label={text('label', 'Delete')}
      disabled={boolean('disabled', true)}
      variant={select('Variant', variants, 'primary')}
      onClick={action('button-clicked')}
      loadingIcon={text('Loading Icon', 'fas fa-spinner')}
      loadingText={text('Loading Text', 'Loading')}
      loading={boolean('Loading', true)}
    />
  ))
  .add('Icon Button', () => (
    <Button
      variant={select('Variant', variants, 'primary')}
      size={select('Size', ['small', 'medium', 'large'], 'medium')}
      onClick={action('button-clicked')}
      icon="fas fa-check"
      label="Approve"
    />
  ))
  .add('Icon Only Button', () => (
    <Button
      variant={select('Variant', variants, 'primary')}
      onClick={action('button-clicked')}
      size={select('Size', ['small', 'medium', 'large'], 'medium')}
      icon="fas fa-check"
      iconOnly
    />
  ))
  .add('Variants', () => (
    <Flex gap="small" flexDirection="column">
      <Flex gap="small">
        {variants.map((variant: string) => {
          return (
            <Button
              key={`normal-${variant}`}
              label={variant}
              disabled={boolean('disabled', false)}
              variant={variant}
              onClick={action('button-clicked-' + variant)}
            />
          );
        })}
      </Flex>
      <Flex gap="small">
        {variants
          .filter(x => x !== 'primary')
          .map(variant => {
            return (
              <Button
                key={`outlined-${variant}`}
                label={variant}
                disabled={boolean('disabled', false)}
                outlined={boolean('outlined', true)}
                variant={variant}
                onClick={action('button-outlined-clicked-' + variant)}
              />
            );
          })}
      </Flex>
    </Flex>
  ))
  .add('Sizes', () => (
    <Flex gap="small">
      <Button
        label="small"
        disabled={boolean('disabled', false)}
        onClick={action('button-small-clicked')}
        size="small"
        variant="secondary"
      />
      <Button
        label="Medium"
        disabled={boolean('disabled', false)}
        onClick={action('button-medium-clicked')}
        variant="secondary"
      />
      <Button
        label="Large"
        disabled={boolean('disabled', false)}
        onClick={action('button-large-clicked')}
        size="large"
        variant="secondary"
      />
    </Flex>
  ));
storiesOf('Controls|Button/Group', module)
  .add('Default', () => (
    <ButtonGroup>
      <Button
        label="Save"
        disabled={boolean('disabled', false)}
        onClick={action('button-large-clicked')}
        variant="success"
        icon="fas fa-save"
      />
      <Button
        label="Edit"
        disabled={boolean('disabled', false)}
        onClick={action('button-large-clicked')}
        variant="warning"
        icon="fas fa-edit"
      />
      <Button
        label="Delete"
        disabled={boolean('disabled', false)}
        onClick={action('button-large-clicked')}
        variant="danger"
        icon="fas fa-trash"
      />
    </ButtonGroup>
  ))
  .add('Vertical', () => (
    <ButtonGroup vertical={boolean('Vertical', true)}>
      <Button
        label="Save"
        disabled={boolean('disabled', false)}
        onClick={action('button-large-clicked')}
        variant="success"
        icon="fas fa-save"
      />
      <Button
        label="Edit"
        disabled={boolean('disabled', false)}
        onClick={action('button-large-clicked')}
        variant="warning"
        icon="fas fa-edit"
      />
      <Button
        label="Delete"
        disabled={boolean('disabled', false)}
        onClick={action('button-large-clicked')}
        variant="danger"
        icon="fas fa-trash"
      />
    </ButtonGroup>
  ));
storiesOf('Controls|Button/SplitButton', module).add('Default', () => (
  <SplitButton
    label="Save & Close"
    icon="fa-save"
    onClick={action('main_clicked')}
    size={select('Size', ['small', 'medium', 'large'], 'medium')}
    mainButton={{ variant: select('Main Variant', variants, 'primary') }}
    splitButton={{ variant: select('Split Variant', variants, 'primary') }}
  >
    <SplitButtonAction onClick={action('hello')} label="Hello" />
    <SplitButtonAction onClick={action('hello1')} label="Hello1" />
    <SplitButtonAction onClick={action('hello2')} label="Hello2" />
  </SplitButton>
));
