'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductImageCarousel({
  images = [],
  productTitle = '',
  subcategoryTitle = '',
  className = '',
}) {
  // Normalize incoming images to [{ src, alt }]
  const normalizedImages = (Array.isArray(images) ? images : [images])
    .filter(Boolean)
    .map((item, idx) => {
      if (typeof item === 'string') {
        return {
          src: item,
          alt: `${productTitle || subcategoryTitle || 'Product'} image ${idx + 1}`,
        };
      }
      return {
        src: item.src || '',
        alt: item.alt || item.label || `${productTitle || subcategoryTitle || 'Product'} image ${idx + 1}`,
      };
    })
    .filter((item) => Boolean(item.src));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  // Reset index when product changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [productTitle, images]);

  const hasMultiple = normalizedImages.length > 1;
  const currentImage = normalizedImages[currentIndex] || normalizedImages[0];

  const goToNext = useCallback(() => {
    if (!hasMultiple) return;
    setCurrentIndex((prev) => (prev + 1) % normalizedImages.length);
  }, [hasMultiple, normalizedImages.length]);

  const goToPrev = useCallback(() => {
    if (!hasMultiple) return;
    setCurrentIndex((prev) => (prev - 1 + normalizedImages.length) % normalizedImages.length);
  }, [hasMultiple, normalizedImages.length]);

  const goToIndex = (index) => {
    if (index >= 0 && index < normalizedImages.length) {
      setCurrentIndex(index);
    }
  };

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    setTouchStartX(null);
  };

  if (normalizedImages.length === 0) return null;

  // Single Image Rendering (Zero Carousel Overhead)
  if (!hasMultiple) {
    return (
      <div className={`product-details-sticky-img-box ${className}`}>
        <img
          src={encodeURI(currentImage.src)}
          alt={currentImage.alt || productTitle || subcategoryTitle || 'Product Image'}
          className="product-details-sticky-img"
        />
      </div>
    );
  }

  // Multi-Image Carousel: Main image, left & right arrows, bottom dots only
  return (
    <div className={`product-carousel-wrapper ${className}`}>
      {/* Main Display Stage */}
      <div
        className="product-carousel-main"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Active Image */}
        <div className="product-carousel-img-stage">
          <img
            key={currentImage.src}
            src={encodeURI(currentImage.src)}
            alt={currentImage.alt}
            className="product-carousel-active-img"
          />
        </div>

        {/* Left (Prev) Arrow Button */}
        <button
          type="button"
          className="product-carousel-arrow product-carousel-prev"
          onClick={goToPrev}
          aria-label="Previous image"
          title="Previous image"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Right (Next) Arrow Button */}
        <button
          type="button"
          className="product-carousel-arrow product-carousel-next"
          onClick={goToNext}
          aria-label="Next image"
          title="Next image"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Bottom Dots Only */}
      <div className="product-carousel-dots">
        {normalizedImages.map((_, idx) => (
          <button
            type="button"
            key={idx}
            onClick={() => goToIndex(idx)}
            className={`product-carousel-dot ${idx === currentIndex ? 'is-active' : ''}`}
            aria-label={`Jump to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
