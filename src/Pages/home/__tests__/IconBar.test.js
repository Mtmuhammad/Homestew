import React from "react";
import { render, screen } from "@testing-library/react";
import IconBar from "../IconBar/IconBar";
import { BrowserRouter } from "react-router-dom";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(<IconBar />, { wrapper: BrowserRouter });
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<IconBar />, { wrapper: BrowserRouter });
    expect(asFragment()).toMatchSnapshot();
  });
});

test("should render h3", () => {
  render(<IconBar />, { wrapper: BrowserRouter });
  const heading = screen.getByRole("heading", { name: /explore recipes/i });
  expect(heading).toBeInTheDocument();
});

describe("icon containers with icons", () => {
  test("should render icon containers", () => {
    render(<IconBar />, { wrapper: BrowserRouter });
    const iconContainers = screen.getAllByTestId("icon-container");
    expect(iconContainers.length).toBe(4);
    expect(iconContainers[0]).toHaveClass("icon");
    expect(iconContainers[1]).toHaveClass("icon");
    expect(iconContainers[2]).toHaveClass("icon");
    expect(iconContainers[3]).toHaveClass("icon");
  });

  test("should render icon descriptions", () => {
    render(<IconBar />, { wrapper: BrowserRouter });
    expect(screen.getByText(/bread recipes/i)).toBeInTheDocument();
    expect(screen.getByText(/main course/i)).toBeInTheDocument();
    expect(screen.getByText(/side dishes/i)).toBeInTheDocument();
    expect(screen.getByText(/desserts/i)).toBeInTheDocument();
  });

  test("should render icons", () => {
    render(<IconBar />, { wrapper: BrowserRouter });
    const icons = screen.getAllByTestId("icon");
    expect(icons.length).toBe(4);
    expect(icons[0]).toHaveClass("fa-bread-slice");
    expect(icons[1]).toHaveClass("fa-drumstick-bite");
    expect(icons[2]).toHaveClass("fa-bowl-food");
    expect(icons[3]).toHaveClass("fa-cookie");
  });
});
