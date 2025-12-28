import React from "react";
import { type SectionProps, type SectionInnerProps } from "./types";
import { Container, Inner } from "./styled";

const SectionInner: React.FC<SectionInnerProps> = ({ children, fullWidth = false, ...props }) => {
    return <Inner data-testid="section-inner" $fullWidth={fullWidth} {...props}>{children}</Inner>;
};

const Section: React.FC<SectionProps> & { Inner: typeof SectionInner } = ({
    children,
    ...props
}) => {
    return <Container data-testid="section-container" {...props}>{children}</Container>;
};

Section.Inner = SectionInner;

export default Section;