import React from "react";
import { FeatureCardProps } from "./types";
import {
  Container,
  ImageWrapper,
  HeadlineWrapper,
  DescriptionWrapper,
  CTAWrapper,
} from "./styled";

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
const FeatureCard: React.FC<FeatureCardProps> = ({
  children,
  image,
  headline,
  description,
  cta,
  align = "left",
  ...props
}) => {
  return (
    <Container data-testid="feature-card-container" $align={align} {...props}>
      {image && (
        <ImageWrapper 
          data-testid="feature-card-image" 
          $align={align}
        >
          {image}
        </ImageWrapper>
      )}
      {headline && (
        <HeadlineWrapper data-testid="feature-card-headline">
          {headline}
        </HeadlineWrapper>
      )}
      {description && (
        <DescriptionWrapper data-testid="feature-card-description">
          {description}
        </DescriptionWrapper>
      )}
      {cta && <CTAWrapper data-testid="feature-card-cta">{cta}</CTAWrapper>}
      {children}
    </Container>
  );
};

export default FeatureCard;
