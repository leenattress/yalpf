import type { StoryObj } from "@storybook/react-vite";
import type { Theme } from "../theme/types";
interface LandingPageArgs {
    theme: Theme;
}
/**
 * Example landing page composition using Page and Section components.
 * This demonstrates how to combine atomic components into a complete page layout.
 *
 * Pages in Atomic Design represent specific instances with real content,
 * typically used for documentation and example purposes in component libraries.
 */
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
    argTypes: {
        theme: {
            control: "select";
            options: string[];
            mapping: {
                light: Theme;
                dark: Theme;
            };
            description: string;
            defaultValue: string;
        };
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<LandingPageArgs>;
/**
 * Complete landing page with hero, features, testimonials, and call-to-action sections.
 * Uses only plain HTML with no styling - demonstrates content structure.
 */
export declare const Default: Story;
/**
 * Minimal landing page with just hero and CTA sections.
 */
export declare const Minimal: Story;
/**
 * Product-focused landing page with detailed features and benefits.
 */
export declare const ProductFocused: Story;
/**
 * Wedding website landing page inspired by modern wedding platforms.
 * Demonstrates multi-section layout with hero, features carousel, benefits, and CTAs.
 */
export declare const WeddingWebsite: Story;
