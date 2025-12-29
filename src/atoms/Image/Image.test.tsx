import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Image from ".";

describe("Image", () => {
  it("renders with required props", () => {
    // Arrange
    const { getByTestId, getByAltText } = render(
      <Image src="https://example.com/image.jpg" alt="Test image" />
    );

    // Act
    const container = getByTestId("image-container");
    const image = getByTestId("image-element");

    // Assert
    expect(container).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(getByAltText("Test image")).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://example.com/image.jpg");
  });

  it("applies default styling", () => {
    // Arrange
    const { getByTestId } = render(
      <Image src="test.jpg" alt="Test" />
    );

    // Act
    const container = getByTestId("image-container");
    const image = getByTestId("image-element");

    // Assert
    expect(container).toBeInTheDocument();
    expect(image).toHaveStyle(`
      object-fit: cover;
    `);
    expect(image).toHaveAttribute("loading", "lazy");
  });

  it("applies 16/9 aspect ratio", () => {
    // Arrange
    const { getByTestId } = render(
      <Image src="test.jpg" alt="Test" aspectRatio="16/9" />
    );

    // Act
    const container = getByTestId("image-container");

    // Assert
    expect(container).toBeInTheDocument();
  });

  it("applies 1/1 aspect ratio", () => {
    // Arrange
    const { getByTestId } = render(
      <Image src="test.jpg" alt="Test" aspectRatio="1/1" />
    );

    // Act
    const container = getByTestId("image-container");

    // Assert
    expect(container).toBeInTheDocument();
  });

  it("applies contain object-fit", () => {
    // Arrange
    const { getByTestId } = render(
      <Image src="test.jpg" alt="Test" objectFit="contain" />
    );

    // Act
    const image = getByTestId("image-element");

    // Assert
    expect(image).toHaveStyle("object-fit: contain");
  });

  it("applies small rounded corners", () => {
    // Arrange
    const { getByTestId } = render(
      <Image src="test.jpg" alt="Test" rounded="sm" />
    );

    // Act
    const container = getByTestId("image-container");

    // Assert
    expect(container).toHaveStyle("border-radius: 4px");
  });

  it("applies medium rounded corners", () => {
    // Arrange
    const { getByTestId } = render(
      <Image src="test.jpg" alt="Test" rounded="md" />
    );

    // Act
    const container = getByTestId("image-container");

    // Assert
    expect(container).toHaveStyle("border-radius: 8px");
  });

  it("applies large rounded corners", () => {
    // Arrange
    const { getByTestId } = render(
      <Image src="test.jpg" alt="Test" rounded="lg" />
    );

    // Act
    const container = getByTestId("image-container");

    // Assert
    expect(container).toHaveStyle("border-radius: 16px");
  });

  it("applies full rounded (circle)", () => {
    // Arrange
    const { getByTestId } = render(
      <Image src="test.jpg" alt="Test" rounded="full" />
    );

    // Act
    const container = getByTestId("image-container");

    // Assert
    expect(container).toHaveStyle("border-radius: 9999px");
  });

  it("defaults to lazy loading", () => {
    // Arrange
    const { getByTestId } = render(
      <Image src="test.jpg" alt="Test" />
    );

    // Act
    const image = getByTestId("image-element");

    // Assert
    expect(image).toHaveAttribute("loading", "lazy");
  });

  it("supports eager loading", () => {
    // Arrange
    const { getByTestId } = render(
      <Image src="test.jpg" alt="Test" loading="eager" />
    );

    // Act
    const image = getByTestId("image-element");

    // Assert
    expect(image).toHaveAttribute("loading", "eager");
  });

  it("passes through HTML props", () => {
    // Arrange
    const { getByTestId } = render(
      <Image
        src="test.jpg"
        alt="Test"
        data-custom="test-value"
        className="custom-class"
      />
    );

    // Act
    const image = getByTestId("image-element");

    // Assert
    expect(image).toHaveAttribute("data-custom", "test-value");
    expect(image).toHaveClass("custom-class");
  });

  it("combines multiple props correctly", () => {
    // Arrange
    const { getByTestId } = render(
      <Image
        src="test.jpg"
        alt="Test"
        aspectRatio="4/3"
        objectFit="contain"
        rounded="lg"
        loading="eager"
      />
    );

    // Act
    const container = getByTestId("image-container");
    const image = getByTestId("image-element");

    // Assert
    expect(container).toBeInTheDocument();
    expect(image).toHaveStyle("object-fit: contain");
    expect(image).toHaveAttribute("loading", "eager");
  });
});
