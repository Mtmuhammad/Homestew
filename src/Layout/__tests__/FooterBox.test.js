import React from "react";
import { render, screen } from "@testing-library/react";
import FooterBox from "../FooterBox/FooterBox";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(<FooterBox img={"Instagram.1jpg"}/>);
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<FooterBox img={"Instagram.1jpg"}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

test("should render img", () => {
   render(<FooterBox img={"Instagram.1jpg"}/>)
   const img = screen.getByAltText(/instagram post/i)
   expect(img).toBeInTheDocument()
   expect(img).toHaveClass("img-fluid")
})