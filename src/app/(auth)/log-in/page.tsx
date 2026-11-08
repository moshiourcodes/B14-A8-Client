// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState, type FormEvent } from "react";

// export default function LoginPage() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       setIsSubmitting(true);

//       const response = await fetch("http://localhost:5000/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         alert(data.message || "Login failed");
//         return;
//       }

//       // Save user information (never save the password)
//       localStorage.setItem("booknook-user", JSON.stringify(data.user));

//       alert("Login successful!");

//       // Redirect to homepage
//       router.push("/");
//       router.refresh();
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Unable to connect to the server. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <main className="flex min-h-[calc(100vh-88px)] items-center justify-center bg-[#0d1711] px-4 py-8 text-[#f4f1eb]">
//       <div className="w-full max-w-[384px] rounded-xl border border-[#303a33] bg-[#17231c] px-6 py-7 sm:px-8 sm:py-8">
//         {/* Heading */}
//         <h1 className="mb-6 text-center font-serif text-4xl font-bold">
//           Login
//         </h1>

//         {/* Login Form */}
//         <form onSubmit={handleLogin} className="space-y-4">
//           {/* Email */}
//           <div>
//             <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
//               Email
//             </label>

//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your registered email"
//               autoComplete="email"
//               required
//               className="h-10 w-full rounded-lg border border-[#414a43] bg-[#202b25] px-3 text-sm outline-none transition focus:border-[#92cba0]"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label
//               htmlFor="password"
//               className="mb-1.5 block text-sm font-medium"
//             >
//               Password
//             </label>

//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               autoComplete="current-password"
//               required
//               className="h-10 w-full rounded-lg border border-[#414a43] bg-[#202b25] px-3 text-sm outline-none transition focus:border-[#92cba0]"
//             />
//           </div>

//           {/* Forgot Password */}
//           <div>
//             <Link
//               href="/forgot-password"
//               className="text-sm font-medium text-[#92cba0] hover:text-[#b5e3bd]"
//             >
//               Forgot Password?
//             </Link>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="h-10 w-full rounded-lg bg-[#92cba0] text-sm font-semibold text-[#10251a] transition hover:bg-[#a8d9b5] disabled:cursor-not-allowed disabled:opacity-60"
//           >
//             {isSubmitting ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         {/* OR Divider */}
//         <div className="my-5 flex items-center gap-3">
//           <div className="h-px flex-1 bg-[#303a33]" />
//           <span className="text-sm text-[#aaa9a2]">OR</span>
//           <div className="h-px flex-1 bg-[#303a33]" />
//         </div>

//         {/* Google Login */}
//         <button
//           type="button"
//           disabled
//           className="flex h-10 w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-[#414a43] bg-[#202b25] text-sm font-medium opacity-60"
//         >
//           <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
//             <path
//               fill="#4285F4"
//               d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.9 6.1-15Z"
//             />
//             <path
//               fill="#34A853"
//               d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 1.9-6.9 1.9-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z"
//             />
//             <path
//               fill="#FBBC05"
//               d="M12.6 27.5a12 12 0 0 1 0-7v-5.3H5.8a20 20 0 0 0 0 17.6l6.8-5.3Z"
//             />
//             <path
//               fill="#EA4335"
//               d="M24 12.1c3 0 5.7 1 7.8 3.1l5.9-5.9A19.7 19.7 0 0 0 24 4 20 20 0 0 0 5.8 15.2l6.8 5.3c1.6-4.8 6.1-8.4 11.4-8.4Z"
//             />
//           </svg>
//           Continue with Google
//         </button>

//         {/* Register Link */}
//         <p className="mt-6 text-center text-sm text-[#aaa9a2]">
//           New here?{" "}
//           <Link
//             href="/register"
//             className="font-medium text-[#92cba0] hover:text-[#b5e3bd]"
//           >
//             Register
//           </Link>
//         </p>
//       </div>
//     </main>
//   );
// }























"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const response = await fetch(
        "http://localhost:5000/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed");
        return;
      }

      localStorage.setItem(
        "booknook-user",
        JSON.stringify(data.user)
      );

      window.dispatchEvent(new Event("booknook-auth-change"));

      alert("Login successful!");

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Login error:", error);
      alert("Unable to connect to the server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-88px)] items-center justify-center bg-[#0d1711] px-4 py-8 text-[#f4f1eb]">
      <div className="w-full max-w-[384px] rounded-xl border border-[#303a33] bg-[#17231c] px-6 py-7 sm:px-8 sm:py-8">

        <h1 className="mb-6 text-center font-serif text-4xl font-bold">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your registered email"
              autoComplete="email"
              required
              className="h-10 w-full rounded-lg border border-[#414a43] bg-[#202b25] px-3 text-sm outline-none transition focus:border-[#92cba0]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
              className="h-10 w-full rounded-lg border border-[#414a43] bg-[#202b25] px-3 text-sm outline-none transition focus:border-[#92cba0]"
            />
          </div>

          <div>
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-[#92cba0] hover:text-[#b5e3bd]"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="h-10 w-full rounded-lg bg-[#92cba0] text-sm font-semibold text-[#10251a] transition hover:bg-[#a8d9b5] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#303a33]" />
          <span className="text-sm text-[#aaa9a2]">OR</span>
          <div className="h-px flex-1 bg-[#303a33]" />
        </div>

        <button
          type="button"
          disabled
          className="flex h-10 w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-[#414a43] bg-[#202b25] text-sm font-medium opacity-60"
        >
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-[#aaa9a2]">
          New here?{" "}
          <Link
            href="/register"
            className="font-medium text-[#92cba0] hover:text-[#b5e3bd]"
          >
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}