import type { Meta, StoryObj } from "@storybook/react-vite";
import Page from ".";

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
const meta = {
  title: "Atoms/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A simple page container component for displaying content.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic page with simple content.
 */
export const Default: Story = {
  args: {
    children: "This is the page content",
  },
};

/**
 * Page with longer content.
 */
export const WithLongerContent: Story = {
  args: {
    children: "This is a longer piece of content that demonstrates how the Page component handles more text.",
  },
};

/**
 * Article page demonstrating all HTML typography elements.
 * Shows how the Page component automatically styles headings, paragraphs, lists, blockquotes, and more.
 */
export const Article: Story = {
  render: () => (
    <Page>
      <h1>The Complete Guide to Landing Page Design</h1>
      <p className="lead">
        Learn how to create high-converting landing pages that drive results for your business.
        This comprehensive guide covers everything from psychology to implementation.
      </p>

      <h2>Introduction</h2>
      <p>
        Landing pages are single-page websites designed with one focused objective: conversion.
        Whether you're collecting email addresses, selling products, or driving sign-ups,
        a well-designed landing page can make the difference between success and failure.
      </p>
      <p>
        In this article, we'll explore the key principles that make landing pages effective,
        backed by research and real-world examples.
      </p>

      <h2>Key Principles</h2>
      <p>
        Building an effective landing page requires understanding several core concepts:
      </p>

      <h3>Visual Hierarchy</h3>
      <p>
        Visual hierarchy guides users through your content in order of importance.
        The most critical elements should have the most visual weight.
      </p>
      <ul>
        <li>Headlines should be largest and highest contrast</li>
        <li>Call-to-action buttons need prominence through size and color</li>
        <li>Supporting details can be smaller and lower contrast</li>
        <li>White space creates emphasis and prevents overwhelm</li>
      </ul>

      <h3>The Conversion Pyramid</h3>
      <p>Every landing page should progress through five stages:</p>
      <ol>
        <li><strong>Functional</strong> - The page works technically</li>
        <li><strong>Accessible</strong> - Works on all devices and browsers</li>
        <li><strong>Usable</strong> - Easy to navigate and understand</li>
        <li><strong>Intuitive</strong> - Feels familiar and predictable</li>
        <li><strong>Persuasive</strong> - Drives action through design</li>
      </ol>

      <h3>Content Flow</h3>
      <p>
        Your content should answer visitor questions in this specific order:
      </p>
      <ol>
        <li>"What is this?" - Clear value proposition</li>
        <li>"How will it help me?" - Benefits over features</li>
        <li>"How does it work?" - Simple explanation</li>
        <li>"Why should I trust this?" - Social proof</li>
        <li>"What should I do next?" - Clear call-to-action</li>
      </ol>

      <h2>Important Statistics</h2>
      <blockquote>
        "Companies that increased their number of landing pages from 10 to 15 saw a 55% increase in leads."
        <footer>- HubSpot Research</footer>
      </blockquote>

      <p>Other key findings from landing page research:</p>
      <ul>
        <li>47% of users expect pages to load in 2 seconds or less</li>
        <li>Mobile traffic accounts for over 50% of web visits</li>
        <li>Video can increase conversions by up to 86%</li>
        <li>Personalized CTAs convert 202% better than generic ones</li>
      </ul>

      <h2>Code Example</h2>
      <p>Here's how to use this component library:</p>
      <pre>
        <code>{`import { Page, Section, Button } from 'yalpf';

function LandingPage() {
  return (
    <Page>
      <Section>
        <h1>Your Headline</h1>
        <p>Your value proposition.</p>
        <Button size="large">Get Started</Button>
      </Section>
    </Page>
  );
}`}</code>
      </pre>

      <h2>Best Practices</h2>
      
      <h3>Headlines</h3>
      <ul>
        <li>Keep them between 6-12 words</li>
        <li>Focus on benefits, not features</li>
        <li>Use specific numbers when possible</li>
        <li>Make them scannable at a glance</li>
      </ul>

      <h3>Call-to-Action Buttons</h3>
      <ul>
        <li>Use action-oriented verbs: Start, Get, Claim, Join</li>
        <li>Include benefit in the text: "Get My Free Guide"</li>
        <li>Ensure high contrast with background</li>
        <li>Make them large enough (44x44px minimum)</li>
      </ul>

      <h3>Forms</h3>
      <ul>
        <li>Each field reduces completion by ~11%</li>
        <li>Stick to 3-5 fields maximum</li>
        <li>Use single-column layouts</li>
        <li>Provide inline validation</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <p><strong>Don't:</strong></p>
      <ul>
        <li>Use generic stock photos of people pointing at things</li>
        <li>Bury your CTA below the fold</li>
        <li>Ask for too much information upfront</li>
        <li>Use industry jargon or complex language</li>
        <li>Forget to test on mobile devices</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Creating effective landing pages is both an art and a science. By following these
        principles and continuously testing your designs, you can build pages that convert
        visitors into customers.
      </p>
      <p>
        Remember: <em>simplicity is key</em>. Every element on your page should serve a purpose.
        If it doesn't contribute to your conversion goal, remove it.
      </p>

      <hr />

      <h6>Additional Resources</h6>
      <ul>
        <li><a href="#">Landing Page Best Practices Guide</a></li>
        <li><a href="#">Conversion Rate Optimization Checklist</a></li>
        <li><a href="#">A/B Testing Framework</a></li>
      </ul>

      <p><small>Last updated: December 2025</small></p>
    </Page>
  ),
};
