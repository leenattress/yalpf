import React, { useState, useRef, useEffect } from "react";
import { CarouselProps } from "./types";
import { Container, Track, ItemsWrapper, Item, Controls, ArrowButton } from "./styled";

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
const Carousel: React.FC<CarouselProps> = ({
  items,
  itemsPerView = 1,
  gap = 16,
  controlsPosition = "bottom",
  customLeftArrow,
  customRightArrow,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    const updateItemWidth = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.offsetWidth;
        const totalGap = gap * (itemsPerView - 1);
        const width = (trackWidth - totalGap) / itemsPerView;
        setItemWidth(width);
      }
    };

    updateItemWidth();
    window.addEventListener("resize", updateItemWidth);
    return () => window.removeEventListener("resize", updateItemWidth);
  }, [itemsPerView, gap]);

  const maxIndex = Math.max(0, items.length - itemsPerView);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      touchStartX.current = e.touches[0].clientX;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      touchEndX.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // minimum pixels to trigger swipe

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swiped left, go next
        handleNext();
      } else {
        // Swiped right, go prev
        handlePrev();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const translateX = -(currentIndex * (itemWidth + gap));
  const itemWidthPercent = `calc((100% - ${gap * (itemsPerView - 1)}px) / ${itemsPerView})`;

  const prevButton = (
    <ArrowButton
      onClick={handlePrev}
      $disabled={!canGoPrev}
      disabled={!canGoPrev}
      aria-label="Previous"
      data-testid="carousel-prev"
    >
      {customLeftArrow || "◄"}
    </ArrowButton>
  );

  const nextButton = (
    <ArrowButton
      onClick={handleNext}
      $disabled={!canGoNext}
      disabled={!canGoNext}
      aria-label="Next"
      data-testid="carousel-next"
    >
      {customRightArrow || "►"}
    </ArrowButton>
  );

  if (controlsPosition === "inline") {
    return (
      <Container data-testid="carousel-container" $controlsPosition={controlsPosition} {...props}>
        {prevButton}
        <Track 
          ref={trackRef} 
          data-testid="carousel-track" 
          $controlsPosition={controlsPosition}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <ItemsWrapper $translateX={translateX} $gap={gap}>
            {items.map((item, index) => (
              <Item key={index} $itemWidth={itemWidthPercent} data-testid={`carousel-item-${index}`}>
                {item}
              </Item>
            ))}
          </ItemsWrapper>
        </Track>
        {nextButton}
      </Container>
    );
  }

  return (
    <Container data-testid="carousel-container" $controlsPosition={controlsPosition} {...props}>
      <Track 
        ref={trackRef} 
        data-testid="carousel-track" 
        $controlsPosition={controlsPosition}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <ItemsWrapper $translateX={translateX} $gap={gap}>
          {items.map((item, index) => (
            <Item key={index} $itemWidth={itemWidthPercent} data-testid={`carousel-item-${index}`}>
              {item}
            </Item>
          ))}
        </ItemsWrapper>
      </Track>
      <Controls $controlsPosition={controlsPosition}>
        {prevButton}
        {nextButton}
      </Controls>
    </Container>
  );
};

export default Carousel;
