import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header/Header";
import {BrowserRouter} from "react-router-dom"


describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(<Header /> , {wrapper: BrowserRouter});
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<Header />, {wrapper: BrowserRouter});
    expect(asFragment()).toMatchSnapshot();
  });
});

test("should render h1", () => {
  render(<Header />, {wrapper: BrowserRouter});
  const heading = screen.getByRole("heading", { name: /featured recipes/i });
  expect(heading).toBeInTheDocument();
});

test("should render images", () => {
  render(<Header />, {wrapper: BrowserRouter});
  const images = screen.getAllByRole("img");
  expect(images.length).toBe(3);
  expect(images[0]).toHaveClass("img-fluid");
  expect(images[1]).toHaveClass("img-fluid");
  expect(images[2]).toHaveClass("img-fluid");
});
