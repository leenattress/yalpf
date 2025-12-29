import React from "react";
import { type SectionProps, type SectionInnerProps, type SectionColumnProps } from "./types";
import { Container, Inner, Column } from "./styled";

const SectionInner: React.FC<SectionInnerProps> = ({ children, fullWidth = false, gap, mobileBreakpoint, ...props }) => {
    return <Inner data-testid="section-inner" $fullWidth={fullWidth} $gap={gap} $mobileBreakpoint={mobileBreakpoint} {...props}>{children}</Inner>;
};

const SectionColumn: React.FC<SectionColumnProps> = ({ children, width, ...props }) => {
    return <Column data-testid="section-column" data-column="true" $width={width} {...props}>{children}</Column>;
};

const Section: React.FC<SectionProps> & { 
    Inner: typeof SectionInner;
    Column: typeof SectionColumn;
} = ({
    children,
    ...props
}) => {
    return <Container data-testid="section-container" {...props}>{children}</Container>;
};

Section.Inner = SectionInner;
Section.Column = SectionColumn;

export default Section;