import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBar from "../SearchBar/SearchBar";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(<SearchBar />);
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<SearchBar />);
    expect(asFragment()).toMatchSnapshot();
  });
});


test("should render input", () => {
  render(<SearchBar />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
  expect(input).toHaveClass("form-control");
});

test("should render button", () => {
  render(<SearchBar />);
  const button = screen.getByRole("button", { name: /search/i });
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("search-button");
});
