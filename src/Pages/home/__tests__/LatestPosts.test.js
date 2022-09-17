import React from "react";
import { render, screen } from "@testing-library/react";
import LatestPosts from "../LatestPosts/LatestPosts";
import { BrowserRouter } from "react-router-dom";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(
      <BrowserRouter>
        <LatestPosts />
      </BrowserRouter>
    );
  });

  test("should match snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <LatestPosts />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

test("should render h2", () => {
  render(
    <BrowserRouter>
      <LatestPosts />
    </BrowserRouter>
  );
  const heading = screen.getByRole("heading", { name: /latest recipes/i });
  expect(heading).toBeInTheDocument();
});

test("should render all articles", () => {
  render(
    <BrowserRouter>
      <LatestPosts />
    </BrowserRouter>
  );
  const articles = screen.getAllByRole("article");
  expect(articles.length).toBe(6);
  expect(articles[0]).toHaveClass("post");
  expect(articles[1]).toHaveClass("post");
  expect(articles[2]).toHaveClass("post");
  expect(articles[3]).toHaveClass("post");
  expect(articles[4]).toHaveClass("post");
  expect(articles[5]).toHaveClass("post");
});

describe("render images", () => {
  test("should render all images", () => {
    render(
      <BrowserRouter>
        <LatestPosts />
      </BrowserRouter>
    );
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(6);
    expect(screen.getByAltText(/tomato soup/i)).toBeInTheDocument();
    expect(
      screen.getByAltText(/crispy sweet sticky spicy wings/i)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(/black bean and veggie burgers with corn salsa/i)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(/chicken and miso ramen noodle soup/i)
    ).toBeInTheDocument();
    expect(screen.getByAltText(/chocolate chip cookies/i)).toBeInTheDocument();
    expect(screen.getByAltText(/shrimp fried rice/i)).toBeInTheDocument();
  });
});
