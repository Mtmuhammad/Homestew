import React from "react";
import { render} from "@testing-library/react";
import Cuisines from "../Cuisines/Cuisines";
import {BrowserRouter} from "react-router-dom"



describe("smoke and snapshot tests", () => {
  test("should render without crashing", async () => {
    render(<Cuisines />, {wrapper: BrowserRouter});
  });

  test("should match snapshot", async () => {
    const { asFragment } = render(<Cuisines />, {wrapper: BrowserRouter});
    expect(asFragment()).toMatchSnapshot();
  });
});

