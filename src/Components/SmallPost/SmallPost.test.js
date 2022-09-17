import React from "react";
import { render, screen } from "@testing-library/react";
import SmallPost from "./SmallPost";
import { BrowserRouter } from "react-router-dom";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(
      <BrowserRouter>
        <SmallPost />
      </BrowserRouter>
    );
  });

  test("should match snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <SmallPost />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("should render with props", () => {
  test("should render content", () => {
    render(
      <BrowserRouter>
        <SmallPost
          id={123}
          title={"Chicken Burgers"}
          image={"chickenBurgers.jpg"}
        />
      </BrowserRouter>
    );
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
    expect(article).toHaveClass("small-post");

    const img = screen.getByAltText(/chicken burgers/i);
    expect(img).toBeInTheDocument();

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("quaternary");
  });
});
