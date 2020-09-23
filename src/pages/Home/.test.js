import React from "react";
import { render } from "@testing-library/react";
import Home from "./";

it("renders correctly", () => {
  const { queryByTestId } = render(<Home />);

  expect(queryByTestId("home-page")).toBeTruthy();
});
