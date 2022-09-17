import React from "react";
import { render } from "@testing-library/react";
import Diets from "../Diets";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(<Diets />);
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<Diets />);
    expect(asFragment()).toMatchSnapshot();
  });
});
