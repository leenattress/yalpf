import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Spacer from "./index";

describe("Spacer", () => {
  it("renders with default size", () => {
    // Arrange
    const { getByTestId } = render(<Spacer />);

    // Act
    const spacer = getByTestId("spacer");

    // Assert
    expect(spacer).toBeInTheDocument();
    expect(spacer).toHaveStyle("height: 24px");
  });

  it("applies xs size correctly", () => {
    // Arrange
    const { getByTestId } = render(<Spacer size="xs" />);

    // Act
    const spacer = getByTestId("spacer");

    // Assert
    expect(spacer).toHaveStyle("height: 8px");
  });

  it("applies sm size correctly", () => {
    // Arrange
    const { getByTestId } = render(<Spacer size="sm" />);

    // Act
    const spacer = getByTestId("spacer");

    // Assert
    expect(spacer).toHaveStyle("height: 16px");
  });

  it("applies md size correctly", () => {
    // Arrange
    const { getByTestId } = render(<Spacer size="md" />);

    // Act
    const spacer = getByTestId("spacer");

    // Assert
    expect(spacer).toHaveStyle("height: 24px");
  });

  it("applies lg size correctly", () => {
    // Arrange
    const { getByTestId } = render(<Spacer size="lg" />);

    // Act
    const spacer = getByTestId("spacer");

    // Assert
    expect(spacer).toHaveStyle("height: 32px");
  });

  it("applies xl size correctly", () => {
    // Arrange
    const { getByTestId } = render(<Spacer size="xl" />);

    // Act
    const spacer = getByTestId("spacer");

    // Assert
    expect(spacer).toHaveStyle("height: 48px");
  });

  it("applies 2xl size correctly", () => {
    // Arrange
    const { getByTestId } = render(<Spacer size="2xl" />);

    // Act
    const spacer = getByTestId("spacer");

    // Assert
    expect(spacer).toHaveStyle("height: 64px");
  });

  it("applies 3xl size correctly", () => {
    // Arrange
    const { getByTestId } = render(<Spacer size="3xl" />);

    // Act
    const spacer = getByTestId("spacer");

    // Assert
    expect(spacer).toHaveStyle("height: 96px");
  });

  it("applies correct default styling", () => {
    // Arrange
    const { getByTestId } = render(<Spacer />);

    // Act
    const spacer = getByTestId("spacer");

    // Assert
    expect(spacer).toHaveStyle(`
      width: 100%;
    `);
  });

  it("passes through HTML props", () => {
    // Arrange
    const { getByTestId } = render(
      <Spacer id="custom-spacer" className="custom-class" />
    );

    // Act
    const spacer = getByTestId("spacer");

    // Assert
    expect(spacer).toHaveAttribute("id", "custom-spacer");
    expect(spacer).toHaveClass("custom-class");
  });
});
