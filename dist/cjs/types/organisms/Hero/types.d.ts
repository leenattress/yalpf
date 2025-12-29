import React from "react";
/**
 * Props for the Hero component
 */
export interface HeroProps extends React.ComponentPropsWithoutRef<"section"> {
    /**
     * Main headline (6-12 words optimal)
     * Should be benefit-focused and specific
     */
    headline?: React.ReactNode;
    /**
     * Supporting subheadline text
     * Provides context and expands on headline promise
     */
    subheadline?: React.ReactNode;
    /**
     * Primary call-to-action button or element
     * Should use action-oriented, benefit-focused text
     */
    primaryCTA?: React.ReactNode;
    /**
     * Optional secondary CTA for lower commitment actions
     */
    secondaryCTA?: React.ReactNode;
    /**
     * Media content (image, video, or custom element)
     * Appears on the right side on desktop, above content on mobile
     */
    media?: React.ReactNode;
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
