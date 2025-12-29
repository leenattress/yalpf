import { Theme } from "./types";

/**
 * Light Theme
 *
 * Clean, bright theme optimized for daytime viewing.
 * Features dark text on light backgrounds with subtle, professional accent colors.
 */
export const lightTheme: Theme = {
  name: "light",
  typography: {
    fontFamily: "sans-serif",
    headingFontFamily: "sans-serif",
    monospaceFontFamily: "monospace",
  },
  colors: {
    primary: "#2c5f8d",
    secondary: "#5a6c7d",
    background: "#ffffff",
    text: "#1a202c",
    textOnPrimary: "#ffffff",
    textOnSecondary: "#ffffff",
  },
};

/**
 * Dark Theme
 *
 * Modern dark theme optimized for low-light environments and reduced eye strain.
 * Features light text on dark backgrounds with soft, accessible accent colors.
 */
export const darkTheme: Theme = {
  name: "dark",
  typography: {
    fontFamily: "sans-serif",
    headingFontFamily: "sans-serif",
    monospaceFontFamily: "monospace",
  },
  colors: {
    primary: "#7fa8c9",
    secondary: "#9aa5b1",
    background: "#1a202c",
    text: "#f7fafc",
    textOnPrimary: "#1a202c",
    textOnSecondary: "#1a202c",
  },
};

/**
 * Default theme used when no theme is explicitly provided
 */
export const defaultTheme = lightTheme;
