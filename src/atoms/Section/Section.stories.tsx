import type { Meta, StoryObj } from "@storybook/react-vite";
import Section from ".";

/**
 * The Section component is a container with no fixed height.
 * Use Section.Inner to wrap content with centered max-width layout.
 * 
 * ## Usage
 * 
 * ```tsx
 * import Section from './components/Section';
 * 
 * function App() {
 *   return (
 *     <Section>
 *       <Section.Inner>
 *         Your content goes here
 *       </Section.Inner>
 *     </Section>
 *   );
 * }
 * ```
 */
const meta = {
  title: "MyComponents/Section",
  component: Section,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A flexible container component with no fixed height. Use Section.Inner for centered content layout.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic section with simple content inside Section.Inner.
 */
export const Default: Story = {
  args: {},
  render: () => (
    <Section>
      <Section.Inner>
        <h2>Section Content</h2>
        <p>This is a section with an inner container that centers content.</p>
      </Section.Inner>
    </Section>
  ),
};

/**
 * Demonstrates the difference between centered (default) and full-width layouts.
 * Background colors added to visualize the container boundaries.
 */
export const CenteredVsFullWidth: Story = {
  args: {},
  render: () => (
    <>
      <Section>
        <Section.Inner>
          <div style={{ backgroundColor: "#e3f2fd", padding: "20px" }}>
            <h2>Centered Layout (Default)</h2>
            <p>This content is centered with a max-width of 1200px. The blue background shows the Inner container bounds.</p>
          </div>
        </Section.Inner>
      </Section>
      <Section>
        <Section.Inner fullWidth>
          <div style={{ backgroundColor: "#fff3e0", padding: "20px" }}>
            <h2>Full Width Layout</h2>
            <p>This content takes the full width of the viewport. The orange background shows it extends edge to edge (minus padding).</p>
          </div>
        </Section.Inner>
      </Section>
    </>
  ),
};

/**
 * Using inline styles directly via style prop.
 * All standard HTML props are supported including style, className, id, etc.
 */
export const WithInlineStyles: Story = {
  args: {},
  render: () => (
    <>
      <Section style={{
        background: "linear-gradient(to right, #fa709a 0%, #fee140 100%)",
      }}>
        <Section.Inner style={{
          color: "white",
          textAlign: "center",
          textShadow: "0 2px 4px rgba(0,0,0,0.2)",
          padding: "80px 0"
        }}>
          <h1>Styled with inline styles</h1>
          <p>No CSS classes needed - all props passed directly through</p>
        </Section.Inner>
      </Section>

      <Section style={{
        backgroundColor: "#f8f9fa",
        borderTop: "3px solid #dee2e6",
        borderBottom: "3px solid #dee2e6",
        padding: "60px 0",
      }}>
        <Section.Inner style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
        }}>
          <h2>Card Style Section</h2>
          <p>Background on Section, card styling on Inner</p>
        </Section.Inner>
      </Section>
    </>
  ),
};

/**
 * Section with multiple content elements including a button.
 */
export const WithMultipleElements: Story = {
  args: {},
  render: () => (
    <Section>
      <Section.Inner>
        <h2>Get Started Today</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button style={{ padding: "10px 20px", cursor: "pointer" }}>
          Learn More
        </button>
      </Section.Inner>
    </Section>
  ),
};

/**
 * Multiple section inners stacked inside one section.
 */
export const StackedSections: Story = {
  args: {},
  render: () => (
    <>
      <Section>
        <Section.Inner>
          <h2>First Section</h2>
          <p>Content in the first section with centered layout.</p>
        </Section.Inner>
        <Section.Inner fullWidth>
          <h2>Second Section</h2>
          <p>Content in the second section, full width.</p>
        </Section.Inner>
        <Section.Inner>
          <h2>Third Section</h2>
          <p>Content in the third section, maintaining consistent layout.</p>
        </Section.Inner>
      </Section>
    </>
  ),
};

/**
 * Section with a list of items.
 */
export const WithList: Story = {
  args: {},
  render: () => (
    <Section>
      <Section.Inner>
        <h2>Features</h2>
        <ul>
          <li>Flexible container with no fixed height</li>
          <li>Centered content with max-width constraint</li>
          <li>Responsive padding and spacing</li>
          <li>Semantic HTML using section element</li>
        </ul>
      </Section.Inner>
    </Section>
  ),
};

/**
 * Section with form elements.
 */
export const WithForm: Story = {
  args: {},
  render: () => (
    <Section>
      <Section.Inner>
        <h2>Contact Us</h2>
        <p>Fill out the form below to get in touch.</p>
        <form style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
          <input type="text" placeholder="Your name" style={{ padding: "8px" }} />
          <input type="email" placeholder="Your email" style={{ padding: "8px" }} />
          <textarea placeholder="Your message" rows={4} style={{ padding: "8px" }} />
          <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>
            Send Message
          </button>
        </form>
      </Section.Inner>
    </Section>
  ),
};
