import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "../components/button";
import { Globalstyle } from "../components/styles";
import Header from "../components/navbar/header";
import Select from "../components/select";

storiesOf("Header", module).add("Navbar", () => <Header />);

storiesOf("Buttons", module)
  .add("Navy", () => <Button onClick={action("clicked")}>Button</Button>)
  .add("Gold", () => (
    <Button color="#0c2340" bgcolor="#daaa00">
      <span role="img" aria-label="so cool">
        Button
      </span>
    </Button>
  ));

const values = ["one", "two", "three", "🤙🏼"];

storiesOf("Inputs", module).add("Select", () => (
  <Select options={values} onChange={action("Selected")} />
));
