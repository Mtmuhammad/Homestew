import React from "react";
import { render} from "@testing-library/react";
import About from "../About";
import {BrowserRouter} from "react-router-dom"

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(<About />, {wrapper: BrowserRouter});
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<About />, {wrapper: BrowserRouter});
    expect(asFragment()).toMatchSnapshot();
  });
});