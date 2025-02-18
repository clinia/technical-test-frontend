import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./index";
import { describe, it, expect } from "vitest";

describe("HomePage", () => {
  it("renders properly without name", () => {
    const { getByText } = render(<HomePage />);
    expect(getByText("Hello World")).toBeInTheDocument();
  });

  it("renders properly with name", () => {
    const { getByText } = render(<HomePage name="Alice" />);
    expect(getByText("Hello World Alice")).toBeInTheDocument();
  });
});
