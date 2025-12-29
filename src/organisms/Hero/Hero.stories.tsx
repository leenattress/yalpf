import type { Meta, StoryObj } from "@storybook/react-vite";
import Hero from ".";
import Button from "../../atoms/Button";
import { ThemedStoryWrapper, lightTheme, darkTheme } from "../../theme";
import type { Theme } from "../../theme/types";

// Define custom args for hero stories with theme support
interface HeroStoryArgs {
  theme: Theme;
}

/**
 * Hero Component for Landing Pages
 * 
 * A conversion-optimized hero section designed for landing pages.
 * Follows best practices from landing page research:
 * 
 * - **Headlines**: 6-12 words, benefit-focused
 * - **Above the fold**: All critical elements visible without scrolling
 * - **Mobile-first**: Responsive design that stacks on mobile
 * - **CTAs**: Action-oriented, benefit-focused language
 * - **Layout variants**: Default, reversed, and centered options
 * 
 * ## Usage
 * 
 * ```tsx
 * <Hero
 *   headline={<h1>Increase Sales by 47%</h1>}
 *   subheadline={<p>AI-powered subject lines that convert</p>}
 *   primaryCTA={<Button size="large">Start Free Trial</Button>}
 *   secondaryCTA={<Button variant="outline">Watch Demo</Button>}
 *   media={<img src="product.png" alt="Product" />}
 * />
 * ```
 */
const meta = {
  title: "Organisms/Hero",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A flexible hero section component for landing pages with support for headlines, CTAs, and media content.",
      },
    },
  },
  argTypes: {
    theme: {
      control: "select",
      options: ["light", "dark"],
      mapping: {
        light: lightTheme,
        dark: darkTheme,
      },
      description: "Theme to apply to the hero section",
      defaultValue: "light",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<HeroStoryArgs>;

export default meta;
type Story = StoryObj<HeroStoryArgs>;

/**
 * Default hero with all elements: headline, subheadline, primary CTA, secondary CTA, and media.
 * Media appears on the right side on desktop, stacks above content on mobile.
 */
export const Default: Story = {
  args: {
    theme: lightTheme,
  },
  render: (args) => (
    <ThemedStoryWrapper theme={args.theme}>
      <Hero
        headline={<h1>Build Beautiful Landing Pages in Minutes</h1>}
        subheadline={
          <p>
            Create conversion-optimized landing pages with our flexible React
            component library. No design skills required.
          </p>
        }
        primaryCTA={
          <Button
            size="large"
            style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}
          >
            Get Started Free
          </Button>
        }
        secondaryCTA={
          <Button
            variant="outline"
            style={{ borderColor: "var(--color-secondary)", color: "var(--color-secondary)" }}
          >
            View Demo
          </Button>
        }
        media={
          <img
            src="https://placedog.net/640/480"
            alt="Product demonstration"
          />
        }
      />
    </ThemedStoryWrapper>
  )
};

/**
 * Minimal hero with just headline and primary CTA.
 * Perfect for simple, focused conversion goals.
 */
export const Minimal: Story = {
  args: {
    theme: lightTheme,
  },
  render: (args) => (
    <ThemedStoryWrapper theme={args.theme}>
      <Hero
        headline={<h1>Start Your Free Trial Today</h1>}
        primaryCTA={
          <Button
            size="large"
            style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}
          >
            Sign Up Free
          </Button>
        }
      />
    </ThemedStoryWrapper>
  ),
};

/**
 * Reversed layout with media on the left, content on the right.
 * Good for visual variety on multi-section pages.
 */
export const Reversed: Story = {
  args: {
    theme: darkTheme,
  },
  render: (args) => (
    <ThemedStoryWrapper theme={args.theme}>
      <Hero
        headline={<h1>Trusted by 10,000+ Businesses</h1>}
        subheadline={
          <p>
            Join the companies that have increased their conversions by an
            average of 86% using our platform.
          </p>
        }
        primaryCTA={
          <Button
            size="large"
            style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}
          >
            Start Free Trial
          </Button>
        }
        secondaryCTA={
          <Button
            variant="outline"
            style={{ borderColor: "var(--color-secondary)", color: "var(--color-secondary)" }}
          >
            See Case Studies
          </Button>
        }
        media={
          <img
            src="https://placedog.net/800/600"
            alt="Customer success stories"
          />
        }
        layout="reversed"
      />
    </ThemedStoryWrapper>
  ),
};

/**
 * Centered layout with no media column.
 * Ideal for announcement pages or simple value propositions.
 */
export const Centered: Story = {
  args: {
    theme: lightTheme,
  },
  render: (args) => (
    <ThemedStoryWrapper theme={args.theme}>
      <Hero
        headline={<h1>The Future of Landing Pages is Here</h1>}
        subheadline={
          <p>
            Revolutionary new approach to building high-converting landing pages.
            Simple, powerful, and built for modern marketing teams.
          </p>
        }
        primaryCTA={
          <Button
            size="large"
            style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}
          >
            Get Early Access
          </Button>
        }
        secondaryCTA={
          <Button
            variant="secondary"
            style={{ backgroundColor: "var(--color-secondary)", color: "var(--color-text-on-secondary)" }}
          >
            Learn More
          </Button>
        }
        layout="centered"
        align="center"
      />
    </ThemedStoryWrapper>
  ),
};

/**
 * Hero with video instead of image.
 * Video demonstrations can increase conversions by 86%.
 */
export const WithVideo: Story = {
  args: {
    theme: darkTheme,
  },
  render: (args) => (
    <ThemedStoryWrapper theme={args.theme}>
      <Hero
        headline={<h1>See It in Action</h1>}
        subheadline={
          <p>Watch how easy it is to create stunning landing pages in under 2 minutes.</p>
        }
        primaryCTA={
          <Button
            size="large"
            style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}
          >
            Try It Free
          </Button>
        }
        media={
          <video
            controls
            style={{ maxWidth: "100%", borderRadius: "8px" }}
            poster="https://placedog.net/700/500"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        }
      />
    </ThemedStoryWrapper>
  ),
};

/**
 * SaaS-focused hero with benefit-driven headline.
 * Follows the "Increase [metric] by [percentage]" formula.
 */
export const SaaSFocused: Story = {
  args: {
    theme: lightTheme,
  },
  render: (args) => (
    <ThemedStoryWrapper theme={args.theme}>
      <Hero
        headline={<h1>Increase Email Opens by 47%</h1>}
        subheadline={
          <p>
            AI-powered subject line optimization that learns from your audience.
            Get more clicks, more engagement, and more conversions.
          </p>
        }
        primaryCTA={
          <Button
            size="large"
            style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}
          >
            Start 14-Day Free Trial
          </Button>
        }
        secondaryCTA={
          <Button
            variant="outline"
            style={{ borderColor: "var(--color-secondary)", color: "var(--color-secondary)" }}
          >
            Watch 2-Min Demo
          </Button>
        }
        media={
          <img
            src="https://placedog.net/750/450"
            alt="Email analytics dashboard"
          />
        }
      />
    </ThemedStoryWrapper>
  ),
};

/**
 * E-commerce hero with urgency and scarcity elements.
 * Uses action-oriented CTA language.
 */
export const ECommerce: Story = {
  args: {
    theme: lightTheme,
  },
  render: (args) => (
    <ThemedStoryWrapper theme={args.theme}>
      <Hero
        headline={<h1>Limited Time: 50% Off All Premium Plans</h1>}
        subheadline={
          <p>
            Upgrade your online store with premium features. Offer ends in 48
            hours. No credit card required to start.
          </p>
        }
        primaryCTA={
          <Button
            size="large"
            style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}
          >
            Claim Your Discount
          </Button>
        }
        secondaryCTA={
          <Button
            variant="outline"
          >
            View Pricing
          </Button>
        }
        media={
          <img
            src="https://placedog.net/650/400"
            alt="Special offer"
          />
        }
      />
    </ThemedStoryWrapper>
  ),
};

/**
 * B2B hero emphasizing trust and ROI.
 * Includes specific metrics and business outcomes.
 */
export const B2B: Story = {
  args: {
    theme: darkTheme,
  },
  render: (args) => (
    <ThemedStoryWrapper theme={args.theme}>
      <Hero
        headline={<h1>Reduce Customer Acquisition Cost by 34%</h1>}
        subheadline={
          <p>
            Enterprise-grade landing page platform trusted by Fortune 500
            companies. Increase ROI, reduce friction, and scale your marketing
            operations.
          </p>
        }
        primaryCTA={
          <Button
            size="large"
            style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}
          >
            Request Demo
          </Button>
        }
        secondaryCTA={
          <Button
            variant="secondary"
            style={{ backgroundColor: "var(--color-secondary)", color: "var(--color-text-on-secondary)" }}
          >
            Download White Paper
          </Button>
        }
        media={
          <img
            src="https://placedog.net/720/540"
            alt="Enterprise platform"
          />
        }
      />
    </ThemedStoryWrapper>
  ),
};

/**
 * Hero with custom styling applied via style prop.
 * Demonstrates how developers can theme the component.
 */
export const CustomStyled: Story = {
  args: {
    theme: darkTheme,
  },
  render: (args) => (
    <ThemedStoryWrapper theme={args.theme}>
      <Hero
        headline={<h1>Your Brand, Your Style</h1>}
        subheadline={<p>Fully customizable with inline styles or CSS</p>}
        primaryCTA={
          <Button
            size="large"
            style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}
          >
            Get Started
          </Button>
        }
        media={
          <img
            src="https://placedog.net/680/480"
            alt="Customization options"
          />
        }
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
        }}
      />
    </ThemedStoryWrapper>
  ),
};

/**
 * Real-world example with benefit-focused copy.
 * Demonstrates proper headline length (6-12 words) and action-oriented CTAs.
 */
export const ConversionOptimized: Story = {
  args: {
    theme: lightTheme,
  },
  render: (args) => (
    <ThemedStoryWrapper theme={args.theme}>
      <Hero
        headline={<h1>Double Your Landing Page Conversions in 30 Days</h1>}
        subheadline={
          <p>
            Join 50,000+ marketers using our proven framework to create
            high-converting landing pages. No coding required. Results guaranteed.
          </p>
        }
        primaryCTA={
          <Button
            size="large"
            style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}
          >
            Start Free Trial - No Credit Card
          </Button>
        }
        secondaryCTA={
          <Button
            variant="outline"
            style={{ borderColor: "var(--color-secondary)", color: "var(--color-secondary)" }}
          >
            See Success Stories
          </Button>
        }
        media={
          <img
            src="https://placedog.net/780/520"
            alt="Conversion rate increase graph"
          />
        }
      />

    </ThemedStoryWrapper>
  ),
};
