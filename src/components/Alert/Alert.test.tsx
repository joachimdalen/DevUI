import React from "react";
import renderer from "react-test-renderer";
import { FontAwesomeIcon } from "../FontAwesomeIcon/FontAwesomeIcon";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("matches snapshot", () => {
    const component = renderer.create(<Alert message="Hello" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("sets the correct details", () => {
    const component = renderer.create(
      <Alert message="Hello" description="HelloDescription" />
    );
    let alertMessage = component.root.findByType("h1");
    let alertDescription = component.root.findByType("p");

    expect(alertMessage.props.children).toBe("Hello");
    expect(alertDescription.props.children).toBe("HelloDescription");
  });
  it("can be closed", () => {
    const onClose = jest.fn();

    const component = renderer.create(
      <Alert message="Hello" onClose={onClose} />
    );

    let closeButton = component.root.findByProps({
      className: "dui-alert-close"
    });
    closeButton.props.onClick();
    expect(onClose).toBeCalled();
  });
  it("has the correct variant", () => {
    const component = renderer.create(
      <Alert message="hello" variant="success" />
    );
    expect(component.root.findAllByType("div")[0].props.className).toContain(
      "dui-alert-success"
    );
  });
  it("should show the default icon", () => {
    const component = renderer.create(
      <Alert message="hello" variant="success" withIcon />
    );
    expect(component.root.findAllByType("span")[0].props.className).toContain(
      "dui-alert-icon-container"
    );
  });
  it("should show the given icon", () => {
    const component = renderer.create(
      <Alert message="hello" variant="success" withIcon icon="times" />
    );
    const iconContainer = component.root.findAllByType("span")[0];
    expect(iconContainer).not.toBeUndefined();
    const icon = iconContainer.findAllByType(FontAwesomeIcon)[0];
    expect(icon).not.toBeUndefined();
    expect(icon.props.icon).toContain("fa-times");
  });
});
