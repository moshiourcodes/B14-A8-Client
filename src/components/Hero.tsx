

"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface Slide {
  subtitle: string;
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    subtitle: "BOOKNOOK",
    title: "Your neighbourhood library, online",
    description:
      "Find a book that someone nearby already loved, and borrow it for a week.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=85&w=2000",
  },
  {
    subtitle: "BOOKNOOK",
    title: "Share the books on your shelf",
    description:
      "Add the books you have finished. Let other readers enjoy them too.",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=85&w=2000",
  },
  {
    subtitle: "BOOKNOOK",
    title: "Borrow, read, return. Repeat.",
    description:
      "Seven days for every book. Return it with one click when you are done.",
    image:
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?q=85&w=2000",
  },
];

export default function Hero() {
  const handleHeroClick = (swiper: SwiperType) => {
    swiper.slideNext();
  };

  return (
    <section className="relative h-85 w-full overflow-hidden bg-[#171b17] sm:h-95 md:h-105 lg:h-112.5">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="booknook-swiper h-full w-full"
        onClick={(swiper, event) => {
          const target = event.target as HTMLElement;

          // Don't change slide when clicking button or pagination
          if (
            target.closest("a") ||
            target.closest("button") ||
            target.closest(".swiper-pagination")
          ) {
            return;
          }

          handleHeroClick(swiper);
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex h-full w-full cursor-pointer items-center bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `
                  linear-gradient(
                    90deg,
                    rgba(0, 0, 0, 0.80) 0%,
                    rgba(0, 0, 0, 0.52) 50%,
                    rgba(0, 0, 0, 0.18) 100%
                  ),
                  url("${slide.image}")
                `,
              }}
            >
              {/* Content */}
              <div className="mx-auto flex h-full w-full max-w-350 items-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                <div className="max-w-137.5">
                  {/* Subtitle */}
                  <span className="mb-2 block text-[10px] font-bold tracking-[2px] text-[#d6a58c] sm:mb-3 sm:text-xs">
                    {slide.subtitle}
                  </span>

                  {/* Title */}
                  <h1 className="mb-3 font-serif text-3xl font-bold leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="mb-4 max-w-125 text-xs leading-6 text-white/85 sm:text-sm sm:leading-7 md:text-base">
                    {slide.description}
                  </p>

                  {/* Browse Books Button */}
                  <Link
                    href="/all-books"
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex items-center justify-center rounded-md bg-[#a6d9ae] px-4 py-2.5 text-xs font-semibold text-[#183d29] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c1e8c7] sm:px-5 sm:py-3 sm:text-sm"
                  >
                    Browse Books
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Pagination Styles */}
      <style jsx global>{`
        .booknook-swiper .swiper-pagination {
          bottom: 14px !important;
        }

        .booknook-swiper .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          background: white;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .booknook-swiper .swiper-pagination-bullet-active {
          width: 20px;
          border-radius: 999px;
          background: #a6d9ae;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}