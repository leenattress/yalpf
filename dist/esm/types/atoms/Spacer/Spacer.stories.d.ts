import type { StoryObj } from "@storybook/react-vite";
/**
 * Spacer Component for Vertical Spacing
 *
 * The Spacer component provides consistent vertical spacing between elements
 * to improve readability and visual rhythm in your layouts.
 *
 * ## Size Options
 *
 * - **xs**: 8px - Minimal spacing between closely related items
 * - **sm**: 16px - Small spacing for tight layouts
 * - **md**: 24px - Default, medium spacing (most common)
 * - **lg**: 32px - Large spacing between sections
 * - **xl**: 48px - Extra large spacing for major sections
 * - **2xl**: 64px - Very large spacing for distinct sections
 * - **3xl**: 96px - Maximum spacing for page-level divisions
 *
 * ## Usage Guidelines
 *
 * - Use **md** (default) for standard spacing between paragraphs
 * - Use **lg** or **xl** before major headings (H2)
 * - Use **2xl** or **3xl** between major page sections
 * - Use **xs** or **sm** for tight, compact layouts
 */
declare const meta: {
    title: string;
    component: import("react").FC<import("./types").SpacerProps>;
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
 * All size variants displayed together for comparison
 */
export declare const AllSizes: Story;
/**
 * Default medium spacing (24px)
 */
export declare const Default: Story;
/**
 * Small spacing for compact layouts
 */
export declare const SmallSpacing: Story;
/**
 * Large spacing between major sections
 */
export declare const LargeSpacing: Story;
/**
 * Extra large spacing for page-level divisions
 */
export declare const PageDivisions: Story;
