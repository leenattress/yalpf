import type { StoryObj } from "@storybook/react-vite";
/**
 * The Page component is a simple container that displays children content.
 *
 * ## Usage
 *
 * ```tsx
 * import Page from './components/Page';
 *
 * function App() {
 *   return (
 *     <Page>
 *       Your content goes here
 *     </Page>
 *   );
 * }
 * ```
 */
declare const meta: {
    title: string;
    component: import("react").FC<import("./types").PageProps>;
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
 * Basic page with simple content.
 */
export declare const Default: Story;
/**
 * Page with longer content.
 */
export declare const WithLongerContent: Story;
/**
 * Article page demonstrating all HTML typography elements.
 * Shows how the Page component automatically styles headings, paragraphs, lists, blockquotes, and more.
 */
export declare const Article: Story;
