
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
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
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-120 min-h-105 w-full overflow-hidden bg-[#171b17] sm:h-130 lg:h-137.5 xl:h-145">

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            activeSlide === index
              ? "z-10 opacity-100"
              : "z-0 opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(
              90deg,
              rgba(0,0,0,0.78) 0%,
              rgba(0,0,0,0.48) 50%,
              rgba(0,0,0,0.15) 100%
            ), url("${slide.image}")`,
          }}
          aria-hidden={activeSlide !== index}
        >
          {/* Content */}
          <div className="mx-auto flex h-full w-full max-w-350 items-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div
              className={`max-w-137.5 transition-all duration-700 ${
                activeSlide === index
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <span className="mb-4 block text-[11px] font-bold tracking-[2px] text-[#d6a58c] sm:mb-5 sm:text-xs">
                {slide.subtitle}
              </span>

              <h1 className="mb-4 font-serif text-4xl font-bold leading-[1.2] text-white sm:mb-5 sm:text-5xl md:text-6xl lg:text-[64px]">
                {slide.title}
              </h1>

              <p className="mb-6 max-w-125 text-sm leading-7 text-white/85 sm:mb-7 sm:text-base">
                {slide.description}
              </p>

              <Link
                href="/books"
                tabIndex={activeSlide === index ? 0 : -1}
                className="inline-flex items-center justify-center rounded-md bg-[#a6d9ae] px-4 py-3 text-xs font-semibold text-[#183d29] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c1e8c7] sm:text-sm"
              >
                Browse Books
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeSlide === index ? "true" : undefined}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "w-2 bg-[#e9a17e]"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}


