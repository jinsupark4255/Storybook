import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../Button";
import { BUTTON_SIZE, BUTTON_VARIANT } from "./constants";

describe("Button", () => {
  it("renders the button with given label", () => {
    render(<Button label="Submit" />);
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button", { name: "Click Me" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    render(<Button label="Disabled" onClick={handleClick} disabled />);
    fireEvent.click(screen.getByRole("button", { name: "Disabled" }));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('shows "Loading..." text when loading is true', () => {
    render(<Button label="Submit" loading />);
    expect(
      screen.getByRole("button", { name: "Loading..." })
    ).toBeInTheDocument();
  });

  it("disables button when loading is true", () => {
    render(<Button label="Submit" loading />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies fullWidth class when fullWidth is true", () => {
    render(<Button label="Wide Button" fullWidth />);
    const button = screen.getByRole("button", { name: "Wide Button" });
    expect(button).toHaveClass("w-full");
  });

  it("applies correct variant class", () => {
    render(<Button label="Danger" variant={BUTTON_VARIANT.danger} />);
    const button = screen.getByRole("button", { name: "Danger" });
    expect(button.className).toContain("bg-red-600");
  });

  it("applies correct size class", () => {
    render(<Button label="Small Button" size={BUTTON_SIZE.small} />);
    const button = screen.getByRole("button", { name: "Small Button" });
    expect(button.className).toContain("text-sm");
  });
});
