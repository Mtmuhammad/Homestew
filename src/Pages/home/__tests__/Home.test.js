import React from "react";
import { render } from "@testing-library/react";
import Home from "../Home";
import { BrowserRouter } from "react-router-dom"

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(<Home />, {wrapper: BrowserRouter});
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<Home />, {wrapper: BrowserRouter});
    expect(asFragment()).toMatchSnapshot();
  });
});
