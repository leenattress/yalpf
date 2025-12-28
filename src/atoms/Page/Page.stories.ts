import type { Meta, StoryObj } from "@storybook/react-vite";
import Page from ".";

/**
 * The Page component is a simple container that displays a title and children content.
 * 
 * ## Usage
 * 
 * ```tsx
 * import Page from './components/Page';
 * 
 * function App() {
 *   return (
 *     <Page title="My Page Title">
 *       Your content goes here
 *     </Page>
 *   );
 * }
 * ```
 */
const meta = {
  title: "MyComponents/Page",
  component: Page,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A container component that displays a title and children content.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "The title of the Page",
      control: {
        type: "text",
      },
    },
    children: {
      description: "The children of the Page",
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This is the first example of the Page component with a simple title and children.
 */
export const PageOne: Story = {
  args: {
    title: "This is the Page One title",
    children: "These are the Page One children",
  },
};

/**
 * This is the second example with a longer title to demonstrate text wrapping.
 */
export const PageTwo: Story = {
  args: {
    title: "This is the Page Twoooooooooo title",
    children: "These are the Page Two children",
  },
};
