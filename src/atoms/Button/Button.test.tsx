import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from ".";

describe("Button", () => {
  it("renders with children text", () => {
    // Arrange & Act
    render(<Button>Click Me</Button>);
    const button = screen.getByTestId("button");

    // Assert
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
  });

  it("applies default variant and size styling", () => {
    // Arrange & Act
    render(<Button>Click Me</Button>);
    const button = screen.getByTestId("button");

    // Assert
    expect(button).toHaveStyle(`
      font-family: var(--font-family, sans-serif);
      font-weight: 600;
      border-radius: 6px;
      cursor: pointer;
    `);
  });

  it("renders primary variant with correct styles", () => {
    // Arrange & Act
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByTestId("button");

    // Assert
    expect(button).toHaveStyle(`
      background-color: #000;
      color: #fff;
    `);
  });

  it("renders secondary variant with correct styles", () => {
    // Arrange & Act
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByTestId("button");

    // Assert
    expect(button).toHaveStyle(`
      background-color: #f5f5f5;
      color: #333;
    `);
  });

  it("renders outline variant with correct styles", () => {
    // Arrange & Act
    render(<Button variant="outline">Outline</Button>);
    const button = screen.getByTestId("button");

    // Assert
    expect(button).toHaveStyle(`
      background-color: #f5f5f5;
      color: #333;
    `);
  });

  it("renders small size with correct dimensions", () => {
    // Arrange & Act
    render(<Button size="small">Small</Button>);
    const button = screen.getByTestId("button");

    // Assert
    expect(button).toHaveStyle(`
      font-size: 14px;
      padding: 8px 16px;
      min-height: 36px;
    `);
  });

  it("renders medium size with correct dimensions (default)", () => {
    // Arrange & Act
    render(<Button size="medium">Medium</Button>);
    const button = screen.getByTestId("button");

    // Assert
    expect(button).toHaveStyle(`
      font-size: 16px;
      padding: 12px 24px;
      min-height: 44px;
    `);
  });

  it("renders large size with correct dimensions", () => {
    // Arrange & Act
    render(<Button size="large">Large</Button>);
    const button = screen.getByTestId("button");

    // Assert
    expect(button).toHaveStyle(`
      font-size: 18px;
      padding: 16px 32px;
      min-height: 56px;
    `);
  });

  it("renders full width when fullWidth is true", () => {
    // Arrange & Act
    render(<Button fullWidth>Full Width</Button>);
    const button = screen.getByTestId("button");

    // Assert
    expect(button).toHaveStyle("width: 100%");
  });

  it("renders loading spinner when isLoading is true", () => {
    // Arrange & Act
    render(<Button isLoading>Loading</Button>);

    // Assert
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("disables button when isLoading is true", () => {
    // Arrange & Act
    render(<Button isLoading>Loading</Button>);
    const button = screen.getByTestId("button");

    // Assert
    expect(button).toBeDisabled();
  });

  it("disables button when disabled prop is true", () => {
    // Arrange & Act
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByTestId("button");

    // Assert
    expect(button).toBeDisabled();
    expect(button).toHaveStyle("opacity: 0.5");
  });

  it("renders icon before text when iconBefore is provided", () => {
    // Arrange & Act
    render(<Button iconBefore={<span>🚀</span>}>Launch</Button>);

    // Assert
    expect(screen.getByTestId("icon-before")).toBeInTheDocument();
    expect(screen.getByTestId("icon-before")).toHaveTextContent("🚀");
  });

  it("renders icon after text when iconAfter is provided", () => {
    // Arrange & Act
    render(<Button iconAfter={<span>→</span>}>Continue</Button>);

    // Assert
    expect(screen.getByTestId("icon-after")).toBeInTheDocument();
    expect(screen.getByTestId("icon-after")).toHaveTextContent("→");
  });

  it("hides icons when loading", () => {
    // Arrange & Act
    render(
      <Button isLoading iconBefore={<span>🚀</span>} iconAfter={<span>→</span>}>
        Loading
      </Button>
    );

    // Assert
    expect(screen.queryByTestId("icon-before")).not.toBeInTheDocument();
    expect(screen.queryByTestId("icon-after")).not.toBeInTheDocument();
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("accepts and applies custom HTML button props", () => {
    // Arrange & Act
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} type="submit" aria-label="Submit form">
        Submit
      </Button>
    );
    const button = screen.getByTestId("button");

    // Assert
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveAttribute("aria-label", "Submit form");
  });

  it("accepts custom className and style props", () => {
    // Arrange & Act
    render(
      <Button className="custom-class" style={{ marginTop: "20px" }}>
        Custom
      </Button>
    );
    const button = screen.getByTestId("button");

    // Assert
    expect(button).toHaveClass("custom-class");
    expect(button).toHaveStyle("margin-top: 20px");
  });
});
