import React from "react";
import { render } from "@testing-library/react";
import RecipeCategory from "../RecipeCategory";
import { BrowserRouter } from "react-router-dom";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(<RecipeCategory />, {
      wrapper: BrowserRouter,
    });
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<RecipeCategory />, {
      wrapper: BrowserRouter,
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
