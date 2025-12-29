import type { StoryObj } from "@storybook/react-vite";
interface ImageStoryArgs {
}
/**
 * Image Component
 *
 * An atom component for displaying images with consistent aspect ratios and object-fit behavior.
 * Handles different image sizes gracefully by maintaining visual consistency.
 *
 * ## Key Features
 *
 * - **Aspect Ratio Control**: Maintain consistent dimensions across varying image sizes
 * - **Object Fit Options**: Cover, contain, or fill to handle different use cases
 * - **Rounded Corners**: From subtle to circular images
 * - **Lazy Loading**: Performance optimization by default
 * - **Accessibility**: Required alt text for screen readers
 *
 * ## Usage
 *
 * ```tsx
 * <Image
 *   src="https://example.com/image.jpg"
 *   alt="Product screenshot"
 *   aspectRatio="16/9"
 *   objectFit="cover"
 *   rounded="md"
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
    tags: string[];
};
export default meta;
type Story = StoryObj<ImageStoryArgs>;
/**
 * Default image with cover object-fit.
 * Maintains full container fill, may crop image.
 */
export declare const Default: Story;
/**
 * 16:9 aspect ratio (common for hero images and videos).
 * Different sized source images all display at the same ratio.
 */
export declare const SixteenByNine: Story;
/**
 * Square 1:1 aspect ratio (perfect for avatars and thumbnails).
 * All images crop to perfect squares regardless of source dimensions.
 */
export declare const Square: Story;
/**
 * Rounded corners demonstration.
 * Shows all corner radius options.
 */
export declare const RoundedVariants: Story;
/**
 * Object-fit comparison.
 * Shows how different fit modes handle the same image.
 */
export declare const ObjectFitVariants: Story;
/**
 * Different aspect ratios side-by-side.
 * Demonstrates visual consistency across varying proportions.
 */
export declare const AspectRatioShowcase: Story;
/**
 * Wildly different source image sizes.
 * All maintain consistent 16:9 display despite very different sources.
 */
export declare const DifferentSourceSizes: Story;
/**
 * Avatar-style images (perfect circles).
 * Common for user profiles and testimonials.
 */
export declare const Avatars: Story;
/**
 * Product grid demonstration.
 * Shows how Image component maintains consistency in product listings.
 */
export declare const ProductGrid: Story;
/**
 * Hero image with rounded corners.
 * Typical landing page hero image styling.
 */
export declare const HeroImage: Story;
