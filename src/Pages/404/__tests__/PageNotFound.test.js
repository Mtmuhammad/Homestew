import React from "react";
import { render, screen } from "@testing-library/react";
import PageNotFound from "../PageNotFound";
import {BrowserRouter} from "react-router-dom"

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(<PageNotFound />, {wrapper: BrowserRouter});
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<PageNotFound />, {wrapper: BrowserRouter});
    expect(asFragment()).toMatchSnapshot();
  });
});

test("should render h3", () => {
  render(<PageNotFound />, {wrapper: BrowserRouter});
  const heading = screen.getByRole("heading", {
    name: /oops! page not found/i,
  });
  expect(heading).toBeInTheDocument();
});

test("should render h2", () => {
  render(<PageNotFound />, {wrapper: BrowserRouter});
  const heading = screen.getByRole("heading", {
    name: /we are sorry, but the page you requested was not found/i,
  });
  expect(heading).toBeInTheDocument();
});

test("should render spans", () => {
  render(<PageNotFound />, {wrapper: BrowserRouter});
  const spans = screen.getAllByTestId("span");
  expect(spans.length).toBe(3);
});
