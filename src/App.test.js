import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  const { getByText } = render(<App />);

  const headerText = getByText(/email/i);
  expect(headerText).toBeVisibile();
});

test("test first name", () => {
  const { getByLabelText } = render(<App />);
  const head = getByLabelText(/first name/i);
  expect(head).toBeVisible();
});
