import React from "react";
import type { HeroProps } from "./types";
import {
  Container,
  Inner,
  Content,
  TextContent,
  MediaContent,
  Headline,
  Subheadline,
  CTAGroup,
} from "./styled";

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
const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  media,
  layout = "default",
  align = "left",
  ...props
}) => {
  return (
    <Container data-testid="hero-container" {...props}>
      <Inner $align={align}>
        <Content $layout={layout}>
          <TextContent $layout={layout}>
            {headline && (
              <Headline data-testid="hero-headline">{headline}</Headline>
            )}
            {subheadline && (
              <Subheadline data-testid="hero-subheadline">
                {subheadline}
              </Subheadline>
            )}
            {(primaryCTA || secondaryCTA) && (
              <CTAGroup $align={align} data-testid="hero-cta-group">
                {primaryCTA}
                {secondaryCTA}
              </CTAGroup>
            )}
          </TextContent>
          {media && layout !== "centered" && (
            <MediaContent data-testid="hero-media">{media}</MediaContent>
          )}
        </Content>
      </Inner>
    </Container>
  );
};

export default Hero;
