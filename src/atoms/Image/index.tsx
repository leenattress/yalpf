import React from "react";
import { ImageProps } from "./types";
import { Container, StyledImage } from "./styled";

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
const Image: React.FC<ImageProps> = ({
  src,
  alt,
  aspectRatio = "auto",
  objectFit = "cover",
  rounded = "none",
  loading = "lazy",
  ...props
}) => {
  return (
    <Container
      data-testid="image-container"
      $aspectRatio={aspectRatio}
      $rounded={rounded}
    >
      <StyledImage
        data-testid="image-element"
        src={src}
        alt={alt}
        loading={loading}
        $objectFit={objectFit}
        {...props}
      />
    </Container>
  );
};

export default Image;
