import type { Meta, StoryObj } from "@storybook/react-vite";
import Section from ".";
import Button from "../Button";

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
  title: "Atoms/Section",
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
        <Button>
          Learn More
        </Button>
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
 * Two column layout (50/50 split).
 */
export const TwoColumnsEqual: Story = {
  args: {},
  render: () => (
    <Section>
      <Section.Inner>
        <Section.Column>
          <h3>Left Column</h3>
          <p>This is the left column content. Both columns are equal width.</p>
        </Section.Column>
        <Section.Column>
          <h3>Right Column</h3>
          <p>This is the right column content. They stack on mobile.</p>
        </Section.Column>
      </Section.Inner>
    </Section>
  ),
};

/**
 * Two column layout (60/40 split).
 */
export const TwoColumnsUnequal: Story = {
  args: {},
  render: () => (
    <Section>
      <Section.Inner>
        <Section.Column width={3}>
          <h3>Wider Column (60%)</h3>
          <p>This column takes up 60% of the space (width=3).</p>
        </Section.Column>
        <Section.Column width={2}>
          <h3>Narrower Column (40%)</h3>
          <p>This column takes up 40% of the space (width=2).</p>
        </Section.Column>
      </Section.Inner>
    </Section>
  ),
};

/**
 * Three column layout (33/33/33 split).
 */
export const ThreeColumns: Story = {
  args: {},
  render: () => (
    <Section>
      <Section.Inner>
        <Section.Column>
          <h3>Column 1</h3>
          <p>Equal width column.</p>
        </Section.Column>
        <Section.Column>
          <h3>Column 2</h3>
          <p>Equal width column.</p>
        </Section.Column>
        <Section.Column>
          <h3>Column 3</h3>
          <p>Equal width column.</p>
        </Section.Column>
      </Section.Inner>
    </Section>
  ),
};

/**
 * Four column layout (25/25/25/25 split).
 */
export const FourColumns: Story = {
  args: {},
  render: () => (
    <Section>
      <Section.Inner gap="15px">
        <Section.Column>
          <h4>Feature 1</h4>
          <p>First feature.</p>
        </Section.Column>
        <Section.Column>
          <h4>Feature 2</h4>
          <p>Second feature.</p>
        </Section.Column>
        <Section.Column>
          <h4>Feature 3</h4>
          <p>Third feature.</p>
        </Section.Column>
        <Section.Column>
          <h4>Feature 4</h4>
          <p>Fourth feature.</p>
        </Section.Column>
      </Section.Inner>
    </Section>
  ),
};

/**
 * Columns with background colors to visualize the layout.
 */
export const ColumnsWithBackground: Story = {
  args: {},
  render: () => (
    <Section style={{ padding: "40px 0" }}>
      <Section.Inner gap="30px">
        <Section.Column width={2} style={{ backgroundColor: "#e3f2fd", padding: "20px" }}>
          <h3>Main Content (66%)</h3>
          <p>This wider column could contain your main content or article.</p>
        </Section.Column>
        <Section.Column width={1} style={{ backgroundColor: "#fff3e0", padding: "20px" }}>
          <h3>Sidebar (33%)</h3>
          <p>This narrower column works well for sidebars or supplementary information.</p>
        </Section.Column>
      </Section.Inner>
    </Section>
  ),
};
