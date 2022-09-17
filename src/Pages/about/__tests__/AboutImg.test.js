import React from "react";
import { render, screen } from "@testing-library/react";
import AboutImg from "../AboutImg/AboutImg";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", async () => {
    render(<AboutImg img={"About1.jpg"} />);
  });

  test("should match snapshot", async () => {
    const { asFragment } = render(<AboutImg img={"About1.jpg"} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test("should render an image", () => {
  render(<AboutImg img={"About1.jpg"} />);
  const img = screen.getByAltText(/about/i);
  expect(img).toBeInTheDocument();
  expect(img).toHaveClass("img-fluid", "about-img");
});
