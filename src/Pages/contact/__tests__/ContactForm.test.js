import React from "react";
import { render, screen } from "@testing-library/react";
import ContactForm from "../ContactForm/ContactForm";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", async () => {
    render(<ContactForm />);
  });

  test("should match snapshot", async () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test("should render heading", () => {
  render(<ContactForm />);
  const heading = screen.getByRole("heading", { name: /contact us/i });
  expect(heading).toBeInTheDocument();
});
