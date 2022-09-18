import React from "react";
import { render } from "@testing-library/react";
import RecipeType from "../RecipeType";
import { BrowserRouter } from "react-router-dom";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(<RecipeType />, { wrapper: BrowserRouter });
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<RecipeType />, { wrapper: BrowserRouter });
    expect(asFragment()).toMatchSnapshot();
  });
});
