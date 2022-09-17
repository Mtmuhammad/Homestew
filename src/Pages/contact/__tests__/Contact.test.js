import React from "react";
import { render } from "@testing-library/react";
import Contact from "../Contact";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(<Contact />);
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});
