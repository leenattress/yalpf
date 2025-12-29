import React, { createContext, useContext, useMemo } from "react";
import { Theme } from "./types";
import { defaultTheme } from "./themes";

/**
 * Theme Context
 *
 * Provides theme configuration throughout the component tree.
 */
const ThemeContext = createContext<Theme>(defaultTheme);

export interface ThemeProviderProps {
  /**
   * Theme object to apply to all child components
   */
  theme: Theme;

  /**
   * Child components that will have access to the theme
   */
  children: React.ReactNode;
}

/**
 * ThemeProvider Component
 *
 * Wraps your application to provide theme configuration to all components.
 * Injects CSS variables for typography and color system.
 * Currently supports light and dark themes.
 *
 * @example
 * ```tsx
 * import { ThemeProvider, lightTheme, darkTheme } from 'your-library';
 *
 * function App() {
 *   return (
 *     <ThemeProvider theme={lightTheme}>
 *       <YourComponents />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  const memoizedTheme = useMemo(() => theme, [theme]);

  // Convert theme to CSS variables
  const cssVariables = useMemo(
    () => ({
      "--font-family": memoizedTheme.typography.fontFamily,
      "--heading-font-family":
        memoizedTheme.typography.headingFontFamily ||
        memoizedTheme.typography.fontFamily,
      "--mono-font-family": memoizedTheme.typography.monospaceFontFamily,
      "--color-primary": memoizedTheme.colors.primary,
      "--color-secondary": memoizedTheme.colors.secondary,
      "--color-background": memoizedTheme.colors.background,
      "--color-text": memoizedTheme.colors.text,
      "--color-text-on-primary": memoizedTheme.colors.textOnPrimary,
      "--color-text-on-secondary": memoizedTheme.colors.textOnSecondary,
    }),
    [memoizedTheme]
  );

  return (
    <ThemeContext.Provider value={memoizedTheme}>
      <div style={cssVariables as React.CSSProperties}>{children}</div>
    </ThemeContext.Provider>
  );
};

/**
 * useTheme Hook
 *
 * Access the current theme from any component within a ThemeProvider.
 *
 * @returns The current theme object
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const theme = useTheme();
 *   return <div style={{ fontFamily: theme.typography.fontFamily }}>Hello</div>;
 * }
 * ```
 */
export const useTheme = (): Theme => {
  const context = useContext(ThemeContext);
  if (!context) {
    // Return default theme if used outside provider
    return defaultTheme;
  }
  return context;
};
