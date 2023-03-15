import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DeleteCart from "./DeleteCart";

describe("delete cart", () => {
  it("delete modal render", () => {
    render(<DeleteCart cartId={0} />);
    expect(
      screen.getByText("You really want delete this cart?")
    ).toBeInTheDocument();
  });
});
