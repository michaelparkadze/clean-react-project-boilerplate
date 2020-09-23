import React from "react";
import { render } from "@testing-library/react";
import Button from "./";

it("renders correctly", () => {
  const { queryByTestId } = render(<Button />);

  expect(queryByTestId("button")).toBeTruthy();
});
