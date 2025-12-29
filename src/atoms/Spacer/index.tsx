import React from "react";
import { SpacerProps } from "./types";
import { Container } from "./styled";

/**
 * Spacer - Vertical spacing component
 * 
 * Provides consistent vertical spacing between sections and elements.
 * Use to control vertical rhythm and improve readability.
 * 
 * @example
 * ```tsx
 * <Heading1>Title</Heading1>
 * <Spacer size="lg" />
 * <Heading2>Subtitle</Heading2>
 * ```
 */
const Spacer: React.FC<SpacerProps> = ({ size = "md", ...props }) => {
  return <Container $size={size} data-testid="spacer" {...props} />;
};

export default Spacer;
