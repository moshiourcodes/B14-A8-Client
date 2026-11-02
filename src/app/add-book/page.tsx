"use client";

import { useState } from "react";
import {
  BookPlus,
  CheckCircle2,
  ImageIcon,
  Layers,
  User,
} from "lucide-react";

const categories = ["Fiction", "Science", "History", "Kids", "Biography", "Poetry"];
const conditions = ["Like New", "Good", "Fair", "Well Read"];

interface BookForm {
  title: string;
  author: string;
  category: string;
  condition: string;
  cover: string;
  description: string;
}

const emptyForm: BookForm = {
  title: "",
  author: "",
  category: categories[0],
  condition: conditions[1],
  cover: "",
  description: "",
};

export default function AddBookPage() {
  const [form, setForm] = useState<BookForm>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof BookForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(emptyForm);
  };

  const inputClass =
    "w-full rounded-lg border border-[#24402f] bg-[#0b1a12] px-4 py-3 text-sm text-[#f1eee5] placeholder:text-[#63736a] outline-none transition-colors focus:border-[#6aa87d] focus:ring-1 focus:ring-[#6aa87d]";

  const labelClass = "mb-2 block text-xs font-semibold tracking-wide text-[#c5d2c8]";

  return (
    <section className="w-full bg-[#07180f] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-280 px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-9 text-center sm:mb-12">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#9bd7a6]">
            <BookPlus size={24} strokeWidth={2} className="text-[#183525]" />
          </div>

          <h1 className="font-serif text-2xl font-bold text-[#f5f1e8] sm:text-3xl">
            Add a Book
          </h1>

          <p className="mt-2 text-xs text-[#a8b5aa] sm:text-sm">
            Share a book from your shelf with readers nearby.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[340px_1fr] lg:gap-8">
          {/* Side Info */}
          <aside className="flex flex-col gap-4">
            <div className="rounded-md border border-[#24402f] bg-[#112219] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#9bd7a6]">
                <Layers size={19} className="text-[#183525]" />
              </div>
              <h2 className="font-serif text-base font-bold text-[#f5f1e8]">
                Why share a book?
              </h2>
              <p className="mt-2 text-xs leading-5 text-[#9eaaa1]">
                Every book you add becomes available to borrow for seven days.
                When you lend, you make room on your shelf for something new.
              </p>
            </div>

            <div className="rounded-md border border-[#24402f] bg-[#112219] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#9bd7a6]">
                <ImageIcon size={19} className="text-[#183525]" />
              </div>
              <h2 className="font-serif text-base font-bold text-[#f5f1e8]">
                A good cover helps
              </h2>
              <p className="mt-2 text-xs leading-5 text-[#9eaaa1]">
                Add a cover image URL so readers can spot your book at a glance.
                No image? Leave it blank and we will use a placeholder.
              </p>
            </div>
          </aside>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-md border border-[#24402f] bg-[#112219] p-5 shadow-sm sm:p-7"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="title" className={labelClass}>
                  Book Title
                </label>
                <input
                  id="title"
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => update("title", e.target.value)}
                  placeholder="The Name of the Wind"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="author" className={labelClass}>
                  Author
                </label>
                <div className="relative">
                  <User
                    size={16}
                    className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[#63736a]"
                  />
                  <input
                    id="author"
                    type="text"
                    required
                    value={form.author}
                    onChange={(e) => update("author", e.target.value)}
                    placeholder="Patrick Rothfuss"
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className={labelClass}>
                  Category
                </label>
                <select
                  id="category"
                  value={form.category}
                  onChange={(e) => update("category", e.target.value)}
                  className={inputClass}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="condition" className={labelClass}>
                  Condition
                </label>
                <select
                  id="condition"
                  value={form.condition}
                  onChange={(e) => update("condition", e.target.value)}
                  className={inputClass}
                >
                  {conditions.map((condition) => (
                    <option key={condition} value={condition}>
                      {condition}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="cover" className={labelClass}>
                  Cover Image URL <span className="font-normal text-[#63736a]">(optional)</span>
                </label>
                <div className="relative">
                  <ImageIcon
                    size={16}
                    className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[#63736a]"
                  />
                  <input
                    id="cover"
                    type="url"
                    value={form.cover}
                    onChange={(e) => update("cover", e.target.value)}
                    placeholder="https://example.com/cover.jpg"
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="description" className={labelClass}>
                  Short Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                  placeholder="What is this book about, and why should someone borrow it?"
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] text-[#7e8e84]">
                Books stay listed until you remove them.
              </p>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#a6d9ae] px-6 py-3 text-sm font-semibold text-[#183d29] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c1e8c7] sm:w-auto"
              >
                <BookPlus size={17} strokeWidth={2.2} />
                Add Book
              </button>
            </div>

            {submitted && (
              <div className="mt-5 flex items-center gap-2 rounded-lg border border-[#3c6248] bg-[#152b1e] px-4 py-3 text-xs text-[#b8e3c3]">
                <CheckCircle2 size={16} className="shrink-0" />
                Book added to your shelf. It is now available to borrow.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
