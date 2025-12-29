import React from "react";

/**
 * Props for the Spacer component
 */
export interface SpacerProps extends React.ComponentPropsWithoutRef<"div"> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}
