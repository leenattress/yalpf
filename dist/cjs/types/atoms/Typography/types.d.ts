import React from "react";
/**
 * Base props for all typography components
 */
export interface TypographyProps extends React.ComponentPropsWithoutRef<"p"> {
    children?: React.ReactNode;
    align?: "left" | "center" | "right";
    weight?: "normal" | "medium" | "semibold" | "bold";
    color?: string;
}
export interface HeadingProps extends React.ComponentPropsWithoutRef<"h1"> {
    children?: React.ReactNode;
    align?: "left" | "center" | "right";
    weight?: "normal" | "medium" | "semibold" | "bold";
    color?: string;
}
