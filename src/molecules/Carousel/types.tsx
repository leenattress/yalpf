import React from "react";

/**
 * Props for the Carousel component
 */
export interface CarouselProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Array of elements to display in the carousel
   */
  items: React.ReactNode[];

  /**
   * Number of items to show at once
   * @default 1
   */
  itemsPerView?: number;

  /**
   * Gap between items (in pixels)
   * @default 16
   */
  gap?: number;

  /**
   * Position of navigation controls
   * - "bottom": Centered below the carousel
   * - "inline": Left and right arrows aligned with content
   * @default "bottom"
   */
  controlsPosition?: "bottom" | "inline";

  /**
   * Custom content for the left arrow button
   * @default "◄"
   */
  customLeftArrow?: React.ReactNode;

  /**
   * Custom content for the right arrow button
   * @default "►"
   */
  customRightArrow?: React.ReactNode;
}
