import type { Meta, StoryObj } from "@storybook/react-vite";
import Spacer from ".";

/**
 * Spacer Component for Vertical Spacing
 * 
 * The Spacer component provides consistent vertical spacing between elements
 * to improve readability and visual rhythm in your layouts.
 * 
 * ## Size Options
 * 
 * - **xs**: 8px - Minimal spacing between closely related items
 * - **sm**: 16px - Small spacing for tight layouts
 * - **md**: 24px - Default, medium spacing (most common)
 * - **lg**: 32px - Large spacing between sections
 * - **xl**: 48px - Extra large spacing for major sections
 * - **2xl**: 64px - Very large spacing for distinct sections
 * - **3xl**: 96px - Maximum spacing for page-level divisions
 * 
 * ## Usage Guidelines
 * 
 * - Use **md** (default) for standard spacing between paragraphs
 * - Use **lg** or **xl** before major headings (H2)
 * - Use **2xl** or **3xl** between major page sections
 * - Use **xs** or **sm** for tight, compact layouts
 */
const meta = {
  title: "Atoms/Spacer",
  component: Spacer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A flexible spacing component for creating consistent vertical rhythm in your layouts.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * All size variants displayed together for comparison
 */
export const AllSizes: Story = {
  args: {},
  render: () => (
    <div style={{ width: "600px", border: "1px solid #e0e0e0" }}>
      <div style={{ padding: "16px", background: "#f5f5f5" }}>XS (8px)</div>
      <Spacer size="xs" />
      <div style={{ padding: "16px", background: "#f5f5f5" }}>End</div>

      <div style={{ marginTop: "32px" }}>
        <div style={{ padding: "16px", background: "#f5f5f5" }}>SM (16px)</div>
        <Spacer size="sm" />
        <div style={{ padding: "16px", background: "#f5f5f5" }}>End</div>
      </div>

      <div style={{ marginTop: "32px" }}>
        <div style={{ padding: "16px", background: "#f5f5f5" }}>MD (24px) - Default</div>
        <Spacer size="md" />
        <div style={{ padding: "16px", background: "#f5f5f5" }}>End</div>
      </div>

      <div style={{ marginTop: "32px" }}>
        <div style={{ padding: "16px", background: "#f5f5f5" }}>LG (32px)</div>
        <Spacer size="lg" />
        <div style={{ padding: "16px", background: "#f5f5f5" }}>End</div>
      </div>

      <div style={{ marginTop: "32px" }}>
        <div style={{ padding: "16px", background: "#f5f5f5" }}>XL (48px)</div>
        <Spacer size="xl" />
        <div style={{ padding: "16px", background: "#f5f5f5" }}>End</div>
      </div>

      <div style={{ marginTop: "32px" }}>
        <div style={{ padding: "16px", background: "#f5f5f5" }}>2XL (64px)</div>
        <Spacer size="2xl" />
        <div style={{ padding: "16px", background: "#f5f5f5" }}>End</div>
      </div>

      <div style={{ marginTop: "32px" }}>
        <div style={{ padding: "16px", background: "#f5f5f5" }}>3XL (96px)</div>
        <Spacer size="3xl" />
        <div style={{ padding: "16px", background: "#f5f5f5" }}>End</div>
      </div>
    </div>
  ),
};

/**
 * Default medium spacing (24px)
 */
export const Default: Story = {
  args: {},
  render: () => (
    <div style={{ border: "1px solid #e0e0e0", width: "400px" }}>
      <div style={{ padding: "16px", background: "#f5f5f5" }}>Content Above</div>
      <Spacer />
      <div style={{ padding: "16px", background: "#f5f5f5" }}>Content Below</div>
    </div>
  ),
};

/**
 * Small spacing for compact layouts
 */
export const SmallSpacing: Story = {
  args: {},
  render: () => (
    <div style={{ border: "1px solid #e0e0e0", width: "400px" }}>
      <div style={{ padding: "16px", background: "#f5f5f5" }}>Item 1</div>
      <Spacer size="sm" />
      <div style={{ padding: "16px", background: "#f5f5f5" }}>Item 2</div>
      <Spacer size="sm" />
      <div style={{ padding: "16px", background: "#f5f5f5" }}>Item 3</div>
    </div>
  ),
};

/**
 * Large spacing between major sections
 */
export const LargeSpacing: Story = {
  args: {},
  render: () => (
    <div style={{ border: "1px solid #e0e0e0", width: "400px" }}>
      <div style={{ padding: "16px", background: "#f5f5f5" }}>
        <h2>Section One</h2>
        <p>Content for the first section.</p>
      </div>
      <Spacer size="xl" />
      <div style={{ padding: "16px", background: "#f5f5f5" }}>
        <h2>Section Two</h2>
        <p>Content for the second section.</p>
      </div>
    </div>
  ),
};

/**
 * Extra large spacing for page-level divisions
 */
export const PageDivisions: Story = {
  args: {},
  render: () => (
    <div style={{ border: "1px solid #e0e0e0", width: "400px" }}>
      <div style={{ padding: "24px", background: "#f5f5f5", textAlign: "center" }}>
        <h1>Hero Section</h1>
      </div>
      <Spacer size="2xl" />
      <div style={{ padding: "24px", background: "#f5f5f5", textAlign: "center" }}>
        <h2>Features Section</h2>
      </div>
      <Spacer size="2xl" />
      <div style={{ padding: "24px", background: "#f5f5f5", textAlign: "center" }}>
        <h2>Testimonials Section</h2>
      </div>
    </div>
  ),
};
