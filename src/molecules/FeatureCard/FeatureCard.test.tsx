import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import FeatureCard from ".";

describe("FeatureCard", () => {
  it("renders with all props", () => {
    // Arrange
    const { getByTestId, getByText } = render(
      <FeatureCard
        image={<span>🚀</span>}
        headline={<h3>Fast Performance</h3>}
        description={<p>Lightning-fast load times.</p>}
        cta={<a href="#">Learn more</a>}
      />
    );

    // Act
    const container = getByTestId("feature-card-container");
    const image = getByTestId("feature-card-image");
    const headline = getByTestId("feature-card-headline");
    const description = getByTestId("feature-card-description");
    const cta = getByTestId("feature-card-cta");

    // Assert
    expect(container).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(headline).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(cta).toBeInTheDocument();
    expect(getByText("Fast Performance")).toBeInTheDocument();
    expect(getByText("Lightning-fast load times.")).toBeInTheDocument();
  });

  it("renders with minimal props (headline only)", () => {
    // Arrange
    const { getByTestId, queryByTestId } = render(
      <FeatureCard headline={<h3>Simple Feature</h3>} />
    );

    // Act
    const container = getByTestId("feature-card-container");
    const headline = getByTestId("feature-card-headline");

    // Assert
    expect(container).toBeInTheDocument();
    expect(headline).toBeInTheDocument();
    expect(queryByTestId("feature-card-image")).not.toBeInTheDocument();
    expect(queryByTestId("feature-card-description")).not.toBeInTheDocument();
    expect(queryByTestId("feature-card-cta")).not.toBeInTheDocument();
  });

  it("applies correct default styling", () => {
    // Arrange
    const { getByTestId } = render(
      <FeatureCard headline={<h3>Test</h3>} />
    );

    // Act
    const container = getByTestId("feature-card-container");

    // Assert
    expect(container).toHaveStyle(`
      display: flex;
      flex-direction: column;
      gap: 16px;
      text-align: left;
    `);
  });

  it("applies center alignment when specified", () => {
    // Arrange
    const { getByTestId } = render(
      <FeatureCard headline={<h3>Centered</h3>} align="center" />
    );

    // Act
    const container = getByTestId("feature-card-container");

    // Assert
    expect(container).toHaveStyle("text-align: center");
  });

  it("applies right alignment when specified", () => {
    // Arrange
    const { getByTestId } = render(
      <FeatureCard headline={<h3>Right Aligned</h3>} align="right" />
    );

    // Act
    const container = getByTestId("feature-card-container");

    // Assert
    expect(container).toHaveStyle("text-align: right");
  });

  it("passes through HTML props via ...props", () => {
    // Arrange
    const { getByTestId } = render(
      <FeatureCard
        headline={<h3>Test</h3>}
        data-custom="test-value"
        className="custom-class"
      />
    );

    // Act
    const container = getByTestId("feature-card-container");

    // Assert
    expect(container).toHaveAttribute("data-custom", "test-value");
    expect(container).toHaveClass("custom-class");
  });

  it("supports custom styling via style prop", () => {
    // Arrange
    const { getByTestId } = render(
      <FeatureCard
        headline={<h3>Styled</h3>}
        style={{ backgroundColor: "blue", padding: "20px" }}
      />
    );

    // Act
    const container = getByTestId("feature-card-container");

    // Assert
    expect(container).toHaveStyle(`
      background-color: blue;
      padding: 20px;
    `);
  });

  it("renders custom children when provided", () => {
    // Arrange
    const { getByTestId, getByText } = render(
      <FeatureCard>
        <div data-testid="custom-content">Custom Content</div>
      </FeatureCard>
    );

    // Act
    const container = getByTestId("feature-card-container");
    const customContent = getByTestId("custom-content");

    // Assert
    expect(container).toBeInTheDocument();
    expect(customContent).toBeInTheDocument();
    expect(getByText("Custom Content")).toBeInTheDocument();
  });

  it("combines headline, description, and children", () => {
    // Arrange
    const { getByTestId, getByText } = render(
      <FeatureCard
        headline={<h3>Feature</h3>}
        description={<p>Description</p>}
      >
        <span>Additional content</span>
      </FeatureCard>
    );

    // Act
    const headline = getByTestId("feature-card-headline");
    const description = getByTestId("feature-card-description");

    // Assert
    expect(headline).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(getByText("Additional content")).toBeInTheDocument();
  });

  it("renders image", () => {
    // Arrange
    const { getByTestId } = render(
      <FeatureCard
        image={<span>🎯</span>}
        headline={<h3>Feature</h3>}
      />
    );

    // Act
    const image = getByTestId("feature-card-image");

    // Assert
    expect(image).toBeInTheDocument();
  });
});
