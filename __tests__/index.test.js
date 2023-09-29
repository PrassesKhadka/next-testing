import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
<<<<<<< HEAD
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    // ARRANGE
    render(<Home />);

    // ACT
    const word = screen.getByText("Next.js testing");

    // ASSERT
    expect(word).toBeInTheDocument();
=======

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />); //ARRANGE

    const heading = screen.getByRole("heading", {
      name: /Next.js Testing\.js!/i,
    });

    expect(heading).toBeInTheDocument();
>>>>>>> 7c81a88 (Setup complete and first test passed)
  });
});
