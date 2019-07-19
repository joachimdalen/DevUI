import React from 'react';
import { Badge } from './Badge';
import renderer from 'react-test-renderer';

describe('Badge', () => {
    test('Badge renderes', () => {
        const component = renderer.create(
            <Badge label="Hello" />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('Badge can be dismissed', () => {
        const onDismiss = jest.fn();

        const component = renderer.create(<Badge label="Hello" dismissible onDismiss={onDismiss}></Badge>)


        expect(onDismiss).toBeCalled();
    })
})