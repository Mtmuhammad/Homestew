import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("smoke and snapshot tests", () => {
  test("should render App without crashing", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  test("should match snapshot", async () => {
    const { asFragment } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(await asFragment()).toMatchSnapshot();
  });
});

// test("should render home component on initial render", async () => {
//   render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
//   const homeComponent = screen.getByTestId("home");
//   expect(homeComponent).toBeInTheDocument();
// });
