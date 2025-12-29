import "@testing-library/jest-dom";
import Page from ".";
import { render } from "@testing-library/react";

describe("Page", () => {
  it("renders children", () => {
    // Arrange
    const children = "Test Children";
    const { getByText } = render(<Page>{children}</Page>);

    // Act
    const childrenElement = getByText(children);

    // Assert
    expect(childrenElement).toBeInTheDocument();
  });

  it("renders the correct styling", () => {
    // Arrange
    const children = "Test Children";
    const { getByTestId } = render(<Page>{children}</Page>);

    // Act
    const container = getByTestId("page-container");

    // Assert
    expect(container).toHaveStyle(`
    width: 100%;
    `);
  });
});
