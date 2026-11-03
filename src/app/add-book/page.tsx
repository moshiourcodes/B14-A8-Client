
"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

const AddBookPage = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // API will be added later
    alert("Book added successfully!");
  };

  return (
    <main className="min-h-screen bg-[#08120d] text-[#f4f1eb]">
      {/* Header */}
      <section className="border-b border-[#2d3b33] bg-[#14211a]">
        <div className="flex h-51.25 flex-col items-center justify-center px-4">
          <h1 className="font-serif text-[48px] font-bold leading-none md:text-[52px]">
            Add a Book
          </h1>

          <p className="mt-5 text-[20px] text-[#aaa9a2]">
            Put a book from your shelf into the library.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-4 py-16">
        <div className="mx-auto w-full max-w-245">
          <form onSubmit={handleSubmit}>
            {/* Book Title + Author */}
            <div className="grid grid-cols-1 gap-x-7 gap-y-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-[17px] font-medium"
                >
                  Book Title
                </label>

                <input
                  id="title"
                  type="text"
                  required
                  className="h-11 w-full rounded-xl border border-[#3a4940] bg-[#14211a] px-4 text-[17px] text-white outline-none focus:border-[#92d19f]"
                />
              </div>

              <div>
                <label
                  htmlFor="author"
                  className="mb-2 block text-[17px] font-medium"
                >
                  Author Name
                </label>

                <input
                  id="author"
                  type="text"
                  required
                  className="h-11 w-full rounded-xl border border-[#3a4940] bg-[#14211a] px-4 text-[17px] text-white outline-none focus:border-[#92d19f]"
                />
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-[17px] font-medium"
                >
                  Category
                </label>

                <select
                  id="category"
                  defaultValue="Fiction"
                  className="h-11 w-full rounded-xl border border-[#3a4940] bg-[#14211a] px-4 text-[17px] text-[#f4f1eb] outline-none focus:border-[#92d19f]"
                >
                  <option>Fiction</option>
                  <option>History</option>
                  <option>Science</option>
                  <option>Kids</option>
                  <option>Others</option>
                </select>
              </div>

              {/* Total Copies */}
              <div>
                <label
                  htmlFor="copies"
                  className="mb-2 block text-[17px] font-medium"
                >
                  Total Copies
                </label>

                <input
                  id="copies"
                  type="number"
                  min="1"
                  defaultValue="1"
                  required
                  className="h-11 w-full rounded-xl border border-[#3a4940] bg-[#14211a] px-4 text-[17px] text-white outline-none focus:border-[#92d19f]"
                />
              </div>
            </div>

            {/* Book Image */}
            <div className="mt-8">
              <label
                htmlFor="image"
                className="mb-2 block text-[17px] font-medium"
              >
                Book Image
              </label>

              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="h-11 w-full rounded-xl border border-[#3a4940] bg-[#14211a] px-3 py-2 text-[17px] text-[#f4f1eb]"
              />

              {imagePreview && (
                <Image
                  src={imagePreview}
                  alt="Book preview"
                  className="mt-4 h-62.5 w-45 rounded-lg border border-[#3a4940] object-cover"
                />
              )}
            </div>

            {/* Description */}
            <div className="mt-8">
              <label
                htmlFor="description"
                className="mb-2 block text-[17px] font-medium"
              >
                Short Description
              </label>

              <textarea
                id="description"
                className="h-21.25 w-full resize-none rounded-xl border border-[#3a4940] bg-[#14211a] px-4 py-3 text-[17px] text-white outline-none focus:border-[#92d19f]"
              />
            </div>

            {/* User Name + Email */}
            <div className="mt-7 grid grid-cols-1 gap-x-7 gap-y-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-[17px] font-medium"
                >
                  User Name
                </label>

                <input
                  id="username"
                  type="text"
                  defaultValue="Moshiour Rahman"
                  className="h-11 w-full rounded-xl border border-[#3a4940] bg-[#14211a] px-4 text-[17px] text-[#f4f1eb] outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[17px] font-medium"
                >
                  User Email
                </label>

                <input
                  id="email"
                  type="email"
                  defaultValue="rmoshiour32@gmail.com"
                  className="h-11 w-full rounded-xl border border-[#3a4940] bg-[#14211a] px-4 text-[17px] text-[#f4f1eb] outline-none"
                />
              </div>
            </div>

            {/* Add Button */}
            <button
              type="submit"
              className="mt-7 h-11 w-full rounded-xl bg-[#92d19f] text-[18px] font-medium text-[#10251a] transition hover:bg-[#a8d9b5]"
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
