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
    width: 100%;
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

    it("renders columns inside inner", () => {
        // Arrange
        const { getByTestId } = render(
            <Section>
                <Section.Inner>
                    <Section.Column>Column 1</Section.Column>
                    <Section.Column>Column 2</Section.Column>
                </Section.Inner>
            </Section>
        );

        // Act
        const inner = getByTestId("section-inner");

        // Assert
        expect(inner).toBeInTheDocument();
    });

    it("renders column items", () => {
        // Arrange
        const { getAllByTestId } = render(
            <Section>
                <Section.Inner>
                    <Section.Column>Column 1</Section.Column>
                    <Section.Column>Column 2</Section.Column>
                </Section.Inner>
            </Section>
        );

        // Act
        const columns = getAllByTestId("section-column");

        // Assert
        expect(columns).toHaveLength(2);
    });

    it("applies custom width to column", () => {
        // Arrange
        const { getAllByTestId } = render(
            <Section>
                <Section.Inner>
                    <Section.Column width={2}>Wide column</Section.Column>
                    <Section.Column width={1}>Narrow column</Section.Column>
                </Section.Inner>
            </Section>
        );

        // Act
        const columns = getAllByTestId("section-column");

        // Assert
        expect(columns[0]).toHaveStyle("flex: 2");
        expect(columns[1]).toHaveStyle("flex: 1");
    });

    it("applies custom gap to inner with columns", () => {
        // Arrange
        const { getByTestId } = render(
            <Section>
                <Section.Inner gap="40px">
                    <Section.Column>Column 1</Section.Column>
                    <Section.Column>Column 2</Section.Column>
                </Section.Inner>
            </Section>
        );

        // Act
        const inner = getByTestId("section-inner");

        // Assert
        expect(inner).toHaveStyle("gap: 40px");
    });
});
