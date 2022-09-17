import React from "react";
import { render } from "@testing-library/react";
import Blog from "../Blog";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(<Blog />);
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<Blog />);
    expect(asFragment()).toMatchSnapshot();
  });
});
