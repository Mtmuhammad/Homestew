import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "../NavBar/Navbar";
import { BrowserRouter } from "react-router-dom";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });

  test("should match snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("render navbar brands", () => {
  test("should render main logo", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const mainLogo = screen.getByAltText(/homestew logo/i);
    expect(mainLogo).toBeInTheDocument();
    expect(mainLogo).toHaveClass("logo");
  });

  test("should render alternate logo on mobile", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const altLogo = screen.getByAltText(/homestew alt logo/i);
    expect(altLogo).toBeInTheDocument();
    expect(altLogo).toHaveClass("logo-alt");
  });
});

describe("navbar links", () => {
  test("should render home page link", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const homeLink = screen.getByText(/home/i);
    expect(homeLink).toHaveAttribute("href", "/");
  });
  test("should render about page link", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const aboutLink = screen.getByText(/about/i);
    expect(aboutLink).toHaveAttribute("href", "/about");
  });
  test("should render recipes page link", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const recipeLink = screen.getByText(/recipes/i);
    expect(recipeLink).toHaveAttribute("href", "/search");
  });
  test("should render diet page link", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const dietLink = screen.getByText(/diets/i);
    expect(dietLink).toHaveAttribute("href", "/diets");
  });
  test("should render blog page link", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const blogLink = screen.getByText(/blog/i);
    expect(blogLink).toHaveAttribute("href", "/blog");
  });
  test("should render contact page link", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const contactLink = screen.getByText(/contact/i);
    expect(contactLink).toHaveAttribute("href", "/contact");
  });
});

describe("should close navbar onclick", () => {
  test("home", () => {
    const handleCollapse = jest.fn();
    render(
      <BrowserRouter>
        <Navbar handleCollapse={handleCollapse} />
      </BrowserRouter>
    );
    window.innerWidth = 500;
    const homeLink = screen.getByText(/home/i);
    fireEvent.click(homeLink);
  });
  test("about", () => {
    const handleCollapse = jest.fn();
    render(
      <BrowserRouter>
        <Navbar handleCollapse={handleCollapse} />
      </BrowserRouter>
    );
    window.innerWidth = 500;
    const aboutLink = screen.getByText(/about/i);
    fireEvent.click(aboutLink);
  });
  test("recipes", () => {
    const handleCollapse = jest.fn();
    render(
      <BrowserRouter>
        <Navbar handleCollapse={handleCollapse} />
      </BrowserRouter>
    );
    window.innerWidth = 500;
    const recipesLink = screen.getByText(/recipes/i);
    fireEvent.click(recipesLink);
  });
  test("diets", () => {
    const handleCollapse = jest.fn();
    render(
      <BrowserRouter>
        <Navbar handleCollapse={handleCollapse} />
      </BrowserRouter>
    );
    window.innerWidth = 500;
    const dietsLink = screen.getByText(/diets/i);
    fireEvent.click(dietsLink);
  });
  test("blog", () => {
    const handleCollapse = jest.fn();
    render(
      <BrowserRouter>
        <Navbar handleCollapse={handleCollapse} />
      </BrowserRouter>
    );
    window.innerWidth = 500;
    const blogLink = screen.getByText(/blog/i);
    fireEvent.click(blogLink);
  });
  test("contact", () => {
    const handleCollapse = jest.fn();
    render(
      <BrowserRouter>
        <Navbar handleCollapse={handleCollapse} />
      </BrowserRouter>
    );
    window.innerWidth = 500;
    const contactLink = screen.getByText(/contact/i);
    fireEvent.click(contactLink);
  });
});
