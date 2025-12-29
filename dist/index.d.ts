import React$1 from 'react';
import * as styled_components from 'styled-components';

interface PageProps extends React.ComponentPropsWithoutRef<"div"> {
    children?: React.ReactNode;
}

declare const Page: React$1.FC<PageProps>;

interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
    children?: React.ReactNode;
}
interface SectionInnerProps extends React.ComponentPropsWithoutRef<"div"> {
    children?: React.ReactNode;
    fullWidth?: boolean;
    gap?: string;
    mobileBreakpoint?: string;
}
interface SectionColumnProps extends React.ComponentPropsWithoutRef<"div"> {
    children?: React.ReactNode;
    width?: number;
}

declare const SectionInner: React$1.FC<SectionInnerProps>;
declare const SectionColumn: React$1.FC<SectionColumnProps>;
declare const Section: React$1.FC<SectionProps> & {
    Inner: typeof SectionInner;
    Column: typeof SectionColumn;
};

/**
 * Props for the Image component
 */
interface ImageProps extends Omit<React$1.ComponentPropsWithoutRef<"img">, "src"> {
    /**
     * Image source URL
     */
    src: string;
    /**
     * Alt text for accessibility (required)
     */
    alt: string;
    /**
     * Aspect ratio to maintain
     * @default "auto"
     */
    /**
     * Aspect ratio to maintain (e.g. "16/9", "4/3", "1/1", or "auto")
     * Accepts any "number/number" string or "auto"
     * @default "auto"
     */
    aspectRatio?: `${number}/${number}` | "auto";
    /**
     * How the image should fit within its container
     * - cover: Fills container, may crop image
     * - contain: Fits entire image, may show empty space
     * - fill: Stretches to fill container
     * @default "cover"
     */
    objectFit?: "cover" | "contain" | "fill";
    /**
     * Border radius
     * @default "0"
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * Lazy loading behavior
     * @default "lazy"
     */
    loading?: "lazy" | "eager";
}

/**
 * Image Component
 *
 * An atom component for displaying images with consistent aspect ratios and object-fit behavior.
 * Handles different image sizes gracefully by cropping/fitting as needed.
 *
 * Best Practices:
 * - Always provide descriptive alt text for accessibility
 * - Use aspect ratios to maintain visual consistency across different image sizes
 * - Default to "cover" object-fit for professional appearance
 * - Lazy loading enabled by default for performance
 *
 * @example
 * ```tsx
 * <Image
 *   src="https://example.com/image.jpg"
 *   alt="Product screenshot"
 *   aspectRatio="16/9"
 *   rounded="md"
 * />
 * ```
 */
declare const Image: React$1.FC<ImageProps>;

/**
 * Props for the Spacer component
 */
interface SpacerProps extends React$1.ComponentPropsWithoutRef<"div"> {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}

/**
 * Spacer - Vertical spacing component
 *
 * Provides consistent vertical spacing between sections and elements.
 * Use to control vertical rhythm and improve readability.
 *
 * @example
 * ```tsx
 * <Heading1>Title</Heading1>
 * <Spacer size="lg" />
 * <Heading2>Subtitle</Heading2>
 * ```
 */
declare const Spacer: React$1.FC<SpacerProps>;

/**
 * Button Props
 *
 * CTA-optimized button component for landing pages.
 */
interface ButtonProps extends React$1.ComponentPropsWithoutRef<"button"> {
    /**
     * Visual variant of the button
     * - primary: High-contrast, main CTA (default)
     * - secondary: Lower emphasis alternative action
     * - outline: Minimal emphasis, tertiary action
     */
    variant?: "primary" | "secondary" | "outline";
    /**
     * Size of the button
     * - small: Compact (32px height)
     * - medium: Standard (44px height - default)
     * - large: Prominent CTA (56px height)
     */
    size?: "small" | "medium" | "large";
    /**
     * Whether the button spans full width of its container
     */
    fullWidth?: boolean;
    /**
     * Loading state - shows loading indicator and disables interaction
     */
    isLoading?: boolean;
    /**
     * Icon to display before the button text
     */
    iconBefore?: React$1.ReactNode;
    /**
     * Icon to display after the button text
     */
    iconAfter?: React$1.ReactNode;
    /**
     * Button content (children is optional for Storybook compatibility)
     */
    children?: React$1.ReactNode;
}

/**
 * Button Component
 *
 * CTA-optimized button for landing pages following best practices:
 *
 * - **Action-oriented**: Design for verbs like "Get", "Start", "Join", "Try"
 * - **Benefit-focused**: Use text like "Get My Free Guide" not "Submit"
 * - **Accessible**: 44x44px minimum touch target, keyboard navigable
 * - **Visual prominence**: Primary variant for main CTAs
 * - **Loading states**: Built-in support for async actions
 * - **Flexible sizing**: Small, medium (default), large options
 *
 * @example
 * ```tsx
 * // Primary CTA (default)
 * <Button>Get Started Free</Button>
 *
 * // Secondary action
 * <Button variant="secondary">Learn More</Button>
 *
 * // With loading state
 * <Button isLoading>Processing...</Button>
 *
 * // Large prominent CTA
 * <Button size="large">Start Free Trial</Button>
 *
 * // With icons
 * <Button iconAfter={<ArrowIcon />}>Continue</Button>
 * ```
 */
declare const Button: React$1.FC<ButtonProps>;

/**
 * Props for the FeatureCard component
 */
interface FeatureCardProps extends React$1.ComponentPropsWithoutRef<"div"> {
    /**
     * Optional children for custom content
     */
    children?: React$1.ReactNode;
    /**
     * Image or icon element to display at the top of the card.
     * For full-width images: <Image src="..." aspectRatio="16/9" />
     * For icons: <Image src="..." aspectRatio="1/1" width={64} height={64} />
     */
    image?: React$1.ReactNode;
    /**
     * Headline for the feature (benefit-focused, 3-7 words optimal)
     */
    headline?: React$1.ReactNode;
    /**
     * Description text (2-3 sentences max for scannability)
     */
    description?: React$1.ReactNode;
    /**
     * Optional CTA element (link or button)
     */
    cta?: React$1.ReactNode;
    /**
     * Text alignment for content
     * @default "left"
     */
    align?: "left" | "center" | "right";
}

/**
 * FeatureCard Component
 *
 * A molecule component for displaying a single feature with image, headline, description, and optional CTA.
 * Designed for landing pages following conversion optimization best practices.
 *
 * Best Practices from Research:
 * - Headlines: 3-7 words, benefit-focused (not feature-focused)
 * - Descriptions: 2-3 sentences maximum for scannability
 * - Images: Visual hierarchy and quick recognition
 * - Groups of 3-6 features optimal (cognitive load)
 *
 * Image Usage:
 * - **Full-width images**: Pass Image component without size constraints for hero-style feature cards
 * - **Icons**: Pass Image with explicit width/height or icon elements for traditional feature displays
 *
 * @example
 * ```tsx
 * // With full-width image (most common)
 * <FeatureCard
 *   image={<Image src="feature.jpg" alt="Feature" aspectRatio="16/9" />}
 *   headline={<h3>Premium Product</h3>}
 *   description={<p>Enterprise-grade solution.</p>}
 * />
 *
 * // With icon
 * <FeatureCard
 *   image={<Image src="icon.jpg" alt="Fast" aspectRatio="1/1" width={64} height={64} />}
 *   headline={<h3>Lightning Fast</h3>}
 *   description={<p>Load times under 1 second.</p>}
 * />
 * ```
 */
declare const FeatureCard: React$1.FC<FeatureCardProps>;

/**
 * Props for the Carousel component
 */
interface CarouselProps extends React$1.ComponentPropsWithoutRef<"div"> {
    /**
     * Array of elements to display in the carousel
     */
    items: React$1.ReactNode[];
    /**
     * Number of items to show at once
     * @default 1
     */
    itemsPerView?: number;
    /**
     * Gap between items (in pixels)
     * @default 16
     */
    gap?: number;
    /**
     * Position of navigation controls
     * - "bottom": Centered below the carousel
     * - "inline": Left and right arrows aligned with content
     * @default "bottom"
     */
    controlsPosition?: "bottom" | "inline";
    /**
     * Custom content for the left arrow button
     * @default "◄"
     */
    customLeftArrow?: React$1.ReactNode;
    /**
     * Custom content for the right arrow button
     * @default "►"
     */
    customRightArrow?: React$1.ReactNode;
}

/**
 * Carousel component for displaying a scrollable list of items
 *
 * @example
 * ```tsx
 * <Carousel
 *   items={[
 *     <Image src="image1.jpg" alt="Image 1" />,
 *     <Image src="image2.jpg" alt="Image 2" />,
 *     <Image src="image3.jpg" alt="Image 3" />,
 *   ]}
 *   itemsPerView={3}
 *   gap={16}
 * />
 * ```
 */
declare const Carousel: React$1.FC<CarouselProps>;

/**
 * Props for the Hero component
 */
interface HeroProps extends React$1.ComponentPropsWithoutRef<"section"> {
    /**
     * Main headline (6-12 words optimal)
     * Should be benefit-focused and specific
     */
    headline?: React$1.ReactNode;
    /**
     * Supporting subheadline text
     * Provides context and expands on headline promise
     */
    subheadline?: React$1.ReactNode;
    /**
     * Primary call-to-action button or element
     * Should use action-oriented, benefit-focused text
     */
    primaryCTA?: React$1.ReactNode;
    /**
     * Optional secondary CTA for lower commitment actions
     */
    secondaryCTA?: React$1.ReactNode;
    /**
     * Media content (image, video, or custom element)
     * Appears on the right side on desktop, above content on mobile
     */
    media?: React$1.ReactNode;
    /**
     * Layout variant
     * - "default": Media on right, content on left
     * - "reversed": Media on left, content on right
     * - "centered": Content centered, no media column
     */
    layout?: "default" | "reversed" | "centered";
    /**
     * Alignment of text content
     */
    align?: "left" | "center";
}

/**
 * Hero Component
 *
 * A conversion-optimized hero section for landing pages.
 * Supports headline, subheadline, CTAs, and media content.
 *
 * Best Practices:
 * - Headline: 6-12 words, benefit-focused
 * - Subheadline: Supporting context
 * - Primary CTA: Action-oriented ("Get Started", "Try Free")
 * - Secondary CTA: Lower commitment ("Learn More")
 *
 * @example
 * ```tsx
 * <Hero
 *   headline={<h1>Increase Sales by 47%</h1>}
 *   subheadline={<p>AI-powered email subject lines that convert</p>}
 *   primaryCTA={<button>Start Free Trial</button>}
 *   secondaryCTA={<button>Watch Demo</button>}
 *   media={<img src="product.png" alt="Product screenshot" />}
 * />
 * ```
 */
declare const Hero: React$1.FC<HeroProps>;

/**
 * Typography Mixin
 *
 * Apply this to any container component to automatically style HTML tags inside it.
 * This cascades typography styles to all child elements without needing global styles.
 * Uses CSS variables set by ThemeProvider for font families.
 *
 * @example
 * ```tsx
 * import { typographyStyles } from '../styles/typography';
 *
 * export const Container = styled.div`
 *   ${typographyStyles}
 *   // your other styles...
 * `;
 * ```
 *
 * Now any HTML inside this container gets automatic styling:
 * ```tsx
 * <ThemeProvider theme={sansSerifTheme}>
 *   <Container>
 *     <h1>Automatically styled with theme</h1>
 *     <p>Typography follows theme settings</p>
 *   </Container>
 * </ThemeProvider>
 * ```
 */
declare const typographyStyles: styled_components.RuleSet<object>;

/**
 * Theme Type Definitions
 *
 * Defines the shape of themes used throughout the component library.
 * Includes typography and color system for comprehensive theming.
 */
interface TypographyTheme {
    /**
     * Font family for body text and general content
     */
    fontFamily: string;
    /**
     * Font family for headings (h1-h6)
     * If not specified, defaults to fontFamily
     */
    headingFontFamily?: string;
    /**
     * Font family for monospace/code elements
     */
    monospaceFontFamily: string;
}
interface ColorTheme {
    /**
     * Primary color - used for main CTAs, buttons, and key interactive elements
     */
    primary: string;
    /**
     * Secondary color - used for secondary actions and accents
     */
    secondary: string;
    /**
     * Background color - main page/component background
     */
    background: string;
    /**
     * Text color - primary text content
     */
    text: string;
    /**
     * Text on primary - text color when placed on primary colored backgrounds
     */
    textOnPrimary: string;
    /**
     * Text on secondary - text color when placed on secondary colored backgrounds
     */
    textOnSecondary: string;
}
interface Theme {
    /**
     * Theme name for identification
     */
    name: string;
    /**
     * Typography settings
     */
    typography: TypographyTheme;
    /**
     * Color settings
     */
    colors: ColorTheme;
}

/**
 * Light Theme
 *
 * Clean, bright theme optimized for daytime viewing.
 * Features dark text on light backgrounds with subtle, professional accent colors.
 */
declare const lightTheme: Theme;
/**
 * Dark Theme
 *
 * Modern dark theme optimized for low-light environments and reduced eye strain.
 * Features light text on dark backgrounds with soft, accessible accent colors.
 */
declare const darkTheme: Theme;
/**
 * Default theme used when no theme is explicitly provided
 */
declare const defaultTheme: Theme;

interface ThemeProviderProps {
    /**
     * Theme object to apply to all child components
     */
    theme: Theme;
    /**
     * Child components that will have access to the theme
     */
    children: React$1.ReactNode;
}
/**
 * ThemeProvider Component
 *
 * Wraps your application to provide theme configuration to all components.
 * Injects CSS variables for typography and color system.
 * Currently supports light and dark themes.
 *
 * @example
 * ```tsx
 * import { ThemeProvider, lightTheme, darkTheme } from 'your-library';
 *
 * function App() {
 *   return (
 *     <ThemeProvider theme={lightTheme}>
 *       <YourComponents />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 */
declare const ThemeProvider: React$1.FC<ThemeProviderProps>;
/**
 * useTheme Hook
 *
 * Access the current theme from any component within a ThemeProvider.
 *
 * @returns The current theme object
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const theme = useTheme();
 *   return <div style={{ fontFamily: theme.typography.fontFamily }}>Hello</div>;
 * }
 * ```
 */
declare const useTheme: () => Theme;

export { Button, Carousel, FeatureCard, Hero, Image, Page, Section, Spacer, ThemeProvider, darkTheme, defaultTheme, lightTheme, typographyStyles, useTheme };
export type { ButtonProps, CarouselProps, ColorTheme, FeatureCardProps, HeroProps, ImageProps, PageProps, SectionInnerProps, SectionProps, SpacerProps, Theme, TypographyTheme };
