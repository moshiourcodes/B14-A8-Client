// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { BookOpen, Sun, Moon, Menu, X } from "lucide-react";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "All Books", href: "/all-books" },
//   { name: "Add Book", href: "/add-book" },
//   { name: "My Books", href: "/my-books" },
//   { name: "My Borrows", href: "/my-borrows" },
// ];

// const Navbar = () => {
//   const pathname = usePathname();

//   const [isOpen, setIsOpen] = useState(false);

//   const [isDark, setIsDark] = useState(() => {
//     if (typeof window === "undefined") return false;

//     return (
//       localStorage.getItem("theme") === "dark" ||
//       (!localStorage.getItem("theme") &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches)
//     );
//   });

//   const toggleTheme = () => {
//     setIsDark((prevTheme) => {
//       const newTheme = !prevTheme;

//       document.documentElement.classList.toggle("dark", newTheme);

//       localStorage.setItem("theme", newTheme ? "dark" : "light");

//       return newTheme;
//     });
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white transition-colors duration-300 dark:border-[#26372c] dark:bg-[#0b1510]">
//       <nav className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
//         <div className="flex h-21.5 items-center">
//           {/* LEFT SIDE */}
//           <div className="flex items-center">
//             {/* LOGO */}
//             <Link
//               href="/"
//               onClick={() => setIsOpen(false)}
//               className="flex shrink-0 items-center gap-3"
//             >
//               <div className="flex h-13.5 w-13.5 items-center justify-center rounded-xl bg-[#9bd3a9]">
//                 <BookOpen
//                   size={27}
//                   strokeWidth={2.2}
//                   className="text-[#10251a]"
//                 />
//               </div>

//               <span className="text-[27px] font-bold tracking-tight text-[#152019] dark:text-[#f4f1eb]">
//                 BookNook
//               </span>
//             </Link>

//             {/* DESKTOP NAVIGATION */}
//             <div className="ml-20 hidden items-center gap-10 lg:flex">
//               {navLinks.map((link) => {
//                 const isActive = pathname === link.href;

//                 return (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     className={`text-[16px] font-medium transition-colors duration-200 ${
//                       isActive
//                         ? "text-[#75b985]"
//                         : "text-gray-600 hover:text-[#75b985] dark:text-[#aaa9a2] dark:hover:text-[#8fd39f]"
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="ml-auto flex items-center gap-5">
//             {/* THEME TOGGLE */}
//             <button
//               onClick={toggleTheme}
//               aria-label="Toggle theme"
//               className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-colors hover:bg-gray-100 hover:text-[#75b985] dark:text-[#e5e3dc] dark:hover:bg-[#17251c] dark:hover:text-[#8fd39f]"
//             >
//               {isDark ? <Sun size={22} /> : <Moon size={21} />}
//             </button>

//             {/* PROFILE */}
//             <Link
//               href="/profile"
//               className="h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-[#4f7760]"
//             >
//               <Image
//                 src="/profile.jpg"
//                 alt="Profile"
//                 width={50}
//                 height={50}
//                 className="h-full w-full object-cover"
//               />
//             </Link>

//             {/* MOBILE MENU BUTTON */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label={isOpen ? "Close menu" : "Open menu"}
//               aria-expanded={isOpen}
//               className="ml-1 flex h-10 w-10 items-center justify-center rounded-lg text-[#152019] dark:text-white lg:hidden"
//             >
//               {isOpen ? <X size={26} /> : <Menu size={26} />}
//             </button>
//           </div>
//         </div>

//         {/* MOBILE NAVIGATION */}
//         <div
//           className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
//             isOpen ? "max-h-100 pb-5 opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="flex flex-col gap-2 border-t border-gray-200 pt-4 dark:border-[#26372c]">
//             {navLinks.map((link) => {
//               const isActive = pathname === link.href;

//               return (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setIsOpen(false)}
//                   className={`rounded-lg px-4 py-3 text-[16px] font-medium transition-colors ${
//                     isActive
//                       ? "bg-[#9bd3a9]/20 text-[#5fa873] dark:bg-[#9bd3a9]/10 dark:text-[#9bd3a9]"
//                       : "text-gray-600 hover:bg-gray-100 hover:text-[#5fa873] dark:text-[#aaa9a2] dark:hover:bg-[#17251c] dark:hover:text-[#9bd3a9]"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;



















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
            isOpen
              ? "max-h-100 pb-5 opacity-100"
              : "max-h-0 opacity-0"
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
