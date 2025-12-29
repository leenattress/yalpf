import React from "react";
import type { HeroProps } from "./types";
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
declare const Hero: React.FC<HeroProps>;
export default Hero;
