import type { Meta, StoryObj } from "@storybook/react-vite";
import Carousel from "./index";
import Image from "../../atoms/Image";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CarouselStoryArgs {}

const meta = {
  title: "Molecules/Carousel",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<CarouselStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default carousel showing one item at a time
 */
export const Default: Story = {
  args: {},
  render: () => (
    <div style={{ width: "600px" }}>
      <Carousel
        items={[
          <Image src="https://placedog.net/600/400?1" alt="Dog 1" aspectRatio="3/2" />,
          <Image src="https://placedog.net/600/400?2" alt="Dog 2" aspectRatio="3/2" />,
          <Image src="https://placedog.net/600/400?3" alt="Dog 3" aspectRatio="3/2" />,
          <Image src="https://placedog.net/600/400?4" alt="Dog 4" aspectRatio="3/2" />,
        ]}
      />
    </div>
  ),
};

/**
 * Carousel showing three items at once
 */
export const ThreeItems: Story = {
  args: {},
  render: () => (
    <div style={{ width: "900px" }}>
      <Carousel
        items={[
          <Image src="https://placedog.net/400/300?1" alt="Dog 1" aspectRatio="4/3" />,
          <Image src="https://placedog.net/400/300?2" alt="Dog 2" aspectRatio="4/3" />,
          <Image src="https://placedog.net/400/300?3" alt="Dog 3" aspectRatio="4/3" />,
          <Image src="https://placedog.net/400/300?4" alt="Dog 4" aspectRatio="4/3" />,
          <Image src="https://placedog.net/400/300?5" alt="Dog 5" aspectRatio="4/3" />,
          <Image src="https://placedog.net/400/300?6" alt="Dog 6" aspectRatio="4/3" />,
        ]}
        itemsPerView={3}
        gap={16}
      />
    </div>
  ),
};

/**
 * Carousel with custom gap
 */
export const CustomGap: Story = {
  args: {},
  render: () => (
    <div style={{ width: "900px" }}>
      <Carousel
        items={[
          <Image src="https://placedog.net/400/300?1" alt="Dog 1" aspectRatio="4/3" />,
          <Image src="https://placedog.net/400/300?2" alt="Dog 2" aspectRatio="4/3" />,
          <Image src="https://placedog.net/400/300?3" alt="Dog 3" aspectRatio="4/3" />,
          <Image src="https://placedog.net/400/300?4" alt="Dog 4" aspectRatio="4/3" />,
        ]}
        itemsPerView={3}
        gap={32}
      />
    </div>
  ),
};

/**
 * Carousel with text content
 */
export const WithTextContent: Story = {
  args: {},
  render: () => (
    <div style={{ width: "600px" }}>
      <Carousel
        items={[
          <div style={{ padding: "40px", backgroundColor: "#f0f0f0", borderRadius: "8px", textAlign: "center" }}>
            <h3 style={{ marginTop: 0 }}>Slide 1</h3>
            <p>This is the first slide with text content</p>
          </div>,
          <div style={{ padding: "40px", backgroundColor: "#e0e0e0", borderRadius: "8px", textAlign: "center" }}>
            <h3 style={{ marginTop: 0 }}>Slide 2</h3>
            <p>This is the second slide with text content</p>
          </div>,
          <div style={{ padding: "40px", backgroundColor: "#d0d0d0", borderRadius: "8px", textAlign: "center" }}>
            <h3 style={{ marginTop: 0 }}>Slide 3</h3>
            <p>This is the third slide with text content</p>
          </div>,
        ]}
      />
    </div>
  ),
};

/**
 * Square images carousel
 */
export const SquareImages: Story = {
  args: {},
  render: () => (
    <div style={{ width: "600px" }}>
      <Carousel
        items={[
          <Image src="https://placedog.net/500/500?1" alt="Dog 1" aspectRatio="1/1" rounded="lg" />,
          <Image src="https://placedog.net/500/500?2" alt="Dog 2" aspectRatio="1/1" rounded="lg" />,
          <Image src="https://placedog.net/500/500?3" alt="Dog 3" aspectRatio="1/1" rounded="lg" />,
          <Image src="https://placedog.net/500/500?4" alt="Dog 4" aspectRatio="1/1" rounded="lg" />,
        ]}
      />
    </div>
  ),
};

/**
 * Two items per view
 */
export const TwoItems: Story = {
  args: {},
  render: () => (
    <div style={{ width: "700px" }}>
      <Carousel
        items={[
          <Image src="https://placedog.net/400/300?1" alt="Dog 1" aspectRatio="4/3" rounded="md" />,
          <Image src="https://placedog.net/400/300?2" alt="Dog 2" aspectRatio="4/3" rounded="md" />,
          <Image src="https://placedog.net/400/300?3" alt="Dog 3" aspectRatio="4/3" rounded="md" />,
          <Image src="https://placedog.net/400/300?4" alt="Dog 4" aspectRatio="4/3" rounded="md" />,
          <Image src="https://placedog.net/400/300?5" alt="Dog 5" aspectRatio="4/3" rounded="md" />,
        ]}
        itemsPerView={2}
        gap={24}
      />
    </div>
  ),
};

/**
 * Inline controls - arrows positioned on left and right, aligned with content
 */
export const InlineControls: Story = {
  args: {},
  render: () => (
    <div style={{ width: "900px" }}>
      <Carousel
        items={[
          <Image src="https://placedog.net/400/300?1" alt="Dog 1" aspectRatio="4/3" />,
          <Image src="https://placedog.net/400/300?2" alt="Dog 2" aspectRatio="4/3" />,
          <Image src="https://placedog.net/400/300?3" alt="Dog 3" aspectRatio="4/3" />,
          <Image src="https://placedog.net/400/300?4" alt="Dog 4" aspectRatio="4/3" />,
          <Image src="https://placedog.net/400/300?5" alt="Dog 5" aspectRatio="4/3" />,
          <Image src="https://placedog.net/400/300?6" alt="Dog 6" aspectRatio="4/3" />,
        ]}
        itemsPerView={3}
        gap={16}
        controlsPosition="inline"
      />
    </div>
  ),
};

/**
 * Inline controls with single item
 */
export const InlineControlsSingleItem: Story = {
  args: {},
  render: () => (
    <div style={{ width: "700px" }}>
      <Carousel
        items={[
          <Image src="https://placedog.net/600/400?1" alt="Dog 1" aspectRatio="3/2" rounded="lg" />,
          <Image src="https://placedog.net/600/400?2" alt="Dog 2" aspectRatio="3/2" rounded="lg" />,
          <Image src="https://placedog.net/600/400?3" alt="Dog 3" aspectRatio="3/2" rounded="lg" />,
          <Image src="https://placedog.net/600/400?4" alt="Dog 4" aspectRatio="3/2" rounded="lg" />,
        ]}
        controlsPosition="inline"
      />
    </div>
  ),
};
