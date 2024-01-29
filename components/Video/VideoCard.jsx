import Image from "next/image";
import Link from "next/link";
import Avatar from "../UI/Avatar";

export default function VideoCard({ item, id }) {
  return (
    <div className="flex flex-col gap-2 text-white">
      <Link href="#" className="group flex flex-col gap-2">
        <Image
          src={`https://picsum.photos/500/500?${id}`}
          height={250}
          width={500}
          className="h-[180px] w-[90%] rounded-lg"
        />
        <span className="group-hover:text-red-500">{item.name}</span>
      </Link>
      <div className="flex flex-row items-center gap-4">
        <Link
          href={"#"}
          className={
            "flex flex-row items-center gap-2 text-textSecondary hover:text-red-500"
          }
        >
          <Avatar id={id} h={18} w={18} style={"rounded-full"} />
          <span className="whitespace-nowrap text-xs">{item.author}</span>
          <span className="text-xs">{item.views}</span>
        </Link>
      </div>
    </div>
  );
}
