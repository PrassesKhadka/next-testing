import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />); //ARRANGE

    const heading = screen.getByRole("heading", {
      name: /Next.js Testing\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
