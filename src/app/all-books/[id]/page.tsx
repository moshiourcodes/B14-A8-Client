
// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";

// interface Book {
//   _id: string;
//   title: string;
//   author: string;
//   category: string;
//   image: string;
//   description: string;
//   copies: number;
//   username?: string;
//   email?: string;
//   createdAt?: string;
// }

// interface BooksResponse {
//   success?: boolean;
//   totalBooks?: number;
//   books?: Book[];
// }

// export default function BookDetailsPage() {
//   const params = useParams<{ id: string }>();
//   const bookId = params.id;

//   const [book, setBook] = useState<Book | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchBook = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         // Fetch all books using your existing API
//         const response = await fetch(
//           "http://localhost:5000/books",
//           {
//             cache: "no-store",
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch books");
//         }

//         const data: BooksResponse | Book[] =
//           await response.json();

//         // Support both array and object API responses
//         const allBooks = Array.isArray(data)
//           ? data
//           : data.books || [];

//         // Find selected book using MongoDB ID
//         const selectedBook = allBooks.find(
//           (item) => String(item._id) === String(bookId)
//         );

//         if (!selectedBook) {
//           throw new Error("Book not found");
//         }

//         setBook(selectedBook);

//       } catch (err) {
//         console.error("Error fetching book:", err);

//         setError(
//           err instanceof Error
//             ? err.message
//             : "Something went wrong!"
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (bookId) {
//       fetchBook();
//     }
//   }, [bookId]);

//   // Loading
//   if (loading) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-[#0d1711]">
//         <p className="text-[#92cba0]">
//           Loading book details...
//         </p>
//       </main>
//     );
//   }

//   // Error
//   if (error || !book) {
//     return (
//       <main className="flex min-h-screen flex-col items-center justify-center bg-[#0d1711] px-4 text-center text-[#f4f1eb]">

//         <h1 className="font-serif text-3xl font-bold">
//           Book Not Found
//         </h1>

//         <p className="mt-3 text-[#aaa9a2]">
//           {error || "This book is not available."}
//         </p>

//         <Link
//           href="/all-books"
//           className="mt-6 rounded-lg bg-[#92cba0] px-5 py-3 text-sm font-medium text-[#10251a] transition hover:bg-[#a8d9b5]"
//         >
//           Back to All Books
//         </Link>

//       </main>
//     );
//   }

//   const available = Number(book.copies) > 0;

//   return (
//     <main className="min-h-screen bg-[#0d1711] px-4 py-10 text-[#f4f1eb] sm:px-6 lg:px-10">

//       <div className="mx-auto max-w-[1410px]">

//         <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">

//           {/* Book Image */}
//           <div className="relative mx-auto aspect-[3/4] w-full max-w-[550px] overflow-hidden rounded-md border border-[#303a33] bg-[#17231c] md:mx-0">

//             {book.image ? (
//               <Image
//                 src={book.image}
//                 alt={book.title}
//                 fill
//                 priority
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 className="object-cover"
//               />
//             ) : (
//               <div className="flex h-full items-center justify-center text-[#aaa9a2]">
//                 No Image Available
//               </div>
//             )}

//           </div>

//           {/* Book Information */}
//           <div className="pt-1">

//             {/* Category */}
//             <span className="inline-block rounded-full bg-[#26342b] px-3 py-1 text-xs text-[#c5d6c8]">
//               {book.category}
//             </span>

//             {/* Title */}
//             <h1 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
//               {book.title}
//             </h1>

//             {/* Author */}
//             <p className="mt-4 text-base text-[#aaa9a2] sm:text-lg">
//               by {book.author}
//             </p>

//             {/* Description */}
//             <p className="mt-5 text-sm leading-7 text-[#d0d0c9] sm:text-base">
//               {book.description || "No description available."}
//             </p>

//             {/* Book Information */}
//             <div className="mt-6 grid grid-cols-1 gap-5 rounded-lg border border-[#303a33] bg-[#17231c] p-5 sm:grid-cols-2">

//               {/* Added By */}
//               <div>
//                 <p className="text-sm text-[#aaa9a2]">
//                   Added by
//                 </p>

//                 <p className="mt-1 text-sm font-medium">
//                   {book.username || "Unknown"}
//                 </p>

//                 <p className="mt-1 break-all text-sm text-[#aaa9a2]">
//                   {book.email || "No email available"}
//                 </p>
//               </div>

//               {/* Copies Left */}
//               <div>
//                 <p className="text-sm text-[#aaa9a2]">
//                   Copies left
//                 </p>

//                 <p className="mt-1 text-sm font-medium">
//                   {book.copies ?? 0}
//                 </p>
//               </div>

//             </div>

//             {/* Availability */}
//             <div className="mt-5 flex flex-wrap items-center gap-3">

//               <button
//                 disabled
//                 className={`rounded-lg px-4 py-2 text-sm font-medium ${
//                   available
//                     ? "bg-[#395d44] text-[#d0e8d5]"
//                     : "cursor-not-allowed bg-[#395d44] text-[#d0d0c9]"
//                 }`}
//               >
//                 {available ? "Available" : "Not Available"}
//               </button>

//               <Link
//                 href="/all-books"
//                 className="text-sm font-medium text-[#92cba0] transition hover:text-[#b5e3bd]"
//               >
//                 Back to all books
//               </Link>

//             </div>

//           </div>

//         </div>

//       </div>

//     </main>
//   );
// }














"use client";

import { useEffect, useState, FormEvent } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Book {
  _id: string;
  title: string;
  author: string;
  category: string;
  image: string;
  description: string;
  copies: number;
  username?: string;
  email?: string;
  createdAt?: string;
}

interface BooksResponse {
  success: boolean;
  totalBooks: number;
  books: Book[];
}

export default function BookDetailsPage() {
  const params = useParams<{ id: string }>();
  const bookId = params.id;

  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [borrowing, setBorrowing] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Fetch books
  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "http://localhost:5000/books",
          { cache: "no-store" }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data: BooksResponse | Book[] =
          await response.json();

        const allBooks = Array.isArray(data)
          ? data
          : data.books || [];

        const selectedBook = allBooks.find(
          (item) => String(item._id) === String(bookId)
        );

        if (!selectedBook) {
          throw new Error("Book not found");
        }

        setBook(selectedBook);

      } catch (err) {
        console.error(err);
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };

    if (bookId) {
      fetchBook();
    }
  }, [bookId]);

  // Borrow book
  const handleBorrow = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!book) return;

    if (!username.trim() || !email.trim()) {
      setError("Please enter your name and email.");
      return;
    }

    setBorrowing(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/borrow-book",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bookId: book._id,
            username: username.trim(),
            email: email.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to borrow book"
        );
      }

      // Update book copies immediately
      setBook(data.book);

      setMessage(
        `Book borrowed successfully! Please return it by ${new Date(
          data.dueDate
        ).toLocaleDateString()}`
      );

      setShowModal(false);

      setUsername("");
      setEmail("");

    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong"
      );
    } finally {
      setBorrowing(false);
    }
  };

  // Loading
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0d1711]">
        <p className="text-[#92cba0]">
          Loading book details...
        </p>
      </main>
    );
  }

  // Error
  if (error && !book) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#0d1711] text-center text-[#f4f1eb]">
        <h1 className="text-3xl font-bold">
          Book Not Found
        </h1>

        <p className="mt-3 text-[#aaa9a2]">
          {error}
        </p>

        <Link
          href="/all-books"
          className="mt-5 rounded-lg bg-[#92cba0] px-5 py-3 text-[#10251a]"
        >
          Back to All Books
        </Link>
      </main>
    );
  }

  if (!book) return null;

  const available = Number(book.copies) > 0;

  return (
    <main className="min-h-screen bg-[#0d1711] px-4 py-10 text-[#f4f1eb] sm:px-6 lg:px-10">

      <div className="mx-auto max-w-[1410px]">

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">

          {/* Book Image */}
          <div className="mx-auto aspect-[3/4] w-full max-w-[550px] overflow-hidden rounded-md border border-[#303a33] bg-[#17231c] md:mx-0">

            {book.image ? (
              <img
                src={book.image}
                alt={book.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-[#aaa9a2]">
                No Image Available
              </div>
            )}

          </div>

          {/* Book Details */}
          <div className="pt-1">

            <span className="inline-block rounded-full bg-[#26342b] px-3 py-1 text-xs text-[#c5d6c8]">
              {book.category}
            </span>

            <h1 className="mt-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              {book.title}
            </h1>

            <p className="mt-4 text-base text-[#aaa9a2] sm:text-lg">
              by {book.author}
            </p>

            <p className="mt-5 text-sm leading-7 text-[#d0d0c9] sm:text-base">
              {book.description || "No description available."}
            </p>

            {/* Added By and Copies */}
            <div className="mt-6 grid grid-cols-1 gap-5 rounded-lg border border-[#303a33] bg-[#17231c] p-5 sm:grid-cols-2">

              <div>
                <p className="text-sm text-[#aaa9a2]">
                  Added by
                </p>

                <p className="mt-1 text-sm font-medium">
                  {book.username || "Unknown"}
                </p>

                <p className="mt-1 break-all text-sm text-[#aaa9a2]">
                  {book.email || "No email available"}
                </p>
              </div>

              <div>
                <p className="text-sm text-[#aaa9a2]">
                  Copies left
                </p>

                <p className="mt-1 text-sm font-medium">
                  {book.copies}
                </p>
              </div>

            </div>

            {/* Success Message */}
            {message && (
              <div className="mt-5 rounded-lg border border-[#92cba0]/30 bg-[#17231c] p-4 text-sm text-[#92cba0]">
                {message}
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mt-5 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
                {error}
              </div>
            )}

            {/* Borrow Button */}
            <div className="mt-5 flex flex-wrap items-center gap-3">

              {available ? (
                <button
                  onClick={() => {
                    setError("");
                    setShowModal(true);
                  }}
                  className="rounded-lg bg-[#92cba0] px-4 py-2 text-sm font-medium text-[#10251a] transition hover:bg-[#a8d9b5]"
                >
                  Borrow This Book
                </button>
              ) : (
                <button
                  disabled
                  className="cursor-not-allowed rounded-lg bg-[#395d44] px-4 py-2 text-sm font-medium text-[#d0d0c9]"
                >
                  Not Available
                </button>
              )}

              <Link
                href="/all-books"
                className="text-sm font-medium text-[#92cba0] hover:text-[#b5e3bd]"
              >
                Back to all books
              </Link>

            </div>

          </div>
        </div>
      </div>

      {/* Borrow Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget && !borrowing) {
              setShowModal(false);
              setError("");
            }
          }}
        >

          <div className="w-full max-w-[510px] overflow-hidden rounded-2xl border border-[#303a33] bg-[#17231c] shadow-2xl">

            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 pt-5">

              <h2 className="font-serif text-xl font-semibold">
                Borrow &quot;{book.title}&quot;
              </h2>

              <button
                type="button"
                disabled={borrowing}
                onClick={() => {
                  setShowModal(false);
                  setError("");
                }}
                className="text-2xl text-[#aaa9a2] transition hover:text-white disabled:opacity-50"
                aria-label="Close modal"
              >
                ×
              </button>

            </div>

            <p className="px-5 pt-2 text-sm text-[#aaa9a2]">
              You can keep this book for 7 days.
            </p>

            {/* Borrow Form */}
            <form onSubmit={handleBorrow}>

              <div className="space-y-4 px-5 py-5">

                {/* User Name */}
                <div>
                  <label
                    htmlFor="username"
                    className="mb-2 block text-sm font-medium"
                  >
                    User Name
                  </label>

                  <input
                    id="username"
                    type="text"
                    required
                    minLength={2}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-[#455249] bg-[#202b24] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#8c978f] focus:border-[#92cba0] focus:ring-2 focus:ring-[#92cba0]/40"
                  />
                </div>

                {/* User Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    User Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-[#455249] bg-[#202b24] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#8c978f] focus:border-[#92cba0] focus:ring-2 focus:ring-[#92cba0]/40"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-400">
                    {error}
                  </p>
                )}

              </div>

              {/* Modal Footer */}
              <div className="flex justify-end border-t border-[#303a33] p-4">

                <button
                  type="submit"
                  disabled={borrowing || !available}
                  className="rounded-xl bg-[#92cba0] px-5 py-3 text-sm font-semibold text-[#10251a] transition hover:bg-[#a8d9b5] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {borrowing
                    ? "Processing..."
                    : "Confirm Borrow"}
                </button>

              </div>

            </form>

          </div>
        </div>
      )}

    </main>
  );
}
