import type { Meta, StoryObj } from "@storybook/react-vite";
import FeatureCard from ".";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";

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
const meta = {
  title: "Molecules/FeatureCard",
  component: FeatureCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A flexible feature card component for displaying product benefits, features, and capabilities on landing pages.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default feature card with icon, headline, and description.
 * Left-aligned text (default).
 */
export const Default: Story = {
  args: {},
  render: () => (
    <div style={{ maxWidth: "300px" }}>
      <FeatureCard
        image={<Image src="https://placedog.net/200/200" alt="Lightning fast icon" aspectRatio="1/1" rounded="md" width={64} height={64} />}
        headline={<h3>Lightning Fast</h3>}
        description={
          <p>
            Load times under 1 second guaranteed. Optimized performance for the
            best user experience.
          </p>
        }
      />
    </div>
  ),
};

/**
 * Feature card with center alignment.
 * Common for grid layouts on landing pages.
 */
export const Centered: Story = {
  args: {},
  render: () => (
    <div style={{ maxWidth: "300px" }}>
      <FeatureCard
        image={<Image src="https://placedog.net/300/300" alt="Security icon" aspectRatio="1/1" rounded="md" width={64} height={64} />}
        headline={<h3>Enterprise Security</h3>}
        description={
          <p>
            Bank-level encryption and compliance. Your data is always protected
            and secure.
          </p>
        }
        align="center"
      />
    </div>
  ),
};

/**
 * Feature card with CTA link.
 * Encourages further engagement and exploration.
 */
export const WithCTA: Story = {
  args: {},
  render: () => (
    <div style={{ maxWidth: "300px" }}>
      <FeatureCard
        image={<Image src="https://placedog.net/400/400" alt="Analytics icon" aspectRatio="1/1" rounded="md" width={64} height={64} />}
        headline={<h3>Advanced Analytics</h3>}
        description={
          <p>
            Real-time insights and reporting. Make data-driven decisions with
            confidence.
          </p>
        }
        cta={<a href="#">Learn more →</a>}
      />
    </div>
  ),
};

/**
 * Minimal feature card with just headline and description.
 * Good for simple, text-focused features.
 */
export const Minimal: Story = {
  args: {},
  render: () => (
    <div style={{ maxWidth: "300px" }}>
      <FeatureCard
        headline={<h3>Easy to Use</h3>}
        description={<p>Intuitive interface that anyone can master in minutes.</p>}
      />
    </div>
  ),
};

/**
 * Feature card with custom styling.
 * Demonstrates style prop flexibility for theming.
 */
export const CustomStyled: Story = {
  args: {},
  render: () => (
    <div style={{ maxWidth: "300px" }}>
      <FeatureCard
        image={<Image src="https://placedog.net/500/500" alt="Customization icon" aspectRatio="1/1" rounded="md" width={64} height={64} />}
        headline={<h3>Fully Customizable</h3>}
        description={<p>Theme and style to match your brand perfectly.</p>}
        style={{
          backgroundColor: "#f0f4ff",
          padding: "24px",
          borderRadius: "8px",
          border: "2px solid #3b82f6",
        }}
      />
    </div>
  ),
};

/**
 * Three-column feature grid demonstration.
 * Shows typical landing page feature section layout.
 */
export const ThreeColumnGrid: Story = {
  args: {},
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", maxWidth: "1200px" }}>
      <FeatureCard
        image={<Image src="https://placedog.net/600/600" alt="Performance icon" aspectRatio="1/1" rounded="md" width={64} height={64} />}
        headline={<h3>Fast Performance</h3>}
        description={<p>Lightning-fast load times and optimal performance.</p>}
        align="center"
      />
      <FeatureCard
        image={<Image src="https://placedog.net/700/700" alt="Design icon" aspectRatio="1/1" rounded="md" width={64} height={64} />}
        headline={<h3>Beautiful Design</h3>}
        description={<p>Stunning interfaces that users love to interact with.</p>}
        align="center"
      />
      <FeatureCard
        image={<Image src="https://placedog.net/800/800" alt="Security icon" aspectRatio="1/1" rounded="md" width={64} height={64} />}
        headline={<h3>Secure by Default</h3>}
        description={<p>Enterprise-grade security built into every feature.</p>}
        align="center"
      />
    </div>
  ),
};

/**
 * Feature cards with image icons instead of emoji.
 * More professional appearance for B2B landing pages.
 */
export const WithImageIcon: Story = {
  args: {},
  render: () => (
    <div style={{ maxWidth: "300px" }}>
      <FeatureCard
        image={
          <Image
            src="https://placedog.net/100/100"
            alt="Feature icon"
            aspectRatio="1/1"
            rounded="md"
            width={64}
            height={64}
          />
        }
        headline={<h3>Professional Quality</h3>}
        description={
          <p>
            Premium features designed for businesses that demand excellence.
          </p>
        }
      />
    </div>
  ),
};

/**
 * Feature card with button CTA.
 * Higher engagement than text links.
 */
export const WithButtonCTA: Story = {
  args: {},
  render: () => (
    <div style={{ maxWidth: "300px" }}>
      <FeatureCard
        image={<Image src="https://placedog.net/250/250" alt="Target icon" aspectRatio="1/1" rounded="md" width={64} height={64} />}
        headline={<h3>Conversion Optimized</h3>}
        description={
          <p>Built using proven patterns that increase conversions by 86%.</p>
        }
        cta={<Button>Get Started</Button>}
        align="center"
      />
    </div>
  ),
};

/**
 * Feature cards stacked vertically.
 * Mobile-friendly layout demonstration.
 */
export const VerticalStack: Story = {
  args: {},
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "400px" }}>
      <FeatureCard
        image={<Image src="https://placedog.net/350/350" alt="Mobile icon" aspectRatio="1/1" rounded="md" width={48} height={48} />}
        headline={<h4>Mobile First</h4>}
        description={<p>Designed for mobile, enhanced for desktop.</p>}
      />
      <FeatureCard
        image={<Image src="https://placedog.net/450/450" alt="Browser icon" aspectRatio="1/1" rounded="md" width={48} height={48} />}
        headline={<h4>Cross Browser</h4>}
        description={<p>Works perfectly in all modern browsers.</p>}
      />
      <FeatureCard
        image={<Image src="https://placedog.net/550/550" alt="Accessibility icon" aspectRatio="1/1" rounded="md" width={48} height={48} />}
        headline={<h4>Accessible</h4>}
        description={<p>WCAG 2.1 compliant and screen reader friendly.</p>}
      />
    </div>
  ),
};

/**
 * Real-world example with benefit-focused copy.
 * Demonstrates proper content structure for conversion.
 */
export const ConversionOptimized: Story = {
  args: {},
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px", maxWidth: "1200px" }}>
      <FeatureCard
        image={<Image src="https://placedog.net/150/150" alt="Cost savings icon" aspectRatio="1/1" rounded="md" width={72} height={72} />}
        headline={<h3>Reduce Costs by 40%</h3>}
        description={
          <p>
            Automate repetitive tasks and eliminate manual work. Save thousands
            in operational expenses.
          </p>
        }
        cta={<a href="#">See ROI Calculator →</a>}
        align="center"
      />
      <FeatureCard
        image={<Image src="https://placedog.net/650/650" alt="Time savings icon" aspectRatio="1/1" rounded="md" width={72} height={72} />}
        headline={<h3>Save 10 Hours Weekly</h3>}
        description={
          <p>
            Streamline workflows and boost team productivity. Spend time on what
            really matters.
          </p>
        }
        cta={<a href="#">View Case Studies →</a>}
        align="center"
      />
      <FeatureCard
        image={<Image src="https://placedog.net/750/750" alt="Growth icon" aspectRatio="1/1" rounded="md" width={72} height={72} />}
        headline={<h3>Double Your Conversions</h3>}
        description={
          <p>
            Proven optimization strategies that deliver results. Join 10,000+
            successful customers.
          </p>
        }
        cta={<a href="#">Start Free Trial →</a>}
        align="center"
      />
    </div>
  ),
};

/**
 * Feature card with full-width image.
 * Image spans the entire width of the card for visual impact.
 */
export const WithFullWidthImage: Story = {
  args: {},
  render: () => (
    <div style={{ maxWidth: "400px" }}>
      <FeatureCard
        image={<Image src="https://placedog.net/800/600" alt="Feature showcase" aspectRatio="16/9" rounded="none" />}
        headline={<h3>Visual Storytelling</h3>}
        description={
          <p>
            Capture attention with compelling imagery. Full-width images create
            immediate impact and engagement.
          </p>
        }
        cta={<a href="#">Explore Examples →</a>}
        align="center"
      />
    </div>
  ),
};

/**
 * Three-column grid with full-width images.
 * Demonstrates product/service cards with hero images.
 */
export const ImageCardGrid: Story = {
  args: {},
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", maxWidth: "1200px" }}>
      <FeatureCard
        image={<Image src="https://placedog.net/600/400" alt="Product A" aspectRatio="3/2" rounded="none" />}
        headline={<h3>Product Suite A</h3>}
        description={<p>Complete solution for small teams and startups.</p>}
        cta={<Button variant="secondary">Learn More</Button>}
        align="center"
      />
      <FeatureCard
        image={<Image src="https://placedog.net/700/500" alt="Product B" aspectRatio="3/2" rounded="none" />}
        headline={<h3>Product Suite B</h3>}
        description={<p>Advanced features for growing businesses.</p>}
        cta={<Button variant="secondary">Learn More</Button>}
        align="center"
      />
      <FeatureCard
        image={<Image src="https://placedog.net/800/550" alt="Product C" aspectRatio="3/2" rounded="none" />}
        headline={<h3>Product Suite C</h3>}
        description={<p>Enterprise-grade tools for large organizations.</p>}
        cta={<Button variant="secondary">Learn More</Button>}
        align="center"
      />
    </div>
  ),
};
