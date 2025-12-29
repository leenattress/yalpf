import type { StoryObj } from "@storybook/react-vite";
/**
 * FeatureCard Component for Landing Pages
 *
 * A molecule component for displaying individual features with icons, headlines, and descriptions.
 * Follows landing page best practices:
 *
 * - **Benefit-focused headlines**: 3-7 words highlighting customer outcomes
 * - **Scannable descriptions**: 2-3 sentences maximum
 * - **Visual hierarchy**: Icons for quick recognition
 * - **Flexible alignment**: Left, center, or right text alignment
 * - **Optional CTAs**: Links or buttons for additional engagement
 *
 * Best used in groups of 3-6 features (optimal cognitive load).
 *
 * ## Usage
 *
 * ```tsx
 * <FeatureCard
 *   icon={<IconComponent />}
 *   headline={<h3>Lightning Fast</h3>}
 *   description={<p>Load times under 1 second guaranteed.</p>}
 *   cta={<a href="/performance">Learn more →</a>}
 * />
 * ```
 */
declare const meta: {
    title: string;
    component: import("react").FC<import("./types").FeatureCardProps>;
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
 * Default feature card with icon, headline, and description.
 * Left-aligned text (default).
 */
export declare const Default: Story;
/**
 * Feature card with center alignment.
 * Common for grid layouts on landing pages.
 */
export declare const Centered: Story;
/**
 * Feature card with CTA link.
 * Encourages further engagement and exploration.
 */
export declare const WithCTA: Story;
/**
 * Minimal feature card with just headline and description.
 * Good for simple, text-focused features.
 */
export declare const Minimal: Story;
/**
 * Feature card with custom styling.
 * Demonstrates style prop flexibility for theming.
 */
export declare const CustomStyled: Story;
/**
 * Three-column feature grid demonstration.
 * Shows typical landing page feature section layout.
 */
export declare const ThreeColumnGrid: Story;
/**
 * Feature cards with image icons instead of emoji.
 * More professional appearance for B2B landing pages.
 */
export declare const WithImageIcon: Story;
/**
 * Feature card with button CTA.
 * Higher engagement than text links.
 */
export declare const WithButtonCTA: Story;
/**
 * Feature cards stacked vertically.
 * Mobile-friendly layout demonstration.
 */
export declare const VerticalStack: Story;
/**
 * Real-world example with benefit-focused copy.
 * Demonstrates proper content structure for conversion.
 */
export declare const ConversionOptimized: Story;
/**
 * Feature card with full-width image.
 * Image spans the entire width of the card for visual impact.
 */
export declare const WithFullWidthImage: Story;
/**
 * Three-column grid with full-width images.
 * Demonstrates product/service cards with hero images.
 */
export declare const ImageCardGrid: Story;
