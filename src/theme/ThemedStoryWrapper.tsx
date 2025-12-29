import React from "react";
import { ThemeProvider } from "./ThemeProvider";
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
export const ThemedStoryWrapper: React.FC<{
  theme: Theme;
  children: React.ReactNode;
}> = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: "var(--color-background)",
          color: "var(--color-text)",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </ThemeProvider>
  );
};
