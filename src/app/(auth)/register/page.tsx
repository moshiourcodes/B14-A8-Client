// "use client";

// import Link from "next/link";
// import { useState, type FormEvent } from "react";

// export default function RegisterPage() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [photoURL, setPhotoURL] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       setIsSubmitting(true);

//       const response = await fetch("http://localhost:5000/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           photoURL,
//           password,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         alert(data.message || "Registration failed");
//         return;
//       }

//       // Save registered user information
//       localStorage.setItem("booknook-user", JSON.stringify(data.user));

//       alert("Registration successful!");

//       // Clear form
//       setName("");
//       setEmail("");
//       setPhotoURL("");
//       setPassword("");

//       // Redirect after registration
//       window.location.href = "/";
//     } catch (error) {
//       console.error("Registration error:", error);
//       alert("Unable to connect to the server. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <main className="flex min-h-[calc(100vh-88px)] items-center justify-center bg-[#0d1711] px-4 py-6 text-[#f4f1eb]">
//       <div className="w-full max-w-[430px] rounded-xl border border-[#303a33] bg-[#17231c] px-5 py-6 sm:px-7">
//         {/* Heading */}
//         <h1 className="mb-5 text-center font-serif text-3xl font-bold">
//           Create an account
//         </h1>

//         {/* Register Form */}
//         <form onSubmit={handleRegister} className="space-y-3">
//           {/* Name */}
//           <div>
//             <label htmlFor="name" className="mb-1 block text-xs font-medium">
//               Name
//             </label>

//             <input
//               id="name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter your name"
//               required
//               className="h-9 w-full rounded-md border border-[#414a43] bg-[#202b25] px-3 text-sm outline-none transition focus:border-[#92cba0]"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label htmlFor="email" className="mb-1 block text-xs font-medium">
//               Email
//             </label>

//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               required
//               className="h-9 w-full rounded-md border border-[#414a43] bg-[#202b25] px-3 text-sm outline-none transition focus:border-[#92cba0]"
//             />
//           </div>

//           {/* Photo URL */}
//           <div>
//             <label
//               htmlFor="photoURL"
//               className="mb-1 block text-xs font-medium"
//             >
//               Photo URL
//             </label>

//             <input
//               id="photoURL"
//               type="url"
//               value={photoURL}
//               onChange={(e) => setPhotoURL(e.target.value)}
//               placeholder="https://..."
//               className="h-9 w-full rounded-md border border-[#414a43] bg-[#202b25] px-3 text-sm outline-none transition placeholder:text-[#aaa9a2] focus:border-[#92cba0]"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label
//               htmlFor="password"
//               className="mb-1 block text-xs font-medium"
//             >
//               Password
//             </label>

//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Minimum 8 characters"
//               required
//               minLength={8}
//               className="h-9 w-full rounded-md border border-[#414a43] bg-[#202b25] px-3 text-sm outline-none transition focus:border-[#92cba0]"
//             />
//           </div>

//           {/* Register Button */}
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="h-9 w-full rounded-md bg-[#92cba0] text-sm font-semibold text-[#10251a] transition hover:bg-[#a8d9b5] disabled:cursor-not-allowed disabled:opacity-60"
//           >
//             {isSubmitting ? "Registering..." : "Register"}
//           </button>
//         </form>

//         {/* OR Divider */}
//         <div className="my-4 flex items-center gap-3">
//           <div className="h-px flex-1 bg-[#303a33]" />
//           <span className="text-xs text-[#aaa9a2]">OR</span>
//           <div className="h-px flex-1 bg-[#303a33]" />
//         </div>

//         {/* Google Button */}
//         <button
//           type="button"
//           disabled
//           className="flex h-9 w-full cursor-not-allowed items-center justify-center gap-2 rounded-md border border-[#414a43] bg-[#202b25] text-xs font-medium opacity-60 sm:text-sm"
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

//         {/* Login Link */}
//         <p className="mt-5 text-center text-xs text-[#aaa9a2] sm:text-sm">
//           Already have an account?{" "}
//           <Link
//             href="/log-in"
//             className="font-medium text-[#92cba0] transition hover:text-[#b5e3bd]"
//           >
//             Login
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

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const response = await fetch(
        "http://localhost:5000/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            photoURL,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      localStorage.setItem(
        "booknook-user",
        JSON.stringify(data.user)
      );

      window.dispatchEvent(new Event("booknook-auth-change"));

      alert("Registration successful!");

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Registration error:", error);
      alert("Unable to connect to the server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-88px)] items-center justify-center bg-[#0d1711] px-4 py-6 text-[#f4f1eb]">
      <div className="w-full max-w-[430px] rounded-xl border border-[#303a33] bg-[#17231c] px-5 py-6 sm:px-7">

        <h1 className="mb-5 text-center font-serif text-3xl font-bold">
          Create an account
        </h1>

        <form onSubmit={handleRegister} className="space-y-3">

          <div>
            <label htmlFor="name" className="mb-1 block text-xs font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              autoComplete="name"
              required
              className="h-9 w-full rounded-md border border-[#414a43] bg-[#202b25] px-3 text-sm outline-none transition focus:border-[#92cba0]"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-xs font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              autoComplete="email"
              required
              className="h-9 w-full rounded-md border border-[#414a43] bg-[#202b25] px-3 text-sm outline-none transition focus:border-[#92cba0]"
            />
          </div>

          <div>
            <label htmlFor="photoURL" className="mb-1 block text-xs font-medium">
              Photo URL
            </label>
            <input
              id="photoURL"
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="https://..."
              className="h-9 w-full rounded-md border border-[#414a43] bg-[#202b25] px-3 text-sm outline-none transition placeholder:text-[#aaa9a2] focus:border-[#92cba0]"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-xs font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimum 8 characters"
              autoComplete="new-password"
              minLength={8}
              required
              className="h-9 w-full rounded-md border border-[#414a43] bg-[#202b25] px-3 text-sm outline-none transition focus:border-[#92cba0]"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="h-9 w-full rounded-md bg-[#92cba0] text-sm font-semibold text-[#10251a] transition hover:bg-[#a8d9b5] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="my-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#303a33]" />
          <span className="text-xs text-[#aaa9a2]">OR</span>
          <div className="h-px flex-1 bg-[#303a33]" />
        </div>

        <button
          type="button"
          disabled
          className="flex h-9 w-full cursor-not-allowed items-center justify-center gap-2 rounded-md border border-[#414a43] bg-[#202b25] text-xs font-medium opacity-60 sm:text-sm"
        >
          Continue with Google
        </button>

        <p className="mt-5 text-center text-xs text-[#aaa9a2] sm:text-sm">
          Already have an account?{" "}
          <Link
            href="/log-in"
            className="font-medium text-[#92cba0] transition hover:text-[#b5e3bd]"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}