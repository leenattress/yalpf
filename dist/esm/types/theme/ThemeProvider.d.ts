import React from "react";
import { Theme } from "./types";
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
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
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
export declare const useTheme: () => Theme;
