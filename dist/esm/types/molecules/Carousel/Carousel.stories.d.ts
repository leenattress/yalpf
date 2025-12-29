import type { StoryObj } from "@storybook/react-vite";
declare const meta: {
    title: string;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
/**
 * Default carousel showing one item at a time
 */
export declare const Default: Story;
/**
 * Carousel showing three items at once
 */
export declare const ThreeItems: Story;
/**
 * Carousel with custom gap
 */
export declare const CustomGap: Story;
/**
 * Carousel with text content
 */
export declare const WithTextContent: Story;
/**
 * Square images carousel
 */
export declare const SquareImages: Story;
/**
 * Two items per view
 */
export declare const TwoItems: Story;
/**
 * Inline controls - arrows positioned on left and right, aligned with content
 */
export declare const InlineControls: Story;
/**
 * Inline controls with single item
 */
export declare const InlineControlsSingleItem: Story;
