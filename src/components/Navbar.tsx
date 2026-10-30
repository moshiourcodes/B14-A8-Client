
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BookOpen,
  Sun,
  Menu,
  X,
} from "lucide-react";

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

  const [isDark, setIsDark] = useState(true);
 console.log(isDark);
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="w-full bg-[#0b1510] border-b border-[#26372c] sticky top-0 z-50">
      <nav className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">

        <div className="h-17.5 md:h-19.5 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 shrink-0"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#a8d9b5] flex items-center justify-center">
              <BookOpen
                size={24}
                className="text-[#10251a]"
                strokeWidth={2.2}
              />
            </div>

            <span className="text-white text-xl sm:text-2xl font-bold tracking-tight">
              BookNook
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm xl:text-[15px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#a8d9b5]"
                      : "text-gray-300 hover:text-[#a8d9b5]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-5">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-gray-300 hover:text-[#a8d9b5] transition-colors"
            >
              <Sun size={21} />
            </button>

            {/* Profile */}
            <Link
              href="/profile"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#35483a] shrink-0"
            >
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={44}
                height={44}
                className="w-full h-full object-cover"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="lg:hidden text-white hover:text-[#a8d9b5] transition-colors"
            >
              {isOpen ? (
                <X size={25} />
              ) : (
                <Menu size={25} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100 pb-5"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 border-t border-[#26372c] pt-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#a8d9b5]/10 text-[#a8d9b5]"
                      : "text-gray-300 hover:bg-[#17251c] hover:text-[#a8d9b5]"
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
