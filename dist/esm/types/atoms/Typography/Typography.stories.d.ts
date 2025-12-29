import type { StoryObj } from "@storybook/react-vite";
/**
 * Typography System for Landing Pages
 *
 * A complete set of typography components following landing page best practices:
 *
 * - **Responsive sizing**: Mobile-first with desktop enhancements
 * - **Optimal line heights**: 1.2 for headings, 1.5 for body text
 * - **Proper hierarchy**: H1 (48px) → H6 (18px) on desktop
 * - **Readable body text**: Minimum 16px with 75ch max width
 * - **Vertical rhythm**: Consistent bottom margins for flow
 * - **Sans-serif default**: Clean, modern appearance
 * - **Flexible alignment**: Left, center, right options
 * - **Weight variants**: Normal, medium, semibold, bold
 *
 * ## Usage Guidelines
 *
 * - **H1**: Hero headlines (6-12 words, benefit-focused)
 * - **H2**: Section headings (clear, scannable)
 * - **H3**: Feature titles, subsections
 * - **H4-H6**: Minor headings, progressively smaller
 * - **Lead**: Hero subheadings, important intro text
 * - **Paragraph**: Standard body copy (2-3 sentences max)
 * - **Small**: Fine print, disclaimers, captions
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
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
/**
 * Complete typography scale showing all heading levels and text styles
 */
export declare const TypeScale: Story;
/**
 * Hero section example using H1 and Lead text
 */
export declare const HeroExample: Story;
/**
 * Feature section example using H2 and H3
 */
export declare const FeatureSectionExample: Story;
/**
 * Text alignment variants
 */
export declare const AlignmentOptions: Story;
/**
 * Font weight variants
 */
export declare const WeightVariants: Story;
/**
 * Content with legal disclaimer
 */
export declare const WithDisclaimer: Story;
/**
 * Pricing card example
 */
export declare const PricingExample: Story;
/**
 * Article content example
 */
export declare const ArticleContent: Story;
