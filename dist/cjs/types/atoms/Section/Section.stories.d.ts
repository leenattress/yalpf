import type { StoryObj } from "@storybook/react-vite";
/**
 * The Section component is a container with no fixed height.
 * Use Section.Inner to wrap content with centered max-width layout.
 *
 * ## Usage
 *
 * ```tsx
 * import Section from './components/Section';
 *
 * function App() {
 *   return (
 *     <Section>
 *       <Section.Inner>
 *         Your content goes here
 *       </Section.Inner>
 *     </Section>
 *   );
 * }
 * ```
 */
declare const meta: {
    title: string;
    component: import("react").FC<import("./types").SectionProps> & {
        Inner: import("react").FC<import("./types").SectionInnerProps>;
        Column: import("react").FC<import("./types").SectionColumnProps>;
    };
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
 * Basic section with simple content inside Section.Inner.
 */
export declare const Default: Story;
/**
 * Demonstrates the difference between centered (default) and full-width layouts.
 * Background colors added to visualize the container boundaries.
 */
export declare const CenteredVsFullWidth: Story;
/**
 * Using inline styles directly via style prop.
 * All standard HTML props are supported including style, className, id, etc.
 */
export declare const WithInlineStyles: Story;
/**
 * Section with multiple content elements including a button.
 */
export declare const WithMultipleElements: Story;
/**
 * Multiple section inners stacked inside one section.
 */
export declare const StackedSections: Story;
/**
 * Two column layout (50/50 split).
 */
export declare const TwoColumnsEqual: Story;
/**
 * Two column layout (60/40 split).
 */
export declare const TwoColumnsUnequal: Story;
/**
 * Three column layout (33/33/33 split).
 */
export declare const ThreeColumns: Story;
/**
 * Four column layout (25/25/25/25 split).
 */
export declare const FourColumns: Story;
/**
 * Columns with background colors to visualize the layout.
 */
export declare const ColumnsWithBackground: Story;
