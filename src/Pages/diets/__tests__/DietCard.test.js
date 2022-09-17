import React from "react";
import { render, screen } from "@testing-library/react";
import DietCard from "../DietCard/DietCard";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(<DietCard />);
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<DietCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test("should render img", () => {
  render(
    <DietCard
      title={"Ketogenic"}
      text={"this is a test text"}
      img={"ketogenic.jpg"}
    />
  );

  const img = screen.getByAltText(/ketogenic/i);
  expect(img).toBeInTheDocument();
  expect(img).toHaveClass("img-fluid");
});

test("should render heading", () => {
  render(
    <DietCard
      title={"Ketogenic"}
      text={"this is a test text"}
      img={"ketogenic.jpg"}
    />
  );
  const heading = screen.getByRole("heading", { name: /ketogenic/i });
  expect(heading).toBeInTheDocument();
});
