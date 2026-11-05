"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "All Books", href: "/all-books" },
  { name: "Add Book", href: "/add-book" },
  { name: "My Books", href: "/my-books" },
  { name: "My Borrows", href: "/my-borrows" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#26372c] bg-[#0b1510]">
      <nav className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="flex h-21.5 items-center">
          {/* LEFT SIDE */}
          <div className="flex items-center">
            {/* LOGO */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex shrink-0 items-center gap-3"
            >
              <div className="flex h-13.5 w-13.5 items-center justify-center rounded-xl bg-[#9bd3a9]">
                <BookOpen
                  size={27}
                  strokeWidth={2.2}
                  className="text-[#10251a]"
                />
              </div>

              <span className="text-[27px] font-bold tracking-tight text-[#f4f1eb]">
                BookNook
              </span>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="ml-20 hidden items-center gap-10 lg:flex">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-[16px] font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-[#8fd39f]"
                        : "text-[#aaa9a2] hover:text-[#8fd39f]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="ml-auto flex items-center">
            {/* PROFILE */}
            <Link
              href="/profile"
              className="h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-[#4f7760]"
            >
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={50}
                height={50}
                className="h-full w-full object-cover"
              />
            </Link>

            {/* MOBILE MENU */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="ml-4 flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:text-[#8fd39f] lg:hidden"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            isOpen ? "max-h-100 pb-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 border-t border-[#26372c] pt-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-4 py-3 text-[16px] font-medium transition-colors ${
                    isActive
                      ? "bg-[#9bd3a9]/10 text-[#9bd3a9]"
                      : "text-[#aaa9a2] hover:bg-[#17251c] hover:text-[#9bd3a9]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
