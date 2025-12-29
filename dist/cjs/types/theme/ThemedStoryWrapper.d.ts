import React from "react";
import type { Theme } from "./types";
/**
 * ThemedStoryWrapper Component
 *
 * Reusable wrapper for Storybook stories that need theme support.
 * Provides consistent theming with background and text colors.
 *
 * @example
 * ```tsx
 * <ThemedStoryWrapper theme={lightTheme}>
 *   <YourComponent />
 * </ThemedStoryWrapper>
 * ```
 */
export declare const ThemedStoryWrapper: React.FC<{
    theme: Theme;
    children: React.ReactNode;
}>;
