import React from "react";
/**
 * Props for the Image component
 */
export interface ImageProps extends Omit<React.ComponentPropsWithoutRef<"img">, "src"> {
    /**
     * Image source URL
     */
    src: string;
    /**
     * Alt text for accessibility (required)
     */
    alt: string;
    /**
     * Aspect ratio to maintain
     * @default "auto"
     */
    /**
     * Aspect ratio to maintain (e.g. "16/9", "4/3", "1/1", or "auto")
     * Accepts any "number/number" string or "auto"
     * @default "auto"
     */
    aspectRatio?: `${number}/${number}` | "auto";
    /**
     * How the image should fit within its container
     * - cover: Fills container, may crop image
     * - contain: Fits entire image, may show empty space
     * - fill: Stretches to fill container
     * @default "cover"
     */
    objectFit?: "cover" | "contain" | "fill";
    /**
     * Border radius
     * @default "0"
     */
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * Lazy loading behavior
     * @default "lazy"
     */
    loading?: "lazy" | "eager";
}
