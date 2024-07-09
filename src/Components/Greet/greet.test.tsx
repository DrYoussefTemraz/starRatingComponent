// TDD (Test Driven Development)
// render the comoponent greet and check if it renders Hello followed by the name
import React from "react";

import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";
test("greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("greet renders with a name passed", () => {
  render(<Greet name="Joe" />);
  const textElement = screen.getByText("Hello Joe");
  expect(textElement).toBeInTheDocument();
});
