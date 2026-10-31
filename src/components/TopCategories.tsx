"use client";

import { Atom, Baby, Landmark, Sparkles } from "lucide-react";

const categories = [
  {
    title: "Fiction",
    description: "Novels and short stories",
    icon: Sparkles,
  },
  {
    title: "Science",
    description: "How the world works",
    icon: Atom,
  },
  {
    title: "History",
    description: "Stories from the past",
    icon: Landmark,
  },
  {
    title: "Kids",
    description: "Picture books and more",
    icon: Baby,
  },
];

export default function TopCategories() {
  return (
    <section className="w-full bg-[#07180f] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-280 px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="mb-7 text-center sm:mb-10">
          <h2 className="font-serif text-2xl font-bold text-[#f1eee5] sm:text-3xl">
            Top Categories
          </h2>

          <p className="mt-1.5 text-xs text-[#8f9d94] sm:text-sm">
            Pick a shelf and start reading.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.title}
                type="button"
                className="group flex min-h-23.5 flex-col items-center justify-center rounded-md border border-[#1b3426] bg-[#11251a] px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#4f8061] hover:bg-[#152b1e]"
              >
                {/* Icon */}
                <Icon
                  size={22}
                  strokeWidth={1.8}
                  className="mb-2 text-[#9bd7b0] transition-transform duration-300 group-hover:scale-110"
                />

                {/* Category Name */}
                <h3 className="font-serif text-sm font-bold text-[#f1eee5] sm:text-base">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="mt-1 text-[10px] text-[#8f9d94] sm:text-xs">
                  {category.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}