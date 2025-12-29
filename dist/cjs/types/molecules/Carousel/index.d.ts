import React from "react";
import { CarouselProps } from "./types";
/**
 * Carousel component for displaying a scrollable list of items
 *
 * @example
 * ```tsx
 * <Carousel
 *   items={[
 *     <Image src="image1.jpg" alt="Image 1" />,
 *     <Image src="image2.jpg" alt="Image 2" />,
 *     <Image src="image3.jpg" alt="Image 3" />,
 *   ]}
 *   itemsPerView={3}
 *   gap={16}
 * />
 * ```
 */
declare const Carousel: React.FC<CarouselProps>;
export default Carousel;
