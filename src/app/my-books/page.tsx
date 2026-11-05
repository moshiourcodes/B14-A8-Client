import Link from "next/link";

const MyBooksPage = () => {
  return (
    <main className="min-h-screen bg-[#08120d] text-[#f4f1eb]">
      <section className="border-b border-[#2a3931] bg-[#14211a] px-4 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            My Books
          </h1>

          <p className="mt-5 text-base text-[#aaa9a2] sm:text-lg md:text-xl">
            Books you added to the library.
          </p>
        </div>
      </section>

      <section className="flex min-h-85 items-start justify-center px-4 pt-16 sm:pt-20">
        <div className="flex flex-col items-center text-center">
          <p className="text-lg text-[#aaa9a2] sm:text-xl">
            You have not added any books yet.
          </p>

          <Link
            href="/add-book"
            className="mt-7 rounded-lg bg-[#92d19f] px-5 py-3 text-base font-medium text-[#10251a] transition hover:bg-[#a8d9b5]"
          >
            Add Book
          </Link>
        </div>
      </section>
    </main>
  );
};

export default MyBooksPage;
