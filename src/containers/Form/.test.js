import React from "react";
import { render } from "@testing-library/react";
import Form from "./";

it("renders correctly", () => {
  const { queryByTestId } = render(<Form />);

  expect(queryByTestId("form")).toBeTruthy();
});
