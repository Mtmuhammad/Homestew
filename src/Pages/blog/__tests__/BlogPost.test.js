import React from "react";
import { render, screen } from "@testing-library/react";
import BlogPost from "../BlogPost/BlogPost";

describe("smoke and snapshot tests", () => {
  test("should render without crashing", () => {
    render(
      <BlogPost
            title={"How to Properly Cut and Prep Your Vegetables"}
            author={"Mike Jones"}
            likes={14}
            comments={26}
            date={"Jan 11, 2022"}
            img={"Blog1.jpg"}
          />
    );
  });

  test("should match snapshot", () => {
    const { asFragment } = render(
      <BlogPost
            title={"How to Properly Cut and Prep Your Vegetables"}
            author={"Mike Jones"}
            likes={14}
            comments={26}
            date={"Jan 11, 2022"}
            img={"Blog1.jpg"}
          />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});



test("should render img", () => {
   render(
      <BlogPost
      title={"How to Properly Cut and Prep Your Vegetables"}
      author={"Mike Jones"}
      likes={14}
      comments={26}
      date={"Jan 11, 2022"}
      img={"Blog1.jpg"}
    />
   );
 
   const img = screen.getByAltText(/How to Properly Cut and Prep Your Vegetables/i);
   expect(img).toBeInTheDocument();
   expect(img).toHaveClass("img-fluid");
 });
 
 
 test("should render heading", () => {
   render(
      <BlogPost
      title={"How to Properly Cut and Prep Your Vegetables"}
      author={"Mike Jones"}
      likes={14}
      comments={26}
      date={"Jan 11, 2022"}
      img={"Blog1.jpg"}
    />
   );
 
   const category = screen.getByRole("heading");
   expect(category).toBeInTheDocument();
   expect(category).toHaveTextContent(/How to Properly Cut and Prep Your Vegetables/i);
 });
 