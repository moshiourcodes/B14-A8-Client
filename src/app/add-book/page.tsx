// "use client";

// import Image from "next/image";
// import { FormEvent, useState } from "react";

// const AddBookPage = () => {
//   const [imageUrl, setImageUrl] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const form = event.currentTarget;
//     const formData = new FormData(form);

//     const bookData = {
//       title: formData.get("title"),
//       author: formData.get("author"),
//       category: formData.get("category"),
//       copies: Number(formData.get("copies")),
//       image: formData.get("image"),
//       description: formData.get("description"),
//       username: formData.get("username"),
//       email: formData.get("email"),
//     };

//     console.log("Book Data:", bookData);

//     try {
//       setIsSubmitting(true);

//       const res = await fetch("http://localhost:5000/add-book", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(bookData),
//       });

//       if (!res.ok) {
//         throw new Error("Failed to add book");
//       }

//       const data = await res.json();

//       console.log("Book added:", data);

//       alert("Book added successfully!");

//       form.reset();
//       setImageUrl("");
//     } catch (error) {
//       console.error("Error adding book:", error);

//       alert(error instanceof Error ? error.message : "Something went wrong!");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#0d1711] text-[#f4f1eb]">
//       {/* Page Header */}
//       <section className="h-41.5 border-b border-[#344039] bg-[#19241e]">
//         <div className="flex h-full flex-col items-center justify-center px-4">
//           <h1 className="font-serif text-[36px] font-bold leading-tight">
//             Add a Book
//           </h1>

//           <p className="mt-2 text-center text-[16px] text-[#aaa9a2]">
//             Put a book from your shelf into the library.
//           </p>
//         </div>
//       </section>

//       {/* Add Book Form */}
//       <section className="px-4 pb-16 pt-11">
//         <div className="mx-auto w-full max-w-184">
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 gap-x-5 gap-y-4.25 md:grid-cols-2">
//               {/* Book Title */}
//               <div>
//                 <label
//                   htmlFor="title"
//                   className="mb-1.5 block text-[14px] font-medium"
//                 >
//                   Book Title
//                 </label>

//                 <input
//                   id="title"
//                   name="title"
//                   type="text"
//                   placeholder="Enter book title"
//                   required
//                   className="h-8.25 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-2.5 text-[14px] text-white outline-none transition focus:border-[#92d19f]"
//                 />
//               </div>

//               {/* Author Name */}
//               <div>
//                 <label
//                   htmlFor="author"
//                   className="mb-1.5 block text-[14px] font-medium"
//                 >
//                   Author Name
//                 </label>

//                 <input
//                   id="author"
//                   name="author"
//                   type="text"
//                   placeholder="Enter author name"
//                   required
//                   className="h-8.25 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-2.5 text-[14px] text-white outline-none transition focus:border-[#92d19f]"
//                 />
//               </div>

//               {/* Category */}
//               <div>
//                 <label
//                   htmlFor="category"
//                   className="mb-1.5 block text-[14px] font-medium"
//                 >
//                   Category
//                 </label>

//                 <select
//                   id="category"
//                   name="category"
//                   defaultValue="Fiction"
//                   className="h-8.25 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-2.5 text-[14px] text-[#f4f1eb] outline-none focus:border-[#92d19f]"
//                 >
//                   <option value="Fiction">Fiction</option>
//                   <option value="History">History</option>
//                   <option value="Science">Science</option>
//                   <option value="Kids">Kids</option>
//                   <option value="Others">Others</option>
//                 </select>
//               </div>

//               {/* Total Copies */}
//               <div>
//                 <label
//                   htmlFor="copies"
//                   className="mb-1.5 block text-[14px] font-medium"
//                 >
//                   Total Copies
//                 </label>

//                 <input
//                   id="copies"
//                   name="copies"
//                   type="number"
//                   min="1"
//                   defaultValue="1"
//                   required
//                   className="h-8.25 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-2.5 text-[14px] text-white outline-none focus:border-[#92d19f]"
//                 />
//               </div>
//             </div>

//             {/* Book Image URL */}
//             <div className="mt-6">
//               <label
//                 htmlFor="image"
//                 className="mb-1.5 block text-[14px] font-medium"
//               >
//                 Book Image URL
//               </label>

//               <input
//                 id="image"
//                 name="image"
//                 type="url"
//                 value={imageUrl}
//                 onChange={(event) => setImageUrl(event.target.value)}
//                 placeholder="https://example.com/book-image.jpg"
//                 required
//                 className="h-8.25 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-2.5 text-[14px] text-white outline-none transition focus:border-[#92d19f]"
//               />

//               {/* Image Preview */}
//               {imageUrl.trim() && /^https?:\/\/.+/i.test(imageUrl) && (
//                 <div className="mt-3">
//                   <p className="mb-2 text-[13px] text-[#aaa9a2]">
//                     Image Preview
//                   </p>

//                   <Image
//                     src={imageUrl}
//                     width={200}
//                     height={250}
//                     unoptimized
//                     alt="Book preview"
//                     className="h-45 w-32.5 rounded-lg border border-[#414b45] object-cover"
//                   />
//                 </div>
//               )}
//             </div>

//             {/* Short Description */}
//             <div className="mt-6">
//               <label
//                 htmlFor="description"
//                 className="mb-1.5 block text-[14px] font-medium"
//               >
//                 Short Description
//               </label>

//               <textarea
//                 id="description"
//                 name="description"
//                 placeholder="Write a short description..."
//                 className="h-16 w-full resize-y rounded-[9px] border border-[#414b45] bg-[#1c2520] px-2.5 py-2 text-[14px] text-white outline-none focus:border-[#92d19f]"
//               />
//             </div>

//             {/* User Information */}
//             <div className="mt-4.25 grid grid-cols-1 gap-x-5 gap-y-4.25 md:grid-cols-2">
//               {/* User Name */}
//               <div>
//                 <label
//                   htmlFor="username"
//                   className="mb-1.5 block text-[14px] font-medium"
//                 >
//                   User Name
//                 </label>

//                 <input
//                   id="username"
//                   name="username"
//                   type="text"
//                   defaultValue="Moshiour Rahman"
//                   className="h-8.25 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-2.5 text-[14px] text-[#f4f1eb] outline-none focus:border-[#92d19f]"
//                 />
//               </div>

//               {/* User Email */}
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="mb-1.5 block text-[14px] font-medium"
//                 >
//                   User Email
//                 </label>

//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   defaultValue="rmoshiour32@gmail.com"
//                   className="h-8.25 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-2.5 text-[14px] text-[#f4f1eb] outline-none focus:border-[#92d19f]"
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="mt-5.25 h-8.75 w-full rounded-lg bg-[#92cba0] text-[14px] font-medium text-[#10251a] transition hover:bg-[#a8d9b5] disabled:cursor-not-allowed disabled:opacity-60"
//             >
//               {isSubmitting ? "Adding Book..." : "Add Book"}
//             </button>
//           </form>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default AddBookPage;























"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const AddBookPage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const bookData = {
      title: String(formData.get("title") || "").trim(),
      author: String(formData.get("author") || "").trim(),
      category: String(formData.get("category") || ""),
      copies: Number(formData.get("copies")),
      image: String(formData.get("image") || "").trim(),
      description: String(formData.get("description") || "").trim(),
      username: String(formData.get("username") || "").trim(),
      email: String(formData.get("email") || "").trim(),
    };

    try {
      setIsSubmitting(true);

      const res = await fetch("http://localhost:5000/add-book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to add book");
      }

      console.log("Book added successfully:", data.book);

      alert("Book added successfully!");

      form.reset();
      setImageUrl("");
    } catch (error) {
      console.error("Error adding book:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong!"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0d1711] text-[#f4f1eb]">
      {/* Page Header */}
      <section className="h-[166px] border-b border-[#344039] bg-[#19241e]">
        <div className="flex h-full flex-col items-center justify-center px-4">
          <h1 className="font-serif text-[36px] font-bold leading-tight">
            Add a Book
          </h1>

          <p className="mt-2 text-center text-[16px] text-[#aaa9a2]">
            Put a book from your shelf into the library.
          </p>
        </div>
      </section>

      {/* Add Book Form */}
      <section className="px-4 pb-16 pt-11">
        <div className="mx-auto w-full max-w-[736px]">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-5 gap-y-4 md:grid-cols-2">
              {/* Book Title */}
              <div>
                <label
                  htmlFor="title"
                  className="mb-1.5 block text-[14px] font-medium"
                >
                  Book Title
                </label>

                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Enter book title"
                  required
                  className="h-10 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-3 text-[14px] text-white outline-none transition focus:border-[#92d19f]"
                />
              </div>

              {/* Author Name */}
              <div>
                <label
                  htmlFor="author"
                  className="mb-1.5 block text-[14px] font-medium"
                >
                  Author Name
                </label>

                <input
                  id="author"
                  name="author"
                  type="text"
                  placeholder="Enter author name"
                  required
                  className="h-10 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-3 text-[14px] text-white outline-none transition focus:border-[#92d19f]"
                />
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="mb-1.5 block text-[14px] font-medium"
                >
                  Category
                </label>

                <select
                  id="category"
                  name="category"
                  defaultValue="Fiction"
                  className="h-10 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-3 text-[14px] text-[#f4f1eb] outline-none focus:border-[#92d19f]"
                >
                  <option value="Fiction">Fiction</option>
                  <option value="History">History</option>
                  <option value="Science">Science</option>
                  <option value="Kids">Kids</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* Total Copies */}
              <div>
                <label
                  htmlFor="copies"
                  className="mb-1.5 block text-[14px] font-medium"
                >
                  Total Copies
                </label>

                <input
                  id="copies"
                  name="copies"
                  type="number"
                  min="1"
                  step="1"
                  defaultValue="1"
                  required
                  className="h-10 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-3 text-[14px] text-white outline-none focus:border-[#92d19f]"
                />
              </div>
            </div>

            {/* Book Image URL */}
            <div className="mt-6">
              <label
                htmlFor="image"
                className="mb-1.5 block text-[14px] font-medium"
              >
                Book Image URL
              </label>

              <input
                id="image"
                name="image"
                type="url"
                value={imageUrl}
                onChange={(event) => setImageUrl(event.target.value)}
                placeholder="https://example.com/book-image.jpg"
                required
                className="h-10 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-3 text-[14px] text-white outline-none transition focus:border-[#92d19f]"
              />

              {/* Image Preview */}
              {/^https?:\/\/.+/i.test(imageUrl.trim()) && (
                <div className="mt-3">
                  <p className="mb-2 text-[13px] text-[#aaa9a2]">
                    Image Preview
                  </p>

                  <Image
                    src={imageUrl}
                    width={200}
                    height={250}
                    unoptimized
                    alt="Book preview"
                    className="h-[180px] w-[130px] rounded-lg border border-[#414b45] object-cover"
                  />
                </div>
              )}
            </div>

            {/* Short Description */}
            <div className="mt-6">
              <label
                htmlFor="description"
                className="mb-1.5 block text-[14px] font-medium"
              >
                Short Description
              </label>

              <textarea
                id="description"
                name="description"
                placeholder="Write a short description..."
                rows={4}
                className="w-full resize-y rounded-[9px] border border-[#414b45] bg-[#1c2520] px-3 py-2 text-[14px] text-white outline-none focus:border-[#92d19f]"
              />
            </div>

            {/* User Information */}
            <div className="mt-5 grid grid-cols-1 gap-x-5 gap-y-4 md:grid-cols-2">
              {/* User Name */}
              <div>
                <label
                  htmlFor="username"
                  className="mb-1.5 block text-[14px] font-medium"
                >
                  User Name
                </label>

                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your name"
                  defaultValue="Moshiour Rahman"
                  className="h-10 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-3 text-[14px] text-white outline-none focus:border-[#92d19f]"
                />
              </div>

              {/* User Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-[14px] font-medium"
                >
                  User Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  defaultValue="rmoshiour32@gmail.com"
                  className="h-10 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-3 text-[14px] text-white outline-none focus:border-[#92d19f]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 h-11 w-full rounded-lg bg-[#92cba0] text-[14px] font-semibold text-[#10251a] transition hover:bg-[#a8d9b5] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Adding Book..." : "Add Book"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AddBookPage;
