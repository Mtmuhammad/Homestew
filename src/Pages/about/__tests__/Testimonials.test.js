import React from "react";
import { render, screen } from "@testing-library/react";
import Testimonials from "../Testimonials/Testimonials";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", async () => {
    render(<Testimonials />);
  });

  test("should match snapshot", async () => {
    const { asFragment } = render(<Testimonials />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("should render heading", () => {
  test("should render main heading", () => {
    render(<Testimonials />);
    const heading = screen.getByRole("heading", { name: /testimonials/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("mb-4");
  });
});

test("should render images", () => {
  render(<Testimonials />);
  const images = screen.getAllByRole("img");
  expect(images.length).toBe(3);
  expect(images[0]).toHaveClass("rounded-circle", "shadow-1-strong");
});
