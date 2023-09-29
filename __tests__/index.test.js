import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    // ARRANGE
    render(<Home />);

    // ACT
    const word = screen.getByText("Next.js testing");

    // ASSERT
    expect(word).toBeInTheDocument();
  });
});
