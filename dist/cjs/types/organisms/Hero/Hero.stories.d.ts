import type { StoryObj } from "@storybook/react-vite";
import type { Theme } from "../../theme/types";
interface HeroStoryArgs {
    theme: Theme;
}
/**
 * Hero Component for Landing Pages
 *
 * A conversion-optimized hero section designed for landing pages.
 * Follows best practices from landing page research:
 *
 * - **Headlines**: 6-12 words, benefit-focused
 * - **Above the fold**: All critical elements visible without scrolling
 * - **Mobile-first**: Responsive design that stacks on mobile
 * - **CTAs**: Action-oriented, benefit-focused language
 * - **Layout variants**: Default, reversed, and centered options
 *
 * ## Usage
 *
 * ```tsx
 * <Hero
 *   headline={<h1>Increase Sales by 47%</h1>}
 *   subheadline={<p>AI-powered subject lines that convert</p>}
 *   primaryCTA={<Button size="large">Start Free Trial</Button>}
 *   secondaryCTA={<Button variant="outline">Watch Demo</Button>}
 *   media={<img src="product.png" alt="Product" />}
 * />
 * ```
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
type Story = StoryObj<HeroStoryArgs>;
/**
 * Default hero with all elements: headline, subheadline, primary CTA, secondary CTA, and media.
 * Media appears on the right side on desktop, stacks above content on mobile.
 */
export declare const Default: Story;
/**
 * Minimal hero with just headline and primary CTA.
 * Perfect for simple, focused conversion goals.
 */
export declare const Minimal: Story;
/**
 * Reversed layout with media on the left, content on the right.
 * Good for visual variety on multi-section pages.
 */
export declare const Reversed: Story;
/**
 * Centered layout with no media column.
 * Ideal for announcement pages or simple value propositions.
 */
export declare const Centered: Story;
/**
 * Hero with video instead of image.
 * Video demonstrations can increase conversions by 86%.
 */
export declare const WithVideo: Story;
/**
 * SaaS-focused hero with benefit-driven headline.
 * Follows the "Increase [metric] by [percentage]" formula.
 */
export declare const SaaSFocused: Story;
/**
 * E-commerce hero with urgency and scarcity elements.
 * Uses action-oriented CTA language.
 */
export declare const ECommerce: Story;
/**
 * B2B hero emphasizing trust and ROI.
 * Includes specific metrics and business outcomes.
 */
export declare const B2B: Story;
/**
 * Hero with custom styling applied via style prop.
 * Demonstrates how developers can theme the component.
 */
export declare const CustomStyled: Story;
/**
 * Real-world example with benefit-focused copy.
 * Demonstrates proper headline length (6-12 words) and action-oriented CTAs.
 */
export declare const ConversionOptimized: Story;
