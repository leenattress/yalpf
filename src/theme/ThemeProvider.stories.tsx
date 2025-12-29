import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeProvider } from "./ThemeProvider";
import { lightTheme, darkTheme } from "./themes";
import Page from "../atoms/Page";
import Section from "../atoms/Section";
import Button from "../atoms/Button";

// Custom args interface for stories using render functions
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ThemeProviderStoryArgs {}

const meta = {
  title: "Foundation/ThemeProvider",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
ThemeProvider wraps your application to provide consistent theming across all components.
Supports light and dark themes with customizable typography and color schemes.

## Usage

\`\`\`tsx
import { ThemeProvider, lightTheme, darkTheme } from 'your-library';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <YourComponents />
    </ThemeProvider>
  );
}
\`\`\`

## Available Themes

- **lightTheme** (default): Clean, bright theme optimized for daytime viewing
- **darkTheme**: Modern dark theme for low-light environments and reduced eye strain
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<ThemeProviderStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Light theme provides clean, bright colors optimized for daytime viewing.
 * Features dark text on light backgrounds with vibrant accent colors.
 */
export const LightTheme: Story = {
  args: {},
  render: () => (
    <ThemeProvider theme={lightTheme}>
      <Page>
        <Section style={{ backgroundColor: "var(--color-background)", color: "var(--color-text)" }}>
          <Section.Inner>
            <h1>Light Theme</h1>
            <p className="lead">
              Clean, bright theme optimized for daytime viewing with vibrant accent colors.
            </p>
            <h2>Why Choose Light Theme?</h2>
            <p>
              Light themes provide excellent readability in well-lit environments and are familiar
              to most users. They create a clean, professional appearance perfect for business
              applications and content-focused websites.
            </p>
            <h3>Key Benefits</h3>
            <ul>
              <li>Optimal for bright environments</li>
              <li>Familiar and professional appearance</li>
              <li>Better color vibrancy on screens</li>
              <li>Easier to read in daylight</li>
            </ul>
            <blockquote>
              <p>
                "Light themes remain the standard for professional applications due to their
                clarity and widespread familiarity."
              </p>
              <footer>— UI Design Handbook</footer>
            </blockquote>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              <Button size="large" style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}>Primary Action</Button>
              <Button size="large" style={{ backgroundColor: "var(--color-secondary)", color: "var(--color-text-on-secondary)" }}>Secondary Action</Button>
            </div>
          </Section.Inner>
        </Section>
      </Page>
    </ThemeProvider>
  ),
};

/**
 * Dark theme provides modern dark colors for low-light environments.
 * Features light text on dark backgrounds with adjusted contrast ratios.
 */
export const DarkTheme: Story = {
  args: {},
  render: () => (
    <ThemeProvider theme={darkTheme}>
      <Page>
        <Section style={{ backgroundColor: "var(--color-background)", color: "var(--color-text)" }}>
          <Section.Inner>
            <h1>Dark Theme</h1>
            <p className="lead">
              Modern dark theme optimized for low-light environments and reduced eye strain.
            </p>
            <h2>Why Choose Dark Theme?</h2>
            <p>
              Dark themes reduce eye strain in low-light conditions and have become increasingly
              popular. They save battery on OLED screens and provide a modern, premium aesthetic
              that many users prefer.
            </p>
            <h3>Key Benefits</h3>
            <ul>
              <li>Reduced eye strain in dim lighting</li>
              <li>Better for OLED battery life</li>
              <li>Modern, premium appearance</li>
              <li>Easier on eyes at night</li>
            </ul>
            <blockquote>
              <p>
                "Dark mode has shifted from novelty to necessity, with studies showing reduced
                eye fatigue during extended screen time in low-light environments."
              </p>
              <footer>— UX Research Report</footer>
            </blockquote>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              <Button size="large" style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}>Primary Action</Button>
              <Button size="large" style={{ backgroundColor: "var(--color-secondary)", color: "var(--color-text-on-secondary)" }}>Secondary Action</Button>
            </div>
          </Section.Inner>
        </Section>
      </Page>
    </ThemeProvider>
  ),
};

/**
 * Side-by-side comparison of light and dark themes.
 * Useful for testing and selecting the right theme for your project.
 */
export const Comparison: Story = {
  args: {},
  render: () => (
    <Page>
      <Section>
        <Section.Inner>
          <h1 style={{ marginBottom: "2rem" }}>Theme Comparison</h1>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <ThemeProvider theme={lightTheme}>
              <div style={{ 
                backgroundColor: "var(--color-background)", 
                color: "var(--color-text)",
                border: "2px solid #e0e0e0", 
                padding: "1.5rem" 
              }}>
                <h2>Light Theme</h2>
                <p className="lead">Bright and clean</p>
                <h3>Features</h3>
                <p>
                  Perfect for daytime viewing with excellent readability in well-lit environments.
                  Vibrant colors and familiar design patterns.
                </p>
                <ul>
                  <li>Bright appearance</li>
                  <li>Daylight optimized</li>
                  <li>Professional feel</li>
                </ul>
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
                  <Button style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}>Primary</Button>
                  <Button style={{ backgroundColor: "var(--color-secondary)", color: "var(--color-text-on-secondary)" }}>Secondary</Button>
                </div>
              </div>
            </ThemeProvider>

            <ThemeProvider theme={darkTheme}>
              <div style={{ 
                backgroundColor: "var(--color-background)", 
                color: "var(--color-text)",
                border: "2px solid #4a5568", 
                padding: "1.5rem" 
              }}>
                <h2>Dark Theme</h2>
                <p className="lead">Modern and elegant</p>
                <h3>Features</h3>
                <p>
                  Ideal for low-light environments with reduced eye strain. Premium aesthetic
                  with carefully adjusted contrast ratios.
                </p>
                <ul>
                  <li>Dark appearance</li>
                  <li>Night optimized</li>
                  <li>Modern aesthetic</li>
                </ul>
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
                  <Button style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}>Primary</Button>
                  <Button style={{ backgroundColor: "var(--color-secondary)", color: "var(--color-text-on-secondary)" }}>Secondary</Button>
                </div>
              </div>
            </ThemeProvider>
          </div>
        </Section.Inner>
      </Section>
    </Page>
  ),
};

/**
 * Demonstrates theme integration with all typography elements and color variables.
 * Shows how the theme affects headings, paragraphs, lists, blockquotes, and colors.
 */
export const TypographyShowcase: Story = {
  args: {},
  render: () => (
    <ThemeProvider theme={darkTheme}>
      <Page>
        <Section style={{ backgroundColor: "var(--color-background)", color: "var(--color-text)" }}>
          <Section.Inner>
            <h1>Complete Theme Showcase</h1>
            <p className="lead">
              Demonstrating how themes apply to typography and color system.
            </p>

            <h2>All Heading Levels</h2>
            <h1>Heading 1 - Main Page Title</h1>
            <h2>Heading 2 - Section Heading</h2>
            <h3>Heading 3 - Subsection</h3>
            <h4>Heading 4 - Minor Heading</h4>
            <h5>Heading 5 - Small Heading</h5>
            <h6>Heading 6 - Smallest Heading</h6>

            <h2>Paragraphs and Text</h2>
            <p className="lead">
              Lead paragraphs introduce sections with larger, more prominent text that captures
              attention and provides context.
            </p>
            <p>
              Regular paragraphs provide the main content and body text. They should be highly
              readable and comfortable to scan. Theme affects both the font family and colors
              applied to all text elements.
            </p>
            <p>
              Multiple paragraphs demonstrate proper spacing and readability. <strong>Strong text</strong>{" "}
              and <em>emphasized text</em> inherit the theme's font family and colors while maintaining
              their distinct styling.
            </p>

            <h2>Lists</h2>
            <h3>Unordered List</h3>
            <ul>
              <li>First item in the list</li>
              <li>Second item with more content</li>
              <li>Third item demonstrating list styling</li>
            </ul>

            <h3>Ordered List</h3>
            <ol>
              <li>Numbered item one</li>
              <li>Numbered item two</li>
              <li>Numbered item three</li>
            </ol>

            <h2>Blockquotes</h2>
            <blockquote>
              <p>
                "Typography is the craft of endowing human language with a durable visual form,
                and thus with an independent existence."
              </p>
              <footer>— Robert Bringhurst, The Elements of Typographic Style</footer>
            </blockquote>

            <h2>Code</h2>
            <p>
              Inline code like <code>const theme = useTheme();</code> uses monospace font family
              defined in the theme.
            </p>
            <pre>
              <code>{`function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Page>Your content</Page>
    </ThemeProvider>
  );
}`}</code>
            </pre>

            <hr />

            <h2>Color Variables</h2>
            <p>
              Themes provide color variables for consistent styling across components:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ 
                backgroundColor: "var(--color-primary)", 
                color: "var(--color-text-on-primary)",
                padding: "1rem",
                borderRadius: "0.25rem"
              }}>
                <strong>Primary</strong>
                <p style={{ margin: 0, fontSize: "0.875rem" }}>--color-primary</p>
              </div>
              <div style={{ 
                backgroundColor: "var(--color-secondary)", 
                color: "var(--color-text-on-secondary)",
                padding: "1rem",
                borderRadius: "0.25rem"
              }}>
                <strong>Secondary</strong>
                <p style={{ margin: 0, fontSize: "0.875rem" }}>--color-secondary</p>
              </div>
              <div style={{ 
                backgroundColor: "var(--color-background)", 
                color: "var(--color-text)",
                padding: "1rem",
                borderRadius: "0.25rem",
                border: "1px solid currentColor"
              }}>
                <strong>Background</strong>
                <p style={{ margin: 0, fontSize: "0.875rem" }}>--color-background</p>
              </div>
            </div>

            <h2>Actions</h2>
            <p>
              Buttons and interactive elements use theme colors for consistency:
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button size="large" style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}>Primary Action</Button>
              <Button size="large" style={{ backgroundColor: "var(--color-secondary)", color: "var(--color-text-on-secondary)" }}>Secondary Action</Button>
              <Button variant="outline">Outlined Action</Button>
            </div>
          </Section.Inner>
        </Section>
      </Page>
    </ThemeProvider>
  ),
};

/**
 * Minimal example showing basic ThemeProvider usage with light theme.
 * Copy this pattern to get started quickly.
 */
export const MinimalExample: Story = {
  args: {},
  render: () => (
    <ThemeProvider theme={lightTheme}>
      <Page>
        <Section style={{ backgroundColor: "var(--color-background)", color: "var(--color-text)" }}>
          <Section.Inner>
            <h1>Welcome to Your App</h1>
            <p>This content uses the light theme with custom colors.</p>
            <Button style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}>Get Started</Button>
          </Section.Inner>
        </Section>
      </Page>
    </ThemeProvider>
  ),
};
