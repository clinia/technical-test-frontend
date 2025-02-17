import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./index";

describe("HomePage Component", () => {
  it("renders 'Hello World' with default name", () => {
    render(<HomePage />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("renders 'Hello World' with a provided name", () => {
    render(<HomePage name="Alice" />);
    expect(screen.getByText("Hello World Alice")).toBeInTheDocument();
  });
});
