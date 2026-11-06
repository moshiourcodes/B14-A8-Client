"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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
  const [mounted, setMounted] = useState(false);

  // Initialize Swiper after component mounts
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const renderSlideContent = (slide: Slide) => (
    <div
      className="flex h-full w-full items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.82) 0%,
            rgba(0, 0, 0, 0.55) 50%,
            rgba(0, 0, 0, 0.20) 100%
          ),
          url("${slide.image}")
        `,
      }}
    >
      <div className="mx-auto flex h-full w-full max-w-350 items-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-162.5">
          <span className="mb-3 block text-xs font-bold tracking-[3px] text-[#d6a58c] sm:text-sm">
            {slide.subtitle}
          </span>

          <h1 className="mb-4 font-serif text-4xl font-bold leading-[1.15] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {slide.title}
          </h1>

          <p className="mb-6 max-w-150 text-sm leading-7 text-white/85 sm:text-base sm:leading-8 md:text-lg">
            {slide.description}
          </p>

          <Link
            href="/all-books"
            className="inline-flex items-center justify-center rounded-2xl bg-[#a6d9ae] px-5 py-3 text-sm font-semibold text-[#183d29] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c1e8c7] sm:px-6 sm:py-3.5 sm:text-base"
          >
            Browse Books
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative h-105 w-full overflow-hidden bg-[#171b17] sm:h-120 md:h-137.5 lg:h-150">
      {mounted ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          speed={800}
          // Autoplay
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: true,
          }}
          // Pagination
          pagination={{
            clickable: true,
          }}
          // Drag and Swipe
          allowTouchMove={true}
          simulateTouch={true}
          grabCursor={true}
          threshold={5}
          touchRatio={1}
          touchAngle={45}
          touchStartPreventDefault={false}
          preventClicks={true}
          preventClicksPropagation={true}
          className="booknook-swiper h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>{renderSlideContent(slide)}</SwiperSlide>
          ))}
        </Swiper>
      ) : (
        renderSlideContent(slides[0])
      )}
    </section>
  );
}
