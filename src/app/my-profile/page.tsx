"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserRound } from "lucide-react";

type User = {
  _id?: string;
  name: string;
  email: string;
  photoURL?: string;
  createdAt?: string;
};

export default function MyProfilePage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("booknook-user");

    if (!savedUser) {
      router.replace("/log-in");
      return;
    }

    try {
      const parsedUser: User = JSON.parse(savedUser);

      if (!parsedUser.name || !parsedUser.email) {
        localStorage.removeItem("booknook-user");
        router.replace("/log-in");
        return;
      }

      setUser(parsedUser);
    } catch (error) {
      console.error("Unable to load user profile:", error);
      localStorage.removeItem("booknook-user");
      router.replace("/log-in");
    } finally {
      setLoading(false);
    }
  }, [router]);

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

  if (loading) {
    return (
      <main className="flex min-h-[calc(100vh-88px)] items-center justify-center bg-[#0d1711] text-[#f4f1eb]">
        <p className="text-[#aaa9a2]">Loading profile...</p>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="flex min-h-[calc(100vh-88px)] items-center justify-center bg-[#0d1711] px-4 py-12 text-[#f4f1eb]">

      {/* PROFILE CARD */}
      <section className="w-full max-w-[780px] rounded-xl border border-[#303a33] bg-[#17231c] px-5 py-12 text-center sm:px-10 sm:py-14">

        {/* PROFILE IMAGE */}
        <div className="mx-auto flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-full border-[6px] border-[#344f3a] bg-[#202b25] sm:h-[180px] sm:w-[180px]">

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
        <h1 className="mt-7 break-words font-serif text-4xl font-bold text-[#f4f1eb] sm:text-[58px]">
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