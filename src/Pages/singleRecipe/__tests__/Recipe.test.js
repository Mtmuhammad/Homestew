import React from "react";
import { render, screen } from "@testing-library/react";
import Recipe from "../Recipe/Recipe";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(<Recipe id={663559}/>);
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<Recipe id={663559}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

test("should render img", ()=> {
   render(<Recipe id={663559}/>)
   const img = screen.getByRole("img")
   expect(img).toBeInTheDocument()
   expect(img).toHaveClass("img-fluid", "single-recipe-img")
})


