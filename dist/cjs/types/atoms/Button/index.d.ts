import React from "react";
import { ButtonProps } from "./types";
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
declare const Button: React.FC<ButtonProps>;
export default Button;
