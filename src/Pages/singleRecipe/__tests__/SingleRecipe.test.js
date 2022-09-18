import React from "react";
import { render } from "@testing-library/react";
import SingleRecipe from "../SingleRecipe";
import { BrowserRouter } from "react-router-dom";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(<SingleRecipe />, { wrapper: BrowserRouter });
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<SingleRecipe />, { wrapper: BrowserRouter });
    expect(asFragment()).toMatchSnapshot();
  });
});
