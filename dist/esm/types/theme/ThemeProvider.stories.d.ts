import type { StoryObj } from "@storybook/react-vite";
declare const meta: {
    title: string;
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
/**
 * Light theme provides clean, bright colors optimized for daytime viewing.
 * Features dark text on light backgrounds with vibrant accent colors.
 */
export declare const LightTheme: Story;
/**
 * Dark theme provides modern dark colors for low-light environments.
 * Features light text on dark backgrounds with adjusted contrast ratios.
 */
export declare const DarkTheme: Story;
/**
 * Side-by-side comparison of light and dark themes.
 * Useful for testing and selecting the right theme for your project.
 */
export declare const Comparison: Story;
/**
 * Demonstrates theme integration with all typography elements and color variables.
 * Shows how the theme affects headings, paragraphs, lists, blockquotes, and colors.
 */
export declare const TypographyShowcase: Story;
/**
 * Minimal example showing basic ThemeProvider usage with light theme.
 * Copy this pattern to get started quickly.
 */
export declare const MinimalExample: Story;
