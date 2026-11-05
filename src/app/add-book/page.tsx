// "use client";

// import Image from "next/image";
// import { ChangeEvent, FormEvent, useState } from "react";

// const AddBookPage = () => {
//   const [imagePreview, setImagePreview] = useState<string | null>(null);

//   const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];

//     if (file) {
//       setImagePreview(URL.createObjectURL(file));
//     } else {
//       setImagePreview(null);
//     }
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const res = await fetch("http://localhost:5000/add-book",{

//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//     },
//       body: JSON.stringify(form),
//   })

//   const data = await res.json();
//   console.log(data);
  
// };
  
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

//     alert("Book data submitted successfully!");
//   };

//   return (
//     <main className="min-h-screen bg-[#0d1711] text-[#f4f1eb]">
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

//       <section className="px-4 pb-16 pt-11">
//         <div className="mx-auto w-full max-w-184">
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 gap-x-5 gap-y-4.25 md:grid-cols-2">
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

//             <div className="mt-6">
//               <label
//                 htmlFor="image"
//                 className="mb-1.5 block text-[14px] font-medium"
//               >
//                 Book Image
//               </label>

//               <input
//                 id="image"
//                 name="image"
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="h-8.25 w-full cursor-pointer rounded-[9px] border border-[#414b45] bg-[#1c2520] px-2.5 py-1.25 text-[14px] text-[#f4f1eb] file:mr-1 file:cursor-pointer file:border-0 file:bg-transparent file:text-[14px] file:text-[#f4f1eb]"
//               />

//               {imagePreview && (
//                 <Image
//                   src={imagePreview}
//                   width={200}
//                   height={250}
//                   unoptimized
//                   alt="Book preview"
//                   className="mt-3 h-45 w-32.5 rounded-lg border border-[#414b45] object-cover"
//                 />
//               )}
//             </div>

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

//             <div className="mt-4.25 grid grid-cols-1 gap-x-5 gap-y-4.25 md:grid-cols-2">
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

//             <button
//               type="submit"
//               className="mt-5.25 h-8.75 w-full rounded-lg bg-[#92cba0] text-[14px] font-medium text-[#10251a] transition hover:bg-[#a8d9b5]"
//             >
//               Add Book
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
import { ChangeEvent, FormEvent, useState } from "react";

const AddBookPage = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Get form data
    const form = event.currentTarget;
    const formData = new FormData(form);

    const imageFile = formData.get("image") as File | null;

    const bookData = {
      title: formData.get("title"),
      author: formData.get("author"),
      category: formData.get("category"),
      copies: Number(formData.get("copies")),
      image: imageFile?.name || "",
      description: formData.get("description"),
      username: formData.get("username"),
      email: formData.get("email"),
    };

    console.log("Book Data:", bookData);

    try {
      const res = await fetch("http://localhost:5000/add-book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });

      const data = await res.json();

        console.log(data);
      alert("Book data submitted successfully!");

    } catch (error) {
      console.error("Error adding book:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong!"
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#0d1711] text-[#f4f1eb]">
      <section className="h-41.5 border-b border-[#344039] bg-[#19241e]">
        <div className="flex h-full flex-col items-center justify-center px-4">
          <h1 className="font-serif text-[36px] font-bold leading-tight">
            Add a Book
          </h1>

          <p className="mt-2 text-center text-[16px] text-[#aaa9a2]">
            Put a book from your shelf into the library.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 pt-11">
        <div className="mx-auto w-full max-w-184">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-5 gap-y-4.25 md:grid-cols-2">
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
                  className="h-8.25 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-2.5 text-[14px] text-white outline-none transition focus:border-[#92d19f]"
                />
              </div>

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
                  className="h-8.25 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-2.5 text-[14px] text-white outline-none transition focus:border-[#92d19f]"
                />
              </div>

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
                  className="h-8.25 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-2.5 text-[14px] text-[#f4f1eb] outline-none focus:border-[#92d19f]"
                >
                  <option value="Fiction">Fiction</option>
                  <option value="History">History</option>
                  <option value="Science">Science</option>
                  <option value="Kids">Kids</option>
                  <option value="Others">Others</option>
                </select>
              </div>

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
                  defaultValue="1"
                  required
                  className="h-8.25 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-2.5 text-[14px] text-white outline-none focus:border-[#92d19f]"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="image"
                className="mb-1.5 block text-[14px] font-medium"
              >
                Book Image
              </label>

              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="h-8.25 w-full cursor-pointer rounded-[9px] border border-[#414b45] bg-[#1c2520] px-2.5 py-1.25 text-[14px] text-[#f4f1eb] file:mr-1 file:cursor-pointer file:border-0 file:bg-transparent file:text-[14px] file:text-[#f4f1eb]"
              />

              {imagePreview && (
                <Image
                  src={imagePreview}
                  width={200}
                  height={250}
                  unoptimized
                  alt="Book preview"
                  className="mt-3 h-45 w-32.5 rounded-lg border border-[#414b45] object-cover"
                />
              )}
            </div>

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
                className="h-16 w-full resize-y rounded-[9px] border border-[#414b45] bg-[#1c2520] px-2.5 py-2 text-[14px] text-white outline-none focus:border-[#92d19f]"
              />
            </div>

            <div className="mt-4.25 grid grid-cols-1 gap-x-5 gap-y-4.25 md:grid-cols-2">
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
                  defaultValue="Moshiour Rahman"
                  className="h-8.25 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-2.5 text-[14px] text-[#f4f1eb] outline-none focus:border-[#92d19f]"
                />
              </div>

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
                  defaultValue="rmoshiour32@gmail.com"
                  className="h-8.25 w-full rounded-[9px] border border-[#414b45] bg-[#1c2520] px-2.5 text-[14px] text-[#f4f1eb] outline-none focus:border-[#92d19f]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-5.25 h-8.75 w-full rounded-lg bg-[#92cba0] text-[14px] font-medium text-[#10251a] transition hover:bg-[#a8d9b5]"
            >
              Add Book
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AddBookPage;
