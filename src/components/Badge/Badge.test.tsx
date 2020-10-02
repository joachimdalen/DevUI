import React from 'react';
import renderer from 'react-test-renderer';

import { Badge } from './Badge';

describe('Badge', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<Badge label="Hello" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('can be dismissed', () => {
    const onDismiss = jest.fn();

    const component = renderer.create(
      <Badge label="Hello" variant="primary" onDismiss={onDismiss} />
    );

    const dismissButton = component.root.findByProps({
      className: 'dui-badge-dismissible'
    });
    dismissButton.props.onClick();
    expect(onDismiss).toBeCalled();
  });
  it('has the correct label', () => {
    const label = 'Badge';
    const component = renderer.create(<Badge label={label} variant="primary" />);
    expect(component.root.findByType(Badge).props.label).toBe(label);
  });
});
