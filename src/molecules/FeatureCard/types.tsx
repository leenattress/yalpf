import React from "react";

/**
 * Props for the FeatureCard component
 */
export interface FeatureCardProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Optional children for custom content
   */
  children?: React.ReactNode;

  /**
   * Image or icon element to display at the top of the card.
   * For full-width images: <Image src="..." aspectRatio="16/9" />
   * For icons: <Image src="..." aspectRatio="1/1" width={64} height={64} />
   */
  image?: React.ReactNode;

  /**
   * Headline for the feature (benefit-focused, 3-7 words optimal)
   */
  headline?: React.ReactNode;

  /**
   * Description text (2-3 sentences max for scannability)
   */
  description?: React.ReactNode;

  /**
   * Optional CTA element (link or button)
   */
  cta?: React.ReactNode;

  /**
   * Text alignment for content
   * @default "left"
   */
  align?: "left" | "center" | "right";
}
