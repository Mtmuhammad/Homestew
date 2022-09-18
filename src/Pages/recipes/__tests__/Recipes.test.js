import React from "react";
import { render } from "@testing-library/react";
import Recipes from "../Recipes";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(<Recipes />);
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<Recipes />);
    expect(asFragment()).toMatchSnapshot();
  });
});
