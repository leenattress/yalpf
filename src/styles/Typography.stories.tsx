import type { Meta, StoryObj } from "@storybook/react-vite";
import Spacer from "../atoms/Spacer";
import Section from "../atoms/Section";
import Button from "../atoms/Button";

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
const meta = {
  title: "Styles/Typography",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Typography mixin for automatic HTML tag styling. Already included in Section and other containers.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Complete typography scale showing all heading levels and text styles
 */
export const TypeScale: Story = {
  args: {},
  render: () => (
    <Section>
      <Section.Inner style={{ maxWidth: "800px" }}>
        <h1>Heading 1 - Hero Headline</h1>
        <p>
          Desktop: 48px, Mobile: 32px. Use for primary page headlines in hero
          sections. Keep to 6-12 words, benefit-focused.
        </p>

        <Spacer size="xl" />
        <h2>Heading 2 - Section Heading</h2>
        <p>
          Desktop: 36px, Mobile: 28px. Use for major section headings like
          "Features", "Testimonials", "Pricing".
        </p>

        <h3>Heading 3 - Subsection Heading</h3>
        <p>
          Desktop: 28px, Mobile: 24px. Use for feature titles and subsection
          headings. Clear and scannable.
        </p>

        <h4>Heading 4 - Minor Heading</h4>
        <p>
          Desktop: 24px, Mobile: 20px. Use for smaller section divisions and
          product details.
        </p>

        <h5>Heading 5 - Small Heading</h5>
        <p>
          Desktop: 20px, Mobile: 18px. Use for supporting information sections.
        </p>

        <h6>Heading 6 - Smallest Heading</h6>
        <p>
          Desktop: 18px, Mobile: 16px. Use for fine print sections and footnotes.
        </p>

        <p className="lead">
          Lead paragraph for important introductory text. Slightly larger than
          body text at 20px desktop, 18px mobile. Use class="lead" on paragraph tags.
        </p>

        <p>
          Standard paragraph text at 16px with optimal 1.5 line height. Maximum
          width of 75 characters for comfortable reading. Use for body copy, but
          keep to 2-3 sentences maximum on landing pages.
        </p>

        <small>
          Small text for disclaimers and fine print at 14px. Use the &lt;small&gt; tag
          for terms, conditions, and secondary information.
        </small>
      </Section.Inner>
    </Section>
  ),
};

/**
 * Hero section example using regular HTML tags
 */
export const HeroExample: Story = {
  args: {},
  render: () => (
    <Section>
      <Section.Inner style={{ maxWidth: "700px", textAlign: "center" }}>
        <h1>Build Landing Pages That Convert</h1>
        <p className="lead">
          A complete React component library designed for creating high-converting
          landing pages with proven design patterns and best practices.
        </p>
      </Section.Inner>
    </Section>
  ),
};

/**
 * Feature section example
 */
export const FeatureSectionExample: Story = {
  args: {},
  render: () => (
    <Section>
      <Section.Inner style={{ maxWidth: "600px" }}>
        <h2 style={{ textAlign: "center" }}>Key Features</h2>
        <p style={{ textAlign: "center" }}>
          Everything you need to create beautiful, high-performing landing pages.
        </p>

        <div style={{ marginTop: "32px" }}>
          <h3>Lightning Fast Performance</h3>
          <p>
            Optimized components that load in under 1 second. Built with performance
            as a priority from the ground up.
          </p>

          <h3>Mobile-First Design</h3>
          <p>
            Responsive typography that looks great on all devices. Automatically
            adapts from mobile to desktop screens.
          </p>
        </div>
      </Section.Inner>
    </Section>
  ),
};

/**
 * Text alignment using inline styles
 */
export const AlignmentOptions: Story = {
  args: {},
  render: () => (
    <Section>
      <Section.Inner style={{ maxWidth: "600px" }}>
        <h2>Left Aligned (Default)</h2>
        <p>
          This is the default alignment for most content. Best for reading
          longer paragraphs of text.
        </p>

        <h2 style={{ textAlign: "center" }}>Center Aligned</h2>
        <p style={{ textAlign: "center" }}>
          Use center alignment for headlines, hero sections, and important
          announcements that need emphasis.
        </p>

        <h2 style={{ textAlign: "right" }}>Right Aligned</h2>
        <p style={{ textAlign: "right" }}>
          Right alignment is less common but can be useful for specific design
          layouts or RTL languages.
        </p>
      </Section.Inner>
    </Section>
  ),
};

/**
 * Font weight variants using inline styles
 */
export const WeightVariants: Story = {
  args: {},
  render: () => (
    <Section>
      <Section.Inner style={{ maxWidth: "600px" }}>
        <h2 style={{ fontWeight: 400 }}>Normal Weight (400)</h2>
        <h2 style={{ fontWeight: 500 }}>Medium Weight (500)</h2>
        <h2 style={{ fontWeight: 600 }}>Semibold Weight (600)</h2>
        <h2 style={{ fontWeight: 700 }}>Bold Weight (700 - Default)</h2>

        <div style={{ marginTop: "24px" }}>
          <p style={{ fontWeight: 400 }}>Normal body text (400 - Default)</p>
          <p style={{ fontWeight: 500 }}>Medium body text (500)</p>
          <p style={{ fontWeight: 600 }}>Semibold body text (600)</p>
          <p style={{ fontWeight: 700 }}>Bold body text (700)</p>
        </div>
      </Section.Inner>
    </Section>
  ),
};

/**
 * Content with legal disclaimer
 */
export const WithDisclaimer: Story = {
  args: {},
  render: () => (
    <Section>
      <Section.Inner style={{ maxWidth: "600px" }}>
        <h2 style={{ textAlign: "center" }}>Start Your Free Trial</h2>
        <p className="lead" style={{ textAlign: "center" }}>
          No credit card required. Get started in minutes.
        </p>
        <div style={{ textAlign: "center" }}>
          <Button size="large" style={{ marginTop: "16px" }}>
            Sign Up Free
          </Button>
        </div>
        <small style={{ textAlign: "center" }}>
          *By signing up, you agree to our Terms of Service and Privacy Policy.
          Cancel anytime.
        </small>
      </Section.Inner>
    </Section>
  ),
};

/**
 * Pricing card example
 */
export const PricingExample: Story = {
  args: {},
  render: () => (
    <Section>
      <div
        style={{
          maxWidth: "300px",
          padding: "32px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Professional</h3>
        <div style={{ textAlign: "center", margin: "16px 0" }}>
          <h1 style={{ marginBottom: "0" }}>$49</h1>
          <small>per month</small>
        </div>
        <p>Perfect for growing teams that need advanced features.</p>
        <Button
          fullWidth
          style={{
            marginTop: "16px",
          }}
        >
          Get Started
        </Button>
        <small style={{ marginTop: "16px" }}>
          Cancel anytime. No questions asked.
        </small>
      </div>
    </Section>
  ),
};

/**
 * Article content example with lists
 */
export const ArticleContent: Story = {
  args: {},
  render: () => (
    <Section>
      <Section.Inner style={{ maxWidth: "700px" }}>
        <h1>The Complete Guide to Landing Page Design</h1>
        <small>Published on December 29, 2025 · 5 min read</small>

        <p className="lead">
          Creating a high-converting landing page requires understanding user
          psychology, visual hierarchy, and proven design patterns.
        </p>

        <Spacer size="xl" />
        <h2>Why Typography Matters</h2>
        <p>
          Typography is the foundation of effective web design. The right font
          sizes, weights, and spacing make content scannable and engaging.
        </p>
        <p>
          Studies show that proper line height (1.5x for body text) and optimal
          line length (50-75 characters) significantly improve readability and
          user engagement.
        </p>

        <Spacer size="xl" />
        <h2>Best Practices</h2>
        <h3>Mobile-First Approach</h3>
        <p>
          Start with mobile designs and enhance for larger screens. Over 50% of
          web traffic comes from mobile devices.
        </p>

        <h3>Key Elements</h3>
        <ul>
          <li>Clear value proposition above the fold</li>
          <li>Strong visual hierarchy with proper heading levels</li>
          <li>Compelling call-to-action buttons</li>
          <li>Social proof and testimonials</li>
          <li>Mobile-responsive design</li>
        </ul>

        <h3>Typography Checklist</h3>
        <ol>
          <li>Use semantic HTML (h1, h2, h3, etc.)</li>
          <li>Maintain consistent vertical rhythm</li>
          <li>Limit line length to 50-75 characters</li>
          <li>Ensure sufficient contrast (4.5:1 minimum)</li>
          <li>Test on multiple devices</li>
        </ol>

        <small>
          *Statistics based on industry research from 2024-2025. Your results may
          vary.
        </small>
      </Section.Inner>
    </Section>
  ),
};
