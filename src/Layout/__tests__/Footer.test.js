import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer/Footer";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(<Footer />);
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("render footer", () => {
   test("should render footer avatar", () => {
      render(<Footer/>)
      const avatar = screen.getByAltText(/instagram avatar/i)
      expect(avatar).toBeInTheDocument()

      const avatarHeader = screen.getByRole("heading", {name: "@homestew"})
      expect(avatarHeader).toBeInTheDocument()
   })

   test("should render images", () => {
      render(<Footer/>)
      const images = screen.getAllByAltText(/instagram post/i)
      expect(images.length).toBe(6)
   })

   test("should render footer logo", () => {
      render(<Footer/>)
      const footerLogo = screen.getByAltText(/footer alt logo/i)
      expect(footerLogo).toBeInTheDocument()
      expect(footerLogo).toHaveClass("img-fluid")
   })

   test("should render social icons", () => {
      render(<Footer/>)
      const footerIcons = screen.getAllByTestId("footer-icon")
      expect(footerIcons.length).toBe(5)
   })
})