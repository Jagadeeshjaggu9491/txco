'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { mainProductCategories } from '@/data/productsData';

import 'swiper/css';
import 'swiper/css/navigation';
import '@/styles/products-slider.css';

export default function ProductsCategorySlider({ categories = mainProductCategories }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="products-slider-section">
      <div className="products-slider-container">
        {/* Header with Title and Nav Controls */}
        <div className="products-slider-header">
          <h2 className="products-slider-heading heading-gradient">
            Our Products
          </h2>

          <div className="products-slider-controls">
            <button
              ref={prevRef}
              className="products-slider-btn prev-btn"
              aria-label="Previous Products"
            >
              <ChevronLeft size={22} strokeWidth={2.4} />
            </button>
            <button
              ref={nextRef}
              className="products-slider-btn next-btn"
              aria-label="Next Products"
            >
              <ChevronRight size={22} strokeWidth={2.4} />
            </button>
          </div>
        </div>

        {/* Swiper Slider with identical product-card-flex-item cards */}
        <Swiper
          modules={[Navigation, Autoplay]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          spaceBetween={28}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 22,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          className="products-categories-swiper"
        >
          {categories.map((item, idx) => (
            <SwiperSlide key={item.id || idx}>
              <Link
                href={item.href}
                className="product-card-flex-item"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  width: '100%',
                  height: '100%',
                }}
              >
                <div
                  className="category-overview-card"
                  style={{ width: '100%' }}
                >
                  {/* Top Image Preview Box with Ice Blue Background and Ghost Watermark */}
                  <div className="category-img-box">
                    <span className="category-ghost-text">
                      {item.title?.split(' ')[0] || 'TXCO'}
                    </span>
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(e) => {
                        e.currentTarget.src = item.fallbackImage || '/images/home-products.png';
                      }}
                    />
                  </div>

                  {/* Card Bottom Details with Hover Action Ribbon & Category Title */}
                  <div className="category-card-body">
                    <div className="category-card-action-bar">
                      <span className="category-badge-ribbon">Go to category</span>
                    </div>

                    <h3 className="category-card-title">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
