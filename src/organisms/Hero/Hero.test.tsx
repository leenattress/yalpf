import { describe, it, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from ".";

describe("Hero", () => {
  it("renders the container element", () => {
    // Arrange & Act
    const { getByTestId } = render(<Hero />);
    
    // Assert
    expect(getByTestId("hero-container")).toBeInTheDocument();
  });

  it("applies correct base styling", () => {
    // Arrange & Act
    const { getByTestId } = render(<Hero />);
    const container = getByTestId("hero-container");
    
    // Assert
    expect(container).toHaveStyle(`
      width: 100%;
    `);
  });

  it("renders headline when provided", () => {
    // Arrange
    const headline = <h1>Test Headline</h1>;
    
    // Act
    const { getByTestId, getByText } = render(<Hero headline={headline} />);
    
    // Assert
    expect(getByTestId("hero-headline")).toBeInTheDocument();
    expect(getByText("Test Headline")).toBeInTheDocument();
  });

  it("renders subheadline when provided", () => {
    // Arrange
    const subheadline = <p>Test subheadline</p>;
    
    // Act
    const { getByTestId, getByText } = render(<Hero subheadline={subheadline} />);
    
    // Assert
    expect(getByTestId("hero-subheadline")).toBeInTheDocument();
    expect(getByText("Test subheadline")).toBeInTheDocument();
  });

  it("renders primary CTA when provided", () => {
    // Arrange
    const primaryCTA = <button>Get Started</button>;
    
    // Act
    const { getByTestId, getByText } = render(<Hero primaryCTA={primaryCTA} />);
    
    // Assert
    expect(getByTestId("hero-cta-group")).toBeInTheDocument();
    expect(getByText("Get Started")).toBeInTheDocument();
  });

  it("renders secondary CTA when provided", () => {
    // Arrange
    const secondaryCTA = <button>Learn More</button>;
    
    // Act
    const { getByTestId, getByText } = render(<Hero secondaryCTA={secondaryCTA} />);
    
    // Assert
    expect(getByTestId("hero-cta-group")).toBeInTheDocument();
    expect(getByText("Learn More")).toBeInTheDocument();
  });

  it("renders both CTAs together", () => {
    // Arrange
    const primaryCTA = <button>Get Started</button>;
    const secondaryCTA = <button>Learn More</button>;
    
    // Act
    const { getByText } = render(
      <Hero primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />
    );
    
    // Assert
    expect(getByText("Get Started")).toBeInTheDocument();
    expect(getByText("Learn More")).toBeInTheDocument();
  });

  it("renders media content when provided with default layout", () => {
    // Arrange
    const media = <img src="test.jpg" alt="Test" />;
    
    // Act
    const { getByTestId, getByAltText } = render(<Hero media={media} />);
    
    // Assert
    expect(getByTestId("hero-media")).toBeInTheDocument();
    expect(getByAltText("Test")).toBeInTheDocument();
  });

  it("does not render media when layout is centered", () => {
    // Arrange
    const media = <img src="test.jpg" alt="Test" />;
    
    // Act
    const { queryByTestId } = render(<Hero media={media} layout="centered" />);
    
    // Assert
    expect(queryByTestId("hero-media")).not.toBeInTheDocument();
  });

  it("renders all content together", () => {
    // Arrange
    const headline = <h1>Complete Hero</h1>;
    const subheadline = <p>With all elements</p>;
    const primaryCTA = <button>Primary</button>;
    const secondaryCTA = <button>Secondary</button>;
    const media = <img src="hero.jpg" alt="Hero" />;
    
    // Act
    const { getByText, getByAltText } = render(
      <Hero
        headline={headline}
        subheadline={subheadline}
        primaryCTA={primaryCTA}
        secondaryCTA={secondaryCTA}
        media={media}
      />
    );
    
    // Assert
    expect(getByText("Complete Hero")).toBeInTheDocument();
    expect(getByText("With all elements")).toBeInTheDocument();
    expect(getByText("Primary")).toBeInTheDocument();
    expect(getByText("Secondary")).toBeInTheDocument();
    expect(getByAltText("Hero")).toBeInTheDocument();
  });

  it("passes through additional HTML props", () => {
    // Arrange & Act
    const { getByTestId } = render(
      <Hero data-custom="test-value" id="hero-section" />
    );
    const container = getByTestId("hero-container");
    
    // Assert
    expect(container).toHaveAttribute("data-custom", "test-value");
    expect(container).toHaveAttribute("id", "hero-section");
  });

  it("applies custom style prop", () => {
    // Arrange & Act
    const { getByTestId } = render(
      <Hero style={{ backgroundColor: "blue" }} />
    );
    const container = getByTestId("hero-container");
    
    // Assert
    expect(container).toHaveStyle("background-color: blue");
  });

  it("supports default layout variant", () => {
    // Arrange
    const media = <img src="test.jpg" alt="Test" />;
    
    // Act
    const { getByTestId } = render(<Hero media={media} layout="default" />);
    
    // Assert
    expect(getByTestId("hero-media")).toBeInTheDocument();
  });

  it("supports reversed layout variant", () => {
    // Arrange
    const media = <img src="test.jpg" alt="Test" />;
    
    // Act
    const { getByTestId } = render(<Hero media={media} layout="reversed" />);
    
    // Assert
    expect(getByTestId("hero-media")).toBeInTheDocument();
  });

  it("supports centered layout variant", () => {
    // Arrange
    const headline = <h1>Centered Hero</h1>;
    
    // Act
    const { getByTestId } = render(
      <Hero headline={headline} layout="centered" align="center" />
    );
    
    // Assert
    expect(getByTestId("hero-headline")).toBeInTheDocument();
  });

  it("supports left alignment", () => {
    // Arrange
    const headline = <h1>Left Aligned</h1>;
    
    // Act
    const { getByTestId } = render(<Hero headline={headline} align="left" />);
    
    // Assert
    expect(getByTestId("hero-headline")).toBeInTheDocument();
  });

  it("supports center alignment", () => {
    // Arrange
    const headline = <h1>Center Aligned</h1>;
    
    // Act
    const { getByTestId } = render(<Hero headline={headline} align="center" />);
    
    // Assert
    expect(getByTestId("hero-headline")).toBeInTheDocument();
  });
});
