import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import CreateCart from "./CreateCart";

describe("create new cart", () => {
  it("cart modal render", () => {
    render(<CreateCart />);
    expect(
      screen.getByText("How many products do you need in the cart?")
    ).toBeInTheDocument();
    expect(screen.getByTestId("product-value-input")).toBeInTheDocument();
  });
  it("create modal button clicked", () => {
    render(<CreateCart />);
    expect(screen.getByText("Create")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    userEvent.click(screen.getByText("Create"));
  });
});
