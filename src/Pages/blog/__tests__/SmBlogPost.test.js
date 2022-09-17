import React from "react";
import { render, screen } from "@testing-library/react";
import SmBlogPost from "../SmBlogPost/SmBlogPost";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(
      <SmBlogPost
        category={"travel"}
        img={"Sm1.jpg"}
        title={"The Travelers Guide for Foodies"}
      />
    );
  });

  test("should match snapshot", () => {
    const { asFragment } = render(
      <SmBlogPost
        category={"travel"}
        img={"Sm1.jpg"}
        title={"The Travelers Guide for Foodies"}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

test("should render img", () => {
  render(
    <SmBlogPost
      category={"travel"}
      img={"Sm1.jpg"}
      title={"The Travelers Guide for Foodies"}
    />
  );

  const img = screen.getByAltText(/the travelers guide for foodies/i);
  expect(img).toBeInTheDocument();
  expect(img).toHaveClass("img-fluid");
});

test("should render category", () => {
  render(
    <SmBlogPost
      category={"travel"}
      img={"Sm1.jpg"}
      title={"The Travelers Guide for Foodies"}
    />
  );

  const category = screen.getByRole("paragraph");
  expect(category).toBeInTheDocument();
  expect(category).toHaveTextContent(/travel/i);
});

test("should render heading", () => {
  render(
    <SmBlogPost
      category={"travel"}
      img={"Sm1.jpg"}
      title={"The Travelers Guide for Foodies"}
    />
  );

  const category = screen.getByRole("heading");
  expect(category).toBeInTheDocument();
  expect(category).toHaveTextContent(/the travelers guide for foodies/i);
});
