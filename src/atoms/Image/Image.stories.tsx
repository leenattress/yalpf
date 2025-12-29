import type { Meta, StoryObj } from "@storybook/react-vite";
import Image from ".";

// Define custom args for image stories (empty since we use render functions)
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ImageStoryArgs {}

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
const meta = {
  title: "Atoms/Image",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A flexible image component that handles different sizes gracefully with aspect ratio and object-fit controls.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<ImageStoryArgs>;

export default meta;
type Story = StoryObj<ImageStoryArgs>;

/**
 * Default image with cover object-fit.
 * Maintains full container fill, may crop image.
 */
export const Default: Story = {
  args: {},
  render: () => (
    <div style={{ width: "400px" }}>
      <Image
        src="https://placedog.net/640/480"
        alt="Default dog"
      />
    </div>
  ),
};

/**
 * 16:9 aspect ratio (common for hero images and videos).
 * Different sized source images all display at the same ratio.
 */
export const SixteenByNine: Story = {
  args: {},
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ width: "300px" }}>
        <Image
          src="https://placedog.net/800/600"
          alt="16:9 landscape"
          aspectRatio="16/9"
        />
      </div>
      <div style={{ width: "300px" }}>
        <Image
          src="https://placedog.net/400/300"
          alt="16:9 portrait"
          aspectRatio="16/9"
        />
      </div>
      <div style={{ width: "300px" }}>
        <Image
          src="https://placedog.net/1200/900"
          alt="16:9 large"
          aspectRatio="16/9"
        />
      </div>
    </div>
  ),
};

/**
 * Square 1:1 aspect ratio (perfect for avatars and thumbnails).
 * All images crop to perfect squares regardless of source dimensions.
 */
export const Square: Story = {
  args: {},
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ width: "200px" }}>
        <Image
          src="https://placedog.net/640/480"
          alt="Square from landscape"
          aspectRatio="1/1"
        />
      </div>
      <div style={{ width: "200px" }}>
        <Image
          src="https://placedog.net/480/640"
          alt="Square from portrait"
          aspectRatio="1/1"
        />
      </div>
      <div style={{ width: "200px" }}>
        <Image
          src="https://placedog.net/800/800"
          alt="Square from square"
          aspectRatio="1/1"
        />
      </div>
    </div>
  ),
};

/**
 * Rounded corners demonstration.
 * Shows all corner radius options.
 */
export const RoundedVariants: Story = {
  args: {},
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <div style={{ width: "150px" }}>
        <Image
          src="https://placedog.net/300/300"
          alt="No rounding"
          aspectRatio="1/1"
          rounded="none"
        />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "14px" }}>None</p>
      </div>
      <div style={{ width: "150px" }}>
        <Image
          src="https://placedog.net/300/300"
          alt="Small rounding"
          aspectRatio="1/1"
          rounded="sm"
        />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "14px" }}>Small</p>
      </div>
      <div style={{ width: "150px" }}>
        <Image
          src="https://placedog.net/300/300"
          alt="Medium rounding"
          aspectRatio="1/1"
          rounded="md"
        />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "14px" }}>Medium</p>
      </div>
      <div style={{ width: "150px" }}>
        <Image
          src="https://placedog.net/300/300"
          alt="Large rounding"
          aspectRatio="1/1"
          rounded="lg"
        />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "14px" }}>Large</p>
      </div>
      <div style={{ width: "150px" }}>
        <Image
          src="https://placedog.net/300/300"
          alt="Full circle"
          aspectRatio="1/1"
          rounded="full"
        />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "14px" }}>Full (Circle)</p>
      </div>
    </div>
  ),
};

/**
 * Object-fit comparison.
 * Shows how different fit modes handle the same image.
 */
export const ObjectFitVariants: Story = {
  args: {},
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ width: "250px" }}>
        <Image
          src="https://placedog.net/800/600"
          alt="Cover fit"
          aspectRatio="1/1"
          objectFit="cover"
        />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "14px" }}>Cover (crops to fill)</p>
      </div>
      <div style={{ width: "250px" }}>
        <Image
          src="https://placedog.net/800/600"
          alt="Contain fit"
          aspectRatio="1/1"
          objectFit="contain"
        />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "14px" }}>Contain (fits inside)</p>
      </div>
      <div style={{ width: "250px" }}>
        <Image
          src="https://placedog.net/800/600"
          alt="Fill fit"
          aspectRatio="1/1"
          objectFit="fill"
        />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "14px" }}>Fill (stretches)</p>
      </div>
    </div>
  ),
};

/**
 * Different aspect ratios side-by-side.
 * Demonstrates visual consistency across varying proportions.
 */
export const AspectRatioShowcase: Story = {
  args: {},
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", maxWidth: "900px" }}>
      <div>
        <Image
          src="https://placedog.net/1600/900"
          alt="16:9 landscape"
          aspectRatio="16/9"
          rounded="md"
        />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "14px" }}>16:9</p>
      </div>
      <div>
        <Image
          src="https://placedog.net/1200/900"
          alt="4:3 standard"
          aspectRatio="4/3"
          rounded="md"
        />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "14px" }}>4:3</p>
      </div>
      <div>
        <Image
          src="https://placedog.net/900/600"
          alt="3:2 photo"
          aspectRatio="3/2"
          rounded="md"
        />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "14px" }}>3:2</p>
      </div>
      <div>
        <Image
          src="https://placedog.net/600/600"
          alt="1:1 square"
          aspectRatio="1/1"
          rounded="md"
        />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "14px" }}>1:1</p>
      </div>
      <div>
        <Image
          src="https://placedog.net/600/800"
          alt="3:4 portrait"
          aspectRatio="3/4"
          rounded="md"
        />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "14px" }}>3:4</p>
      </div>
      <div>
        <Image
          src="https://placedog.net/900/1600"
          alt="9:16 vertical"
          aspectRatio="9/16"
          rounded="md"
        />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "14px" }}>9:16</p>
      </div>
    </div>
  ),
};

/**
 * Wildly different source image sizes.
 * All maintain consistent 16:9 display despite very different sources.
 */
export const DifferentSourceSizes: Story = {
  args: {},
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <div style={{ width: "300px" }}>
        <Image
          src="https://placedog.net/200/150"
          alt="Small source 200x150"
          aspectRatio="16/9"
          rounded="md"
        />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}>Source: 200x150</p>
      </div>
      <div style={{ width: "300px" }}>
        <Image
          src="https://placedog.net/800/600"
          alt="Medium source 800x600"
          aspectRatio="16/9"
          rounded="md"
        />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}>Source: 800x600</p>
      </div>
      <div style={{ width: "300px" }}>
        <Image
          src="https://placedog.net/1920/1080"
          alt="Large source 1920x1080"
          aspectRatio="16/9"
          rounded="md"
        />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}>Source: 1920x1080</p>
      </div>
    </div>
  ),
};

/**
 * Avatar-style images (perfect circles).
 * Common for user profiles and testimonials.
 */
export const Avatars: Story = {
  args: {},
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <div style={{ width: "64px" }}>
        <Image
          src="https://placedog.net/300/300"
          alt="Small avatar"
          aspectRatio="1/1"
          rounded="full"
        />
      </div>
      <div style={{ width: "96px" }}>
        <Image
          src="https://placedog.net/400/400"
          alt="Medium avatar"
          aspectRatio="1/1"
          rounded="full"
        />
      </div>
      <div style={{ width: "128px" }}>
        <Image
          src="https://placedog.net/500/500"
          alt="Large avatar"
          aspectRatio="1/1"
          rounded="full"
        />
      </div>
    </div>
  ),
};

/**
 * Product grid demonstration.
 * Shows how Image component maintains consistency in product listings.
 */
export const ProductGrid: Story = {
  args: {},
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", maxWidth: "800px" }}>
      <Image src="https://placedog.net/640/480" alt="Product 1" aspectRatio="1/1" rounded="md" />
      <Image src="https://placedog.net/800/600" alt="Product 2" aspectRatio="1/1" rounded="md" />
      <Image src="https://placedog.net/1024/768" alt="Product 3" aspectRatio="1/1" rounded="md" />
      <Image src="https://placedog.net/500/400" alt="Product 4" aspectRatio="1/1" rounded="md" />
      <Image src="https://placedog.net/720/540" alt="Product 5" aspectRatio="1/1" rounded="md" />
      <Image src="https://placedog.net/960/720" alt="Product 6" aspectRatio="1/1" rounded="md" />
      <Image src="https://placedog.net/1200/900" alt="Product 7" aspectRatio="1/1" rounded="md" />
      <Image src="https://placedog.net/400/300" alt="Product 8" aspectRatio="1/1" rounded="md" />
    </div>
  ),
};

/**
 * Hero image with rounded corners.
 * Typical landing page hero image styling.
 */
export const HeroImage: Story = {
  args: {},
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <Image
        src="https://placedog.net/1200/675"
        alt="Hero section image"
        aspectRatio="16/9"
        rounded="lg"
      />
    </div>
  ),
};
