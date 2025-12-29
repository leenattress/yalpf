/**
 * Theme Type Definitions
 *
 * Defines the shape of themes used throughout the component library.
 * Includes typography and color system for comprehensive theming.
 */
export interface TypographyTheme {
    /**
     * Font family for body text and general content
     */
    fontFamily: string;
    /**
     * Font family for headings (h1-h6)
     * If not specified, defaults to fontFamily
     */
    headingFontFamily?: string;
    /**
     * Font family for monospace/code elements
     */
    monospaceFontFamily: string;
}
export interface ColorTheme {
    /**
     * Primary color - used for main CTAs, buttons, and key interactive elements
     */
    primary: string;
    /**
     * Secondary color - used for secondary actions and accents
     */
    secondary: string;
    /**
     * Background color - main page/component background
     */
    background: string;
    /**
     * Text color - primary text content
     */
    text: string;
    /**
     * Text on primary - text color when placed on primary colored backgrounds
     */
    textOnPrimary: string;
    /**
     * Text on secondary - text color when placed on secondary colored backgrounds
     */
    textOnSecondary: string;
}
export interface Theme {
    /**
     * Theme name for identification
     */
    name: string;
    /**
     * Typography settings
     */
    typography: TypographyTheme;
    /**
     * Color settings
     */
    colors: ColorTheme;
}
