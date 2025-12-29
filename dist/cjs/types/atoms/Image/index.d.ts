import React from "react";
import { ImageProps } from "./types";
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
declare const Image: React.FC<ImageProps>;
export default Image;
