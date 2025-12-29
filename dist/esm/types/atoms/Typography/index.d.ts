import React from "react";
import { HeadingProps, TypographyProps } from "./types";
/**
 * Heading1 - Primary page headline
 *
 * Use for hero headlines (6-12 words, benefit-focused).
 * Desktop: 48px, Mobile: 32px, Line height: 1.2, Weight: bold
 *
 * @example
 * ```tsx
 * <Heading1>Welcome to Our Product</Heading1>
 * <Heading1 align="center">Get Started Today</Heading1>
 * ```
 */
export declare const Heading1: React.FC<HeadingProps>;
/**
 * Heading2 - Section headlines
 *
 * Use for major section headings on landing pages.
 * Desktop: 36px, Mobile: 28px, Line height: 1.2, Weight: bold
 *
 * @example
 * ```tsx
 * <Heading2>Key Features</Heading2>
 * <Heading2 align="center">What Our Customers Say</Heading2>
 * ```
 */
export declare const Heading2: React.FC<HeadingProps>;
/**
 * Heading3 - Subsection headlines
 *
 * Use for feature titles and subsection headings.
 * Desktop: 28px, Mobile: 24px, Line height: 1.2, Weight: bold
 *
 * @example
 * ```tsx
 * <Heading3>Lightning Fast Performance</Heading3>
 * <Heading3 weight="semibold">Easy to Use</Heading3>
 * ```
 */
export declare const Heading3: React.FC<HeadingProps>;
/**
 * Heading4 - Minor section headlines
 *
 * Desktop: 24px, Mobile: 20px, Line height: 1.2, Weight: bold
 *
 * @example
 * ```tsx
 * <Heading4>Product Details</Heading4>
 * ```
 */
export declare const Heading4: React.FC<HeadingProps>;
/**
 * Heading5 - Small headlines
 *
 * Desktop: 20px, Mobile: 18px, Line height: 1.2, Weight: bold
 *
 * @example
 * ```tsx
 * <Heading5>Additional Information</Heading5>
 * ```
 */
export declare const Heading5: React.FC<HeadingProps>;
/**
 * Heading6 - Smallest headlines
 *
 * Desktop: 18px, Mobile: 16px, Line height: 1.2, Weight: bold
 *
 * @example
 * ```tsx
 * <Heading6>Fine Print Heading</Heading6>
 * ```
 */
export declare const Heading6: React.FC<HeadingProps>;
/**
 * Paragraph - Body text
 *
 * Use for standard body copy. Keep to 2-3 sentences max for landing pages.
 * Size: 16px (minimum for readability), Line height: 1.5, Weight: normal
 * Max width: 75ch (optimal line length)
 *
 * @example
 * ```tsx
 * <Paragraph>This is standard body text for your landing page.</Paragraph>
 * <Paragraph align="center">Centered text for emphasis.</Paragraph>
 * ```
 */
export declare const Paragraph: React.FC<TypographyProps>;
/**
 * Lead - Larger intro paragraph
 *
 * Use for hero subheadings or important introductory text.
 * Desktop: 20px, Mobile: 18px, Line height: 1.5, Weight: normal
 * Max width: 75ch
 *
 * @example
 * ```tsx
 * <Lead>Get started with the best solution for your business needs.</Lead>
 * ```
 */
export declare const Lead: React.FC<TypographyProps>;
/**
 * Small - Fine print and captions
 *
 * Use for disclaimers, captions, or secondary information.
 * Size: 14px, Line height: 1.5, Weight: normal
 *
 * @example
 * ```tsx
 * <Small>*Terms and conditions apply</Small>
 * <Small align="center">Image caption text</Small>
 * ```
 */
export declare const Small: React.FC<TypographyProps>;
