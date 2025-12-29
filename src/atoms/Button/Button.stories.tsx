import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import Button from ".";
import Section from "../Section";

/**
 * Button - CTA-Optimized Component
 * 
 * A conversion-focused button component following landing page best practices:
 * 
 * ## CTA Best Practices
 * 
 * **Action-Oriented Text:**
 * - ✅ "Get Started Free", "Start Free Trial", "Join Now"
 * - ✅ "Download Guide", "Claim Your Discount", "Try It Free"
 * - ❌ "Submit", "Click Here", "Enter"
 * 
 * **Benefit-Focused:**
 * - ✅ "Get My Free Guide" (emphasizes benefit)
 * - ❌ "Download" (just the action)
 * 
 * **Visual Hierarchy:**
 * - Primary: Main conversion goal (one per section)
 * - Secondary: Alternative lower-commitment action
 * - Outline: Tertiary actions, navigation
 * 
 * ## Accessibility
 * 
 * - Minimum 44x44px touch target (medium/large sizes)
 * - Keyboard navigable with visible focus states
 * - Screen reader friendly with ARIA support
 * - Loading states prevent double-submission
 * 
 * ## Performance Impact
 * 
 * Studies show proper CTA design increases conversions by 20-50%:
 * - Action-oriented text: +25% click-through
 * - High contrast colors: +32% visibility
 * - Clear visual hierarchy: +40% conversion
 */
const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "CTA-optimized button with variants, sizes, loading states, and icon support.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * Primary button - use for main conversion goals.
 * Highest visual weight, one per section recommended.
 */
export const Primary: Story = {
  args: {},
  render: () => <Button variant="primary">Get Started Free</Button>,
};

/**
 * Secondary button - use for alternative actions.
 * Lower commitment than primary, like "Learn More".
 */
export const Secondary: Story = {
  args: {},
  render: () => <Button variant="secondary">Learn More</Button>,
};

/**
 * Outline button - use for tertiary actions.
 * Minimal emphasis, navigation or less important actions.
 */
export const Outline: Story = {
  args: {},
  render: () => <Button variant="outline">View Details</Button>,
};

/**
 * Size variants showing touch target compliance.
 * Medium and Large meet the 44x44px minimum for mobile.
 */
export const Sizes: Story = {
  args: {},
  render: () => (
    <Section>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
        <Button size="small">Small Button</Button>
        <Button size="medium">Medium Button (Default)</Button>
        <Button size="large">Large Button</Button>
      </div>
    </Section>
  ),
};

/**
 * Loading state prevents double-submission and shows progress.
 * Critical for form submissions and async operations.
 */
export const Loading: Story = {
  args: {},
  render: () => (
    <Section>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <Button variant="primary" isLoading>Processing...</Button>
        <Button variant="secondary" isLoading>Loading</Button>
        <Button variant="outline" isLoading>Please wait</Button>
      </div>
    </Section>
  ),
};

/**
 * Disabled state for unavailable actions.
 * Use sparingly - consider hiding unavailable options instead.
 */
export const Disabled: Story = {
  args: {},
  render: () => (
    <Section>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <Button variant="primary" disabled>Disabled Primary</Button>
        <Button variant="secondary" disabled>Disabled Secondary</Button>
        <Button variant="outline" disabled>Disabled Outline</Button>
      </div>
    </Section>
  ),
};

/**
 * Full width buttons for mobile-first layouts.
 * Recommended for primary CTAs on mobile screens.
 */
export const FullWidth: Story = {
  args: {},
  render: () => (
    <Section>
      <div style={{ maxWidth: "400px", width: "100%" }}>
        <Button variant="primary" fullWidth>Start Free Trial</Button>
      </div>
    </Section>
  ),
};

/**
 * Buttons with icons for enhanced visual communication.
 * Icons should support the action, not replace clear text.
 */
export const WithIcons: Story = {
  args: {},
  render: () => (
    <Section>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Button iconBefore={<span>🚀</span>}>Launch Product</Button>
        <Button variant="secondary" iconAfter={<span>→</span>}>Continue</Button>
        <Button variant="outline" iconBefore={<span>⬇</span>}>Download</Button>
      </div>
    </Section>
  ),
};

/**
 * Hero section CTA example.
 * Large primary button with benefit-focused text.
 */
export const HeroCTA: Story = {
  args: {},
  render: () => (
    <Section>
      <Section.Inner style={{ textAlign: "center", maxWidth: "700px" }}>
        <h1>Build Landing Pages That Convert</h1>
        <p className="lead">
          Get access to conversion-optimized components and proven design patterns.
          No credit card required.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginTop: "24px" }}>
          <Button size="large">Start Free Trial</Button>
          <Button variant="secondary" size="large">Watch Demo</Button>
        </div>
        <small style={{ display: "block", marginTop: "16px" }}>
          Free 14-day trial • No credit card required • Cancel anytime
        </small>
      </Section.Inner>
    </Section>
  ),
};

/**
 * Pricing card CTA example.
 * Full-width button as primary conversion point.
 */
export const PricingCTA: Story = {
  args: {},
  render: () => (
    <Section>
      <div
        style={{
          maxWidth: "320px",
          padding: "32px",
          border: "2px solid #e0e0e0",
          borderRadius: "12px",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "8px" }}>Professional</h3>
        <div style={{ textAlign: "center", margin: "16px 0" }}>
          <div style={{ fontSize: "48px", fontWeight: "700", lineHeight: "1" }}>$49</div>
          <small>per month</small>
        </div>
        <ul style={{ marginBottom: "24px", paddingLeft: "20px" }}>
          <li>Unlimited landing pages</li>
          <li>Advanced analytics</li>
          <li>A/B testing tools</li>
          <li>Priority support</li>
        </ul>
        <Button variant="primary" fullWidth size="large">
          Get Started
        </Button>
        <p style={{ textAlign: "center", fontSize: "14px", marginTop: "16px", marginBottom: "0" }}>
          14-day money-back guarantee
        </p>
      </div>
    </Section>
  ),
};

/**
 * Feature section CTAs.
 * Multiple buttons with clear visual hierarchy.
 */
export const FeatureCTAs: Story = {
  args: {},
  render: () => (
    <Section>
      <Section.Inner style={{ maxWidth: "600px" }}>
        <h2 style={{ textAlign: "center" }}>Everything You Need to Succeed</h2>
        <p style={{ textAlign: "center" }}>
          Our platform includes all the tools you need to create, test, and optimize
          high-converting landing pages.
        </p>
        
        <div style={{ marginTop: "32px" }}>
          <h3>Drag & Drop Builder</h3>
          <p>Create beautiful pages without coding. Our intuitive builder makes it easy.</p>
          <Button variant="outline" iconAfter={<span>→</span>}>
            Explore Builder
          </Button>
        </div>

        <div style={{ marginTop: "32px" }}>
          <h3>A/B Testing</h3>
          <p>Test different variations and optimize for maximum conversions.</p>
          <Button variant="outline" iconAfter={<span>→</span>}>
            Learn About Testing
          </Button>
        </div>

        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <Button size="large">Start Building Today</Button>
        </div>
      </Section.Inner>
    </Section>
  ),
};

/**
 * Form submission CTA example.
 * Loading state demonstration for async operations.
 */
export const FormCTA: Story = {
  args: {},
  render: () => {
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };

    return (
      <Section>
        <div style={{ maxWidth: "400px" }}>
          <h2>Get Your Free Guide</h2>
          <p>
            Enter your email to receive our comprehensive guide to landing page optimization.
          </p>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "16px" }}>
              <input
                type="email"
                placeholder="your@email.com"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "16px",
                  border: "2px solid #d0d0d0",
                  borderRadius: "6px",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <Button type="submit" fullWidth isLoading={isLoading}>
              {isLoading ? "Sending..." : "Get Free Guide"}
            </Button>
            <small style={{ display: "block", marginTop: "12px", textAlign: "center" }}>
              We respect your privacy. Unsubscribe anytime.
            </small>
          </form>
        </div>
      </Section>
    );
  },
};

/**
 * Action-oriented text examples.
 * Shows the difference between good and poor CTA copy.
 */
export const CTACopyExamples: Story = {
  args: {},
  render: () => (
    <Section>
      <Section.Inner style={{ maxWidth: "700px" }}>
        <h2>CTA Text Best Practices</h2>
        
        <div style={{ marginTop: "32px" }}>
          <h3 style={{ color: "#22c55e", marginBottom: "16px" }}>✅ Good CTA Text</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Button>Get Started Free</Button>
            <Button>Start My Free Trial</Button>
            <Button>Download Your Free Guide</Button>
            <Button>Claim Your 50% Discount</Button>
            <Button>Join 10,000+ Happy Customers</Button>
          </div>
        </div>

        <div style={{ marginTop: "32px" }}>
          <h3 style={{ color: "#ef4444", marginBottom: "16px" }}>❌ Poor CTA Text</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Button variant="outline">Submit</Button>
            <Button variant="outline">Click Here</Button>
            <Button variant="outline">Learn More</Button>
            <Button variant="outline">Continue</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>

        <div style={{ marginTop: "32px", padding: "20px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
          <h4 style={{ marginTop: "0" }}>Why It Matters</h4>
          <p style={{ marginBottom: "0" }}>
            Benefit-focused, action-oriented CTAs can increase conversions by 25% or more.
            Use specific verbs (Get, Start, Join, Try) and highlight the benefit (Free, Instant, Easy).
          </p>
        </div>
      </Section.Inner>
    </Section>
  ),
};
