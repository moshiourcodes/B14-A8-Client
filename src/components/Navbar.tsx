"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BookOpen, Menu, X, Sun, UserRound } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "All Books", href: "/all-books" },
  { name: "Add Book", href: "/add-book" },
  { name: "My Books", href: "/my-books" },
  { name: "My Borrows", href: "/my-borrows" },
];

type User = {
  _id: string;
  name: string;
  email: string;
  photoURL?: string;
};

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);

  // Load logged-in user
  useEffect(() => {
    const loadUser = () => {
      const savedUser = localStorage.getItem("booknook-user");

      if (!savedUser) {
        setUser(null);
        return;
      }

      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem("booknook-user");
        setUser(null);
      }
    };

    loadUser();

    window.addEventListener("booknook-auth-change", loadUser);
    window.addEventListener("storage", loadUser);

    return () => {
      window.removeEventListener("booknook-auth-change", loadUser);
      window.removeEventListener("storage", loadUser);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("booknook-user");

    setUser(null);
    setProfileOpen(false);
    setIsOpen(false);

    window.dispatchEvent(new Event("booknook-auth-change"));

    router.push("/");
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#26372c] bg-[#0b1510]">
      <nav className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="flex h-22 items-center justify-between">
          {/* LOGO + DESKTOP NAVIGATION */}
          <div className="flex items-center">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex shrink-0 items-center gap-3"
            >
              <div className="flex h-13.5 w-13.5 items-center justify-center rounded-xl bg-[#9bd3a9]">
                <BookOpen
                  size={28}
                  strokeWidth={2.2}
                  className="text-[#10251a]"
                />
              </div>

              <span className="font-serif text-[27px] font-bold tracking-tight text-[#f4f1eb] sm:text-[30px]">
                BookNook
              </span>
            </Link>

            <div className="ml-8 hidden items-center gap-6 lg:ml-12 lg:flex xl:ml-16 xl:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`whitespace-nowrap text-[16px] font-medium transition-colors duration-200 xl:text-[17px] ${
                    isActive(link.href)
                      ? "text-[#8fd39f]"
                      : "text-[#aaa9a2] hover:text-[#8fd39f]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden items-center gap-8 lg:flex">
            {/* THEME ICON */}
            <button
              type="button"
              aria-label="Theme"
              className="text-[#f4f1eb] transition hover:text-[#92cba0]"
            >
              <Sun size={30} />
            </button>

            {user ? (
              /* LOGGED-IN PROFILE */
              <div className="relative">
                {/* PROFILE PHOTO */}
                <button
                  type="button"
                  onClick={() => setProfileOpen((prev) => !prev)}
                  aria-label="Open profile menu"
                  aria-expanded={profileOpen}
                  className="flex items-center justify-center"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.name}
                      className="h-19 w-[76px] rounded-full border-4 border-[#344f3a] object-cover"
                    />
                  ) : (
                    <div className="flex h-19 w-19 items-center justify-center rounded-full border-4 border-[#344f3a] bg-[#202b25]">
                      <UserRound size={32} />
                    </div>
                  )}
                </button>

                {/* PROFILE DROPDOWN */}
                {profileOpen && (
                  <div className="absolute right-0 top-20.5 z-50 w-105 max-w-[calc(100vw-32px)] overflow-hidden rounded-2xl border border-[#303a33] bg-[#17231c] shadow-xl">
                    {/* USER NAME */}
                    <div className="border-b border-[#303a33] px-5 py-4">
                      <p className="truncate text-[24px] font-medium text-[#aaa9a2]">
                        {user.name}
                      </p>
                    </div>

                    {/* MY PROFILE */}
                    <Link
                      href="/my-profile"
                      onClick={() => setProfileOpen(false)}
                      className="block px-5 py-4 text-[26px] text-[#f4f1eb] transition hover:bg-[#26372c]"
                    >
                      My Profile
                    </Link>

                    {/* LOGOUT */}
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="block w-full px-5 py-4 text-left text-[26px] text-[#f4f1eb] transition hover:bg-[#26372c]"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* LOGIN + REGISTER */
              <div className="flex items-center gap-3">
                <Link
                  href="/log-in"
                  className={`rounded-xl border px-5 py-2.5 text-base font-medium transition ${
                    pathname === "/log-in"
                      ? "border-[#92cba0] text-[#92cba0]"
                      : "border-[#303a33] text-[#f4f1eb] hover:border-[#92cba0] hover:text-[#92cba0]"
                  }`}
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className={`rounded-xl px-5 py-2.5 text-base font-medium text-[#10251a] transition ${
                    pathname === "/register"
                      ? "bg-[#b5e3bd]"
                      : "bg-[#9bd3a9] hover:bg-[#b5e3bd]"
                  }`}
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-[#f4f1eb] transition hover:text-[#92cba0] lg:hidden"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            isOpen ? "max-h-175 pb-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 border-t border-[#26372c] pt-4">
            {/* MOBILE PROFILE */}
            {user && (
              <div className="mb-2 flex items-center gap-3 rounded-lg bg-[#17231c] p-3">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.name}
                    className="h-12 w-12 rounded-full border-2 border-[#344f3a] object-cover"
                  />
                ) : (
                  <UserRound size={38} />
                )}

                <p className="truncate text-sm font-semibold">{user.name}</p>
              </div>
            )}

            {/* NAVIGATION LINKS */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-[#9bd3a9]/10 text-[#9bd3a9]"
                    : "text-[#aaa9a2] hover:bg-[#17251c] hover:text-[#9bd3a9]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* MOBILE AUTH */}
            {user ? (
              <>
                <Link
                  href="/my-profile"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-base text-[#f4f1eb] hover:bg-[#26372c]"
                >
                  My Profile
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-lg px-4 py-3 text-left text-base text-red-400 hover:bg-red-400/10"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="mt-2 flex gap-3 border-t border-[#26372c] pt-4">
                <Link
                  href="/log-in"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-xl border border-[#303a33] px-4 py-3 text-center font-medium text-[#f4f1eb] transition hover:border-[#92cba0]"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-xl bg-[#9bd3a9] px-4 py-3 text-center font-medium text-[#10251a] transition hover:bg-[#b5e3bd]"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
