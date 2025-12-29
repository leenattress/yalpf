import React from "react";
/**
 * Button Props
 *
 * CTA-optimized button component for landing pages.
 */
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    /**
     * Visual variant of the button
     * - primary: High-contrast, main CTA (default)
     * - secondary: Lower emphasis alternative action
     * - outline: Minimal emphasis, tertiary action
     */
    variant?: "primary" | "secondary" | "outline";
    /**
     * Size of the button
     * - small: Compact (32px height)
     * - medium: Standard (44px height - default)
     * - large: Prominent CTA (56px height)
     */
    size?: "small" | "medium" | "large";
    /**
     * Whether the button spans full width of its container
     */
    fullWidth?: boolean;
    /**
     * Loading state - shows loading indicator and disables interaction
     */
    isLoading?: boolean;
    /**
     * Icon to display before the button text
     */
    iconBefore?: React.ReactNode;
    /**
     * Icon to display after the button text
     */
    iconAfter?: React.ReactNode;
    /**
     * Button content (children is optional for Storybook compatibility)
     */
    children?: React.ReactNode;
}
