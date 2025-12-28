import "@testing-library/jest-dom";
import Section from ".";
import { render } from "@testing-library/react";

describe("Section", () => {
    it("renders the section container", () => {
        // Arrange
        const { getByTestId } = render(
            <Section>
                <Section.Inner>
                    <p>Test content</p>
                </Section.Inner>
            </Section>
        );

        // Act
        const container = getByTestId("section-container");

        // Assert
        expect(container).toBeInTheDocument();
    });

    it("renders the section inner", () => {
        // Arrange
        const { getByTestId } = render(
            <Section>
                <Section.Inner>
                    <p>Test content</p>
                </Section.Inner>
            </Section>
        );

        // Act
        const inner = getByTestId("section-inner");

        // Assert
        expect(inner).toBeInTheDocument();
    });

    it("renders children inside Section.Inner", () => {
        // Arrange
        const children = "Test content";
        const { getByText } = render(
            <Section>
                <Section.Inner>
                    <p>{children}</p>
                </Section.Inner>
            </Section>
        );

        // Act
        const childrenElement = getByText(children);

        // Assert
        expect(childrenElement).toBeInTheDocument();
    });

    it("renders the correct styling", () => {
        // Arrange
        const { getByTestId } = render(
            <Section>
                <Section.Inner>
                    <p>Test content</p>
                </Section.Inner>
            </Section>
        );

        // Act
        const container = getByTestId("section-container");

        // Assert
        expect(container).toHaveStyle(`
    font-family: sans-serif;
    `);
    });

    it("renders full width when specified", () => {
        // Arrange
        const { getByTestId } = render(
            <Section>
                <Section.Inner fullWidth>
                    <p>Test content</p>
                </Section.Inner>
            </Section>
        );

        // Act
        const inner = getByTestId("section-inner");

        // Assert
        expect(inner).toHaveStyle(`
    max-width: 100%;
    `);
    });

    it("renders centered layout by default", () => {
        // Arrange
        const { getByTestId } = render(
            <Section>
                <Section.Inner>
                    <p>Test content</p>
                </Section.Inner>
            </Section>
        );

        // Act
        const inner = getByTestId("section-inner");

        // Assert
        expect(inner).toHaveStyle(`
    max-width: 1200px;
    `);
    });
});
