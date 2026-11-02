// import Image from "next/image";

// type BookCardProps = {
//   image: string;
//   title: string;
//   author: string;
//   category: string;
// };

// const BookCard = ({
//   image,
//   title,
//   author,
//   category,
// }: BookCardProps) => {
//   return (
//     <div className="overflow-hidden rounded-md border border-[#2a3931] bg-[#14211a]">
//       {/* Book Image */}
//       <div className="relative aspect-[3/4] w-full">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* Card Content */}
//       <div className="p-3">
//         <span className="rounded-full bg-[#203329] px-2 py-1 text-[10px] text-[#c5c9c3]">
//           {category}
//         </span>

//         <h3 className="mt-3 truncate text-sm font-semibold text-[#f4f1eb]">
//           {title}
//         </h3>

//         <p className="mt-1 truncate text-xs text-[#aaa9a2]">
//           by {author}
//         </p>

//         <button className="mt-3 w-full rounded-md bg-[#92d19f] py-2 text-xs font-medium text-[#10251a] transition hover:bg-[#a8d9b5]">
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookCard;















import Image from "next/image";

type BookCardProps = {
  image: string;
  title: string;
  author: string;
  category: string;
};

const BookCard = ({
  image,
  title,
  author,
  category,
}: BookCardProps) => {
  return (
    <div className="overflow-hidden rounded-md border border-[#2a3931] bg-[#14211a]">
      {/* Book Image */}
      <div className="relative aspect-3/4 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Book Information */}
      <div className="p-3">
        <span className="rounded-full bg-[#203329] px-2 py-1 text-[10px] text-[#c5c9c3]">
          {category}
        </span>

        <h3 className="mt-3 truncate text-sm font-semibold text-[#f4f1eb]">
          {title}
        </h3>

        <p className="mt-1 truncate text-xs text-[#aaa9a2]">
          by {author}
        </p>

        <button className="mt-3 w-full rounded-md bg-[#92d19f] py-2 text-xs font-medium text-[#10251a] transition hover:bg-[#a8d9b5]">
          View Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;