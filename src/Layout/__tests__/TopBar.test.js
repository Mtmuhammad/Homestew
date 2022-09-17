import React from "react";
import { render, screen } from "@testing-library/react";
import TopBar from "../TopBar/TopBar";
import {BrowserRouter } from "react-router-dom"

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(<TopBar />, {wrapper: BrowserRouter});
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<TopBar />, {wrapper: BrowserRouter});
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("render all link icons", () => {
  test("should render all social icons", () => {
    render(<TopBar />, {wrapper: BrowserRouter});
    const socialIcons = screen.getAllByTestId("social-icon");
    expect(socialIcons.length).toBe(6);

    const userIcons = screen.getAllByTestId("user-icon");
    expect(userIcons.length).toBe(1);
  });
});

