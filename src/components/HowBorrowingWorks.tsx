"use client";

import { BookOpen, RotateCcw, Search } from "lucide-react";

const steps = [
  {
    number: "Step 1",
    title: "Find a book",
    description: "Browse the shelf and open any book you like.",
    icon: Search,
  },
  {
    number: "Step 2",
    title: "Borrow it",
    description: "Confirm the borrow. The book is yours for 7 days.",
    icon: BookOpen,
  },
  {
    number: "Step 3",
    title: "Return it",
    description:
      "Done reading? Return it from My Borrows in one click.",
    icon: RotateCcw,
  },
];

export default function HowBorrowingWorks() {
  return (
    <section className="w-full bg-[#15271d] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-275 px-5 sm:px-8 lg:px-10">
        
      
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="font-serif text-2xl font-bold text-[#f5f1e8] sm:text-3xl">
            How Borrowing Works
          </h2>

          <p className="mt-2 text-xs text-[#a8b5aa] sm:text-sm">
            Three steps. No library card needed.
          </p>
        </div>

   
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="rounded-sm border border-[#24402f] bg-[#112219] px-5 py-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#3c6248]"
              >
           
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#9bd7a6]">
                  <Icon
                    size={19}
                    strokeWidth={2}
                    className="text-[#183525]"
                  />
                </div>

                {/* Step Number */}
                <p className="mt-3 text-[10px] font-medium text-[#c88f75]">
                  {step.number}
                </p>

                {/* Title */}
                <h3 className="mt-1 font-serif text-base font-bold text-[#f5f1e8] sm:text-lg">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mx-auto mt-2 max-w-65 text-xs leading-5 text-[#9eaaa1]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}