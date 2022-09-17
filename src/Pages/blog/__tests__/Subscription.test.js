import React from "react";
import { render, screen } from "@testing-library/react";
import Subscription from "../Subscription/Subscription";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(<Subscription />);
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<Subscription />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test("should render heading", () => {
  render(<Subscription />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(/Want to get weekly tips and tricks?/i);
});
test("should render paragraph", () => {
  render(<Subscription />);
  const paragraph = screen.getByRole("paragraph");
  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveTextContent(
    /Sign up and receive your first email guide!/i
  );
});

test("should render input", () => {
  render(<Subscription />);
  const input = screen.getByPlaceholderText(/your email/i);
  expect(input).toBeInTheDocument();
  expect(input).toHaveClass("mb-4");
});
