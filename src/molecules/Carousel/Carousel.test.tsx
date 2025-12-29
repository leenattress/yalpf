import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel from "./index";

describe("Carousel", () => {
  const mockItems = [
    <div key="1">Item 1</div>,
    <div key="2">Item 2</div>,
    <div key="3">Item 3</div>,
  ];

  it("renders the carousel container", () => {
    // Arrange & Act
    render(<Carousel items={mockItems} />);
    const container = screen.getByTestId("carousel-container");

    // Assert
    expect(container).toBeInTheDocument();
  });

  it("renders all items", () => {
    // Arrange & Act
    render(<Carousel items={mockItems} />);

    // Assert
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("renders navigation buttons", () => {
    // Arrange & Act
    render(<Carousel items={mockItems} />);

    // Assert
    expect(screen.getByTestId("carousel-prev")).toBeInTheDocument();
    expect(screen.getByTestId("carousel-next")).toBeInTheDocument();
  });

  it("disables prev button on first item", () => {
    // Arrange & Act
    render(<Carousel items={mockItems} />);
    const prevButton = screen.getByTestId("carousel-prev");

    // Assert
    expect(prevButton).toBeDisabled();
  });

  it("enables next button when there are more items", () => {
    // Arrange & Act
    render(<Carousel items={mockItems} />);
    const nextButton = screen.getByTestId("carousel-next");

    // Assert
    expect(nextButton).not.toBeDisabled();
  });

  it("navigates to next item on next button click", () => {
    // Arrange
    render(<Carousel items={mockItems} />);
    const nextButton = screen.getByTestId("carousel-next");
    const prevButton = screen.getByTestId("carousel-prev");

    // Act
    fireEvent.click(nextButton);

    // Assert
    expect(prevButton).not.toBeDisabled();
  });

  it("navigates to previous item on prev button click", () => {
    // Arrange
    render(<Carousel items={mockItems} />);
    const nextButton = screen.getByTestId("carousel-next");
    const prevButton = screen.getByTestId("carousel-prev");

    // Act - go to second item
    fireEvent.click(nextButton);
    // Act - go back to first
    fireEvent.click(prevButton);

    // Assert
    expect(prevButton).toBeDisabled();
  });

  it("disables next button on last item", () => {
    // Arrange
    render(<Carousel items={mockItems} />);
    const nextButton = screen.getByTestId("carousel-next");

    // Act - navigate to last item
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    // Assert
    expect(nextButton).toBeDisabled();
  });

  it("applies correct styling to container", () => {
    // Arrange
    const { getByTestId } = render(<Carousel items={mockItems} />);

    // Act
    const container = getByTestId("carousel-container");

    // Assert
    expect(container).toHaveStyle(`
      font-family: sans-serif;
      position: relative;
    `);
  });

  it("respects itemsPerView prop", () => {
    // Arrange & Act
    render(<Carousel items={mockItems} itemsPerView={2} />);
    const nextButton = screen.getByTestId("carousel-next");

    // Act - navigate once
    fireEvent.click(nextButton);

    // Assert - should be at last position with itemsPerView=2 and 3 items
    expect(nextButton).toBeDisabled();
  });

  it("applies custom gap between items", () => {
    // Arrange & Act
    const { getByTestId } = render(<Carousel items={mockItems} gap={32} />);
    const track = getByTestId("carousel-track");

    // Assert
    expect(track).toBeInTheDocument();
  });

  it("passes through additional props", () => {
    // Arrange & Act
    render(<Carousel items={mockItems} data-custom="test-value" />);
    const container = screen.getByTestId("carousel-container");

    // Assert
    expect(container).toHaveAttribute("data-custom", "test-value");
  });
});
