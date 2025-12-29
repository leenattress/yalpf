# YALPF - React Component Library for Landing Pages

## Architecture Overview

This is an **npm-distributed React component library** built with TypeScript, styled-components, and Rollup. Components are exported from `src/index.ts` as both CJS and ESM bundles. The library follows **Atomic Design** principles with components organized by complexity level.

### Atomic Design Structure

The library uses Atomic Design methodology to organize components by complexity:

**Atoms** (`src/atoms/`) - Basic building blocks that can't be broken down further:
- Single-purpose, fundamental UI elements (buttons, inputs, labels, icons)
- No dependencies on other components
- Examples: `Page`, `Section`, `Button`, `Input`, `Icon`
- Usage: `<Section>`, `<Button>`

**Molecules** (`src/molecules/`) - Simple combinations of atoms:
- Groups of atoms functioning together as a unit
- Single, well-defined purpose
- Examples: `SearchBar` (input + button), `FormField` (label + input + error text)
- Usage: `<SearchBar onSearch={fn} />`, `<FormField label="Name" />`

**Organisms** (`src/organisms/`) - Complex UI components made from molecules/atoms:
- Distinct sections of an interface
- May contain business logic or state management
- Examples: `Header` (logo + nav + search), `HeroSection`, `ContactForm`
- Usage: `<Header navigation={items} />`, `<HeroSection title="Welcome" />`

**Templates** (`src/templates/`) - Page-level layouts (optional):
- Composition of organisms showing content structure
- Focus on layout, not actual content
- Examples: `LandingPageTemplate`, `TwoColumnLayout`
- Usage: `<LandingPageTemplate hero={<Hero />} features={<Features />} />`

**Pages** (`src/pages/`) - Specific instances of templates (optional):
- Templates populated with real content
- Typically used in applications, not component libraries
- For this library, prefer exporting flexible templates/organisms

### Key Constraint: NPM Library Context
**Critical**: This is a compiled library consumed via npm, NOT an application. CSS classes from consumers won't work because the styles aren't bundled. All styling must be:
- Defined via styled-components (in `styled.ts` files)
- Customizable via `style` prop or other HTML props passed through `ComponentPropsWithoutRef`

## Component Structure Pattern

Every component follows this exact file structure:
```
ComponentName/
  ├── index.tsx          # Component logic
  ├── types.tsx          # TypeScript interfaces
  ├── styled.ts          # styled-components definitions
  ├── ComponentName.test.tsx    # Vitest tests
  └── ComponentName.stories.tsx # Storybook stories
```

### Component Implementation Pattern

**1. Props Interface** (`types.tsx`):
```typescript
// Extend ComponentPropsWithoutRef to inherit all HTML props
export interface ComponentProps extends React.ComponentPropsWithoutRef<"div"> {
  children?: React.ReactNode;  // Always optional for Storybook compatibility
  customProp?: string;
}
```

**2. Styled Components** (`styled.ts`):
```typescript
// Use transient props ($propName) for styled-components to avoid DOM warnings
export const Container = styled.div<{ $fullWidth?: boolean }>`
  width: ${props => props.$fullWidth ? "100%" : "1200px"};
  font-family: sans-serif;  // All components use sans-serif by default
`;
```

**3. Component Logic** (`index.tsx`):
```typescript
// Always spread ...props to pass through all HTML attributes
const Component: React.FC<ComponentProps> = ({ children, customProp, ...props }) => {
  return <Container data-testid="component-container" {...props}>{children}</Container>;
};
```

### Compound Component Pattern (Section Example)
```typescript
// Section.Inner is a sub-component attached to Section
const SectionInner: React.FC<SectionInnerProps> = ({ children, fullWidth = false, ...props }) => {
  return <Inner $fullWidth={fullWidth} {...props}>{children}</Inner>;
};

const Section: React.FC<SectionProps> & { Inner: typeof SectionInner } = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

Section.Inner = SectionInner;  // Attach sub-component
```

## Testing Pattern (AAA Format)

All tests use Arrange-Act-Assert comments and follow this structure:
```typescript
it("renders the correct styling", () => {
  // Arrange
  const { getByTestId } = render(<Component>content</Component>);
  
  // Act
  const container = getByTestId("component-container");
  
  // Assert
  expect(container).toHaveStyle(`
    width: 100%;
    font-family: sans-serif;
  `);
});
```

## Storybook Configuration

**Module Resolution**: Use `moduleResolution: "bundler"` in `tsconfig.json` (required for Storybook type compatibility).

**Story Pattern - IMPORTANT FOR TYPESCRIPT:**

**When stories use custom `render` functions** (not relying on args to configure the component), you MUST:
1. Create a custom args interface (can be empty): `interface ComponentStoryArgs {}`
2. Use that interface in Meta: `Meta<ComponentStoryArgs>` instead of `Meta<typeof Component>`
3. REMOVE the `component` property from meta
4. Keep `args: {}` in each story

```typescript
import type { Meta, StoryObj } from "@storybook/react-vite";

// Custom args interface for stories with render functions
interface ComponentStoryArgs {}

const meta = {
  title: "MyComponents/ComponentName",
  // NO component property when using custom args interface
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<ComponentStoryArgs>;  // Use custom interface, NOT Meta<typeof Component>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},  // Required even if empty
  render: () => <Component>content</Component>,
};
```

**Why this pattern is required:**
- TypeScript expects `args` to match the component's props when using `Meta<typeof Component>`
- Stories with custom render functions don't use args to configure the component
- Using empty `args: {}` with `Meta<typeof Component>` causes type errors
- Solution: Custom args interface tells TypeScript we're not using component props as args

**When to use this pattern:**
- Stories that wrap components in layout/theme providers
- Stories demonstrating composition patterns
- Stories with hardcoded props in render functions
- Any story where args don't map directly to component props

## Build & Development Workflow

```bash
npm run dev              # Watch mode for library development
npm run storybook        # Develop components in isolation (port 6006)
npm test                 # Run Vitest tests
npm run build            # Build CJS + ESM bundles + type definitions
npm run lint             # ESLint check
npm run release          # standard-version for semantic versioning
```

**Pre-commit**: Husky runs linting and builds. Commits must follow conventional commits format:
- `feat: description` - new features
- `fix: description` - bug fixes
- `chore: description` - maintenance

## Export Pattern

All components and types are exported from `src/index.ts`:
```typescript
export { default as ComponentName } from "./atoms/ComponentName";
export type { ComponentProps } from "./atoms/ComponentName/types";
```

**Directory-based exports**: When exporting, use the appropriate path based on component complexity:
- Atoms: `"./atoms/ComponentName"`
- Molecules: `"./molecules/ComponentName"`
- Organisms: `"./organisms/ComponentName"`
- Templates: `"./templates/TemplateName"`

## Creating New Components

**Decision Tree for Component Placement:**

1. **Is it a single, indivisible UI element?** → Atom
   - Can it be broken down further? If no, it's an atom
   - Example: A `Button` can't be simplified further

2. **Does it combine 2-5 atoms?** → Molecule
   - Does it have a single, focused purpose?
   - Example: `SearchBar` = `Input` + `Button`

3. **Does it combine molecules and/or atoms into a major UI section?** → Organism
   - Is it a distinct section of an interface?
   - Example: `Navigation` = `Logo` + multiple `NavLink` + `SearchBar`

4. **Does it define page-level layout/structure?** → Template
   - Does it show content placement without actual content?
   - Example: `HeroTemplate` with slots for heading, subheading, CTA

When in doubt, start with the simplest category (atom) and refactor up as complexity grows.

## Common Gotchas

1. **Children must be optional**: Storybook's `args` requirement with `bundler` moduleResolution means `children?: React.ReactNode` not `children: React.ReactNode`
2. **Transient props**: Use `$propName` in styled-components to prevent props from reaching the DOM
3. **No className-only styling**: Since this is an npm library, CSS classes won't work. Use `style` prop or styled-components
4. **Default font**: All container components should include `font-family: sans-serif`
5. **Test IDs**: Always include `data-testid` attributes for testing

## Always Do These Things

- Build to ensure your typescript is sound
- Write tests covering every prop and edge case
- Create Storybook stories demonstrating all features and variations
- Lint your code
- Follow the established file and code structure patterns
- Keep your components as flexible and reusable as possible
- Keep styles deliberately bare and simple. the developer using them will extend them visually with themes later.
- Use chrome to research landing page designs from https://saaslandingpage.com