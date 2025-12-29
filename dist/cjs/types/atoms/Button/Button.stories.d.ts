import type { StoryObj } from "@storybook/react-vite";
import React from "react";
import Button from ".";
/**
 * Button - CTA-Optimized Component
 *
 * A conversion-focused button component following landing page best practices:
 *
 * ## CTA Best Practices
 *
 * **Action-Oriented Text:**
 * - ✅ "Get Started Free", "Start Free Trial", "Join Now"
 * - ✅ "Download Guide", "Claim Your Discount", "Try It Free"
 * - ❌ "Submit", "Click Here", "Enter"
 *
 * **Benefit-Focused:**
 * - ✅ "Get My Free Guide" (emphasizes benefit)
 * - ❌ "Download" (just the action)
 *
 * **Visual Hierarchy:**
 * - Primary: Main conversion goal (one per section)
 * - Secondary: Alternative lower-commitment action
 * - Outline: Tertiary actions, navigation
 *
 * ## Accessibility
 *
 * - Minimum 44x44px touch target (medium/large sizes)
 * - Keyboard navigable with visible focus states
 * - Screen reader friendly with ARIA support
 * - Loading states prevent double-submission
 *
 * ## Performance Impact
 *
 * Studies show proper CTA design increases conversions by 20-50%:
 * - Action-oriented text: +25% click-through
 * - High contrast colors: +32% visibility
 * - Clear visual hierarchy: +40% conversion
 */
declare const meta: {
    title: string;
    component: React.FC<import("./types").ButtonProps>;
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof Button>;
/**
 * Primary button - use for main conversion goals.
 * Highest visual weight, one per section recommended.
 */
export declare const Primary: Story;
/**
 * Secondary button - use for alternative actions.
 * Lower commitment than primary, like "Learn More".
 */
export declare const Secondary: Story;
/**
 * Outline button - use for tertiary actions.
 * Minimal emphasis, navigation or less important actions.
 */
export declare const Outline: Story;
/**
 * Size variants showing touch target compliance.
 * Medium and Large meet the 44x44px minimum for mobile.
 */
export declare const Sizes: Story;
/**
 * Loading state prevents double-submission and shows progress.
 * Critical for form submissions and async operations.
 */
export declare const Loading: Story;
/**
 * Disabled state for unavailable actions.
 * Use sparingly - consider hiding unavailable options instead.
 */
export declare const Disabled: Story;
/**
 * Full width buttons for mobile-first layouts.
 * Recommended for primary CTAs on mobile screens.
 */
export declare const FullWidth: Story;
/**
 * Buttons with icons for enhanced visual communication.
 * Icons should support the action, not replace clear text.
 */
export declare const WithIcons: Story;
/**
 * Hero section CTA example.
 * Large primary button with benefit-focused text.
 */
export declare const HeroCTA: Story;
/**
 * Pricing card CTA example.
 * Full-width button as primary conversion point.
 */
export declare const PricingCTA: Story;
/**
 * Feature section CTAs.
 * Multiple buttons with clear visual hierarchy.
 */
export declare const FeatureCTAs: Story;
/**
 * Form submission CTA example.
 * Loading state demonstration for async operations.
 */
export declare const FormCTA: Story;
/**
 * Action-oriented text examples.
 * Shows the difference between good and poor CTA copy.
 */
export declare const CTACopyExamples: Story;
