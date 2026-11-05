import Image from "next/image";

interface BookCardProps {
  title: string;
  author: string;
  category: string;
  image: string;
}

export default function BookCard({
  title,
  author,
  category,
  image,
}: BookCardProps) {
  return (
    <div className="overflow-hidden rounded-md border border-[#2a3931] bg-[#14211a]">
      <div className="relative aspect-3/4 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
      </div>

      <div className="p-3">
        <span className="rounded-full bg-[#213329] px-2 py-1 text-[10px] text-[#d5d8d2]">
          {category}
        </span>

        <h3 className="mt-3 truncate font-semibold text-[#f4f1eb]">{title}</h3>

        <p className="mt-1 truncate text-xs text-[#aaa9a2]">by {author}</p>

        <button className="mt-3 w-full rounded-md bg-[#92d19f] px-3 py-2 text-xs font-medium text-[#10251a] transition hover:bg-[#a8d9b5]">
          View Details
        </button>
      </div>
    </div>
  );
}
