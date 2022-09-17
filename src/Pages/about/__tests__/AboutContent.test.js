import React from "react";
import { render, screen } from "@testing-library/react";
import AboutContent from "../AboutContent/AboutContent";
import {BrowserRouter} from "react-router-dom"
describe("smoke and snapshot tests", () => {
  test("should render without crashing", async () => {
    render(<AboutContent />, {wrapper: BrowserRouter});
  });

  test("should match snapshot", async () => {
    const { asFragment } = render(<AboutContent />, {wrapper: BrowserRouter});
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("should render headings", () => {
  test("should render text heading", () => {
    render(<AboutContent />, {wrapper: BrowserRouter});
    const heading = screen.getByRole("heading", { name: /what are we about/i });
    expect(heading).toBeInTheDocument();
  });
  test("should render list heading", () => {
    render(<AboutContent />, {wrapper: BrowserRouter});
    const heading = screen.getByRole("heading", {
      name: /improve your culinary skills/i,
    });
    expect(heading).toBeInTheDocument();
  });
});

test("should render explore button", () => {
  render(<AboutContent />, {wrapper: BrowserRouter});
  const btn = screen.getByRole("link");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent(/explore now/i);
});

describe("should render images", () => {
  test("should render text images", () => {
    render(<AboutContent />, {wrapper: BrowserRouter});
    const images = screen.getAllByAltText("About");
    expect(images.length).toBe(9);
    expect(images[0]).toHaveClass("img-fluid");
  });
  test("should render list image", () => {
    render(<AboutContent />, {wrapper: BrowserRouter});
    const image = screen.getByAltText("Sushi");
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass("img-fluid");
  });
});

test("should render list", () => {
  render(<AboutContent />, {wrapper: BrowserRouter});
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(6);
});
