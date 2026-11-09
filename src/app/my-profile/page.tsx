"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { UserRound } from "lucide-react";

type User = {
  _id?: string;
  name: string;
  email: string;
  photoURL?: string;
  createdAt?: string;
};

// Listen for login/logout changes
const subscribe = (callback: () => void) => {
  window.addEventListener("booknook-auth-change", callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("booknook-auth-change", callback);
    window.removeEventListener("storage", callback);
  };
};

// Get saved user from localStorage
const getSnapshot = () => {
  return localStorage.getItem("booknook-user");
};

// Server-side snapshot
const getServerSnapshot = () => null;

export default function MyProfilePage() {
  const router = useRouter();

  const userSnapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  // Convert saved JSON into a user object
  let user: User | null = null;

  if (userSnapshot) {
    try {
      const parsedUser = JSON.parse(userSnapshot);

      if (parsedUser.name && parsedUser.email) {
        user = parsedUser;
      }
    } catch {
      user = null;
    }
  }

  // Redirect if user is not logged in
  useEffect(() => {
    if (userSnapshot === null) return;

    if (!user) {
      localStorage.removeItem("booknook-user");
      router.replace("/log-in");
    }
  }, [userSnapshot, router, user]);

  // Format registration date
  const formatMemberDate = (date?: string) => {
    if (!date) return "Member";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "Member";
    }

    return parsedDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Loading state
  if (userSnapshot === null) {
    return (
      <main className="flex min-h-[calc(100vh-88px)] items-center justify-center bg-[#0d1711] text-[#f4f1eb]">
        <p className="text-[#aaa9a2]">Loading profile...</p>
      </main>
    );
  }

  // No logged-in user
  if (!user) {
    return (
      <main className="flex min-h-[calc(100vh-88px)] items-center justify-center bg-[#0d1711] px-4 text-center text-[#f4f1eb]">
        <div>
          <p className="mb-4 text-[#aaa9a2]">
            Please log in to view your profile.
          </p>

          <Link
            href="/log-in"
            className="rounded-lg bg-[#92cba0] px-6 py-3 font-medium text-[#10251a] transition hover:bg-[#a8d9b5]"
          >
            Login
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-[calc(100vh-88px)] items-center justify-center bg-[#0d1711] px-4 py-12 text-[#f4f1eb]">

      {/* PROFILE CARD */}
      <section className="w-full max-w-195 rounded-xl border border-[#303a33] bg-[#17231c] px-5 py-12 text-center sm:px-10 sm:py-14">

        {/* PROFILE IMAGE */}
        <div className="mx-auto flex h-37.5 w-37.5 items-center justify-center overflow-hidden rounded-full border-[6px] border-[#344f3a] bg-[#202b25] sm:h-45 sm:w-45">

          {user.photoURL ? (
            <Image
              src={user.photoURL}
              alt={user.name}
              width={180}
              height={180}
              unoptimized
              className="h-full w-full object-cover"
            />
          ) : (
            <UserRound
              size={80}
              strokeWidth={1.5}
              className="text-[#aaa9a2]"
            />
          )}
        </div>

        {/* USER NAME */}
        <h1 className="mt-7 wrap-break-word font-serif text-4xl font-bold text-[#f4f1eb] sm:text-[58px]">
          {user.name}
        </h1>

        {/* USER EMAIL */}
        <p className="mt-2 break-all text-lg text-[#aaa9a2] sm:text-[26px]">
          {user.email}
        </p>

        {/* MEMBER SINCE */}
        <p className="mt-8 text-base text-[#aaa9a2] sm:text-[23px]">
          Member since {formatMemberDate(user.createdAt)}
        </p>

      </section>
    </main>
  );
}