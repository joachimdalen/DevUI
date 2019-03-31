import React from "react";

import { storiesOf } from "@storybook/react";
import { Card } from "./Card";
import { CardBody } from "./CardBody";
import { CardHeader } from "./CardHeader";
import { CardFooter } from "./CardFooter";
import { CardImage } from "./CardImage";

storiesOf("Components/Card", module)
  .add("Basic Card", () => (
    <Card width={200}>
      <CardBody>
        <label htmlFor="">Hello</label>
      </CardBody>
    </Card>
  ))
  .add("Card with Header", () => (
    <Card width={200}>
      <CardHeader title="Some fruit" />
      <CardBody>
        <label htmlFor="">Hello</label>
      </CardBody>
    </Card>
  ))
  .add("Card with Footer", () => (
    <Card width={200}>
      <CardBody>
        <label htmlFor="">Hello</label>
      </CardBody>
      <CardFooter>H</CardFooter>
    </Card>
  ))
  .add("Header & Footer", () => (
    <Card width={200}>
      <CardHeader title="Some fruit" />
      <CardBody>
        <label htmlFor="">Hello</label>
      </CardBody>
      <CardFooter>H</CardFooter>
    </Card>
  ))
  .add("Top image", () => (
    <Card image="http://placehold.it/200x100" imagePlacement="top" width={200}>
      <CardHeader title="Some fruit" />
      <CardBody>
        <label htmlFor="">Hello</label>
      </CardBody>
      <CardFooter>H</CardFooter>
    </Card>
  ))
  .add("Left image", () => (
    <Card
      image={"http://placehold.it/100x150"}
      imagePlacement="left"
      width={200}
    >
      <CardHeader title="Some fruit" />
      <CardBody>
        <label htmlFor="">Hello</label>
      </CardBody>
      <CardFooter>H</CardFooter>
    </Card>
  ));
