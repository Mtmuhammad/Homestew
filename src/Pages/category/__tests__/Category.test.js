import React from "react";
import { render, screen } from "@testing-library/react";
import Category from "../Category/Category";
import {BrowserRouter } from "react-router-dom"

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
   render(<Category category={"spanish"} />, {wrapper: BrowserRouter});
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<Category category={"spanish"} />, {wrapper: BrowserRouter});
    expect(asFragment()).toMatchSnapshot();
  });
});

test("should render heading", () => {
   render(<Category category={"spanish"} />, {wrapper: BrowserRouter});
   const heading = screen.getByRole("heading", { name: /spanish recipes/i})
   expect(heading).toBeInTheDocument()
   expect(heading).toHaveClass("tertiary")
})