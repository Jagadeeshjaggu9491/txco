'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { mainProductCategories } from '@/data/productsData';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/styles/products-slider.css';

export default function ProductsCategorySlider({
  products,
  categories,
}) {
  // Use product categories directly from the /products page
  const displayProducts = products || categories || mainProductCategories;

  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current && paginationRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.params.pagination.el = paginationRef.current;
      try {
        swiperInstance.navigation.destroy();
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
        swiperInstance.pagination.destroy();
        swiperInstance.pagination.init();
        swiperInstance.pagination.update();
      } catch (err) {
        // Safe catch for swiper re-initialization
      }
    }
  }, [swiperInstance]);

  return (
    <section className="sealing-solutions-section">
      <div className="sealing-solutions-container">
        
        {/* Section Heading: Left-aligned bold italic */}
        <h2 className="sealing-solutions-title">
          Sealing Solutions for Every Industry
        </h2>

        {/* Slider Track with Left & Right Nav Arrows */}
        <div className="sealing-slider-wrapper">
          {/* Left Arrow Button */}
          <button
            ref={prevRef}
            className="sealing-slider-arrow prev"
            aria-label="Previous product category"
          >
            <ChevronLeft size={22} strokeWidth={2.4} />
          </button>

          {/* Right Arrow Button */}
          <button
            ref={nextRef}
            className="sealing-slider-arrow next"
            aria-label="Next product category"
          >
            <ChevronRight size={22} strokeWidth={2.4} />
          </button>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={setSwiperInstance}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            loop={true}
            autoplay={{
              delay: 3800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 32,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 36,
              },
            }}
            className="sealing-products-swiper"
          >
            {displayProducts.map((item, idx) => (
              <SwiperSlide key={item.id || idx}>
                <div className="sealing-product-item">
                  <Link href={item.href} className="sealing-product-link">
                    {/* Centered Product Image from /products page */}
                    <div className="sealing-product-img-box">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="sealing-product-img"
                        loading="lazy"
                        onError={(e) => {
                          if (item.fallbackImage) {
                            e.currentTarget.src = item.fallbackImage;
                          }
                        }}
                      />
                    </div>

                    {/* Product Category Name revealed on hover */}
                    <div className="sealing-product-caption">
                      <h4 className="sealing-product-title">{item.title}</h4>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Navigation Pagination Dots */}
        <div ref={paginationRef} className="sealing-slider-pagination" />

        {/* Centered Explore Button */}
        <div className="sealing-slider-explore-wrap">
          <Link href="/products" className="sealing-explore-btn">
            <span>EXPLORE</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
