import type { StoryObj } from "@storybook/react-vite";
/**
 * Typography Styles
 *
 * A lightweight typography mixin that automatically styles HTML tags.
 * The typography mixin is already applied to Section and other container components,
 * so you just use regular HTML - no imports needed!
 *
 * ## Features
 *
 * - **Regular HTML tags**: Use `<h1>`, `<h2>`, `<p>`, etc. - no custom components needed
 * - **Automatic styling**: Typography works inside Section, Page, and other containers
 * - **Responsive sizing**: Mobile-first with desktop enhancements
 * - **Optimal line heights**: 1.2 for headings, 1.5 for body text
 * - **Proper hierarchy**: H1 (48px) → H6 (18px) on desktop
 * - **Readable body text**: Minimum 16px with 75ch max width
 * - **Vertical rhythm**: Consistent bottom margins for flow
 * - **Sans-serif default**: Clean, modern appearance
 *
 * ## Usage (Developers using your library)
 *
 * ```tsx
 * import { Section } from 'yalpf';
 *
 * function MyLandingPage() {
 *   return (
 *     <Section>
 *       <h1>Your Heading</h1>
 *       <p>Your paragraph text.</p>
 *     </Section>
 *   );
 * }
 * ```
 *
 * ## Usage (Adding to new components)
 *
 * ```tsx
 * import { typographyStyles } from 'yalpf';
 *
 * const MyContainer = styled.div`
 *   ${typographyStyles}
 *   // your other styles...
 * `;
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
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
/**
 * Complete typography scale showing all heading levels and text styles
 */
export declare const TypeScale: Story;
/**
 * Hero section example using regular HTML tags
 */
export declare const HeroExample: Story;
/**
 * Feature section example
 */
export declare const FeatureSectionExample: Story;
/**
 * Text alignment using inline styles
 */
export declare const AlignmentOptions: Story;
/**
 * Font weight variants using inline styles
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
 * Article content example with lists
 */
export declare const ArticleContent: Story;
