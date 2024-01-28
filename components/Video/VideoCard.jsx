import Image from "next/image";
import Link from "next/link";
import Avatar from "../Avatar";

export default function VideoCard() {
  return (
    <div className="flex flex-col gap-2 text-white">
      <Image
        src={"https://picsum.photos/500/500"}
        height={250}
        width={500}
        className="h-[180px] w-[90%] rounded-lg"
      />
      <span>A beautiful plant</span>
      <div className="flex flex-row items-center gap-4">
        <Link
          href={"#"}
          className={
            "flex flex-row items-center gap-2 text-textSecondary hover:text-red-500"
          }
        >
          <Avatar h={18} w={18} style={"rounded-full"} />
          <span className="whitespace-nowrap  text-xs">Discovery Plant</span>
          <span className="text-xs">2.6M</span>
        </Link>
      </div>
    </div>
  );
}
