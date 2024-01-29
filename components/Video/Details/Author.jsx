// Required
import Link from "next/link";

// Components
import Avatar from "@/components/UI/Avatar";

export default function Author() {
  return (
    <Link href="#" className="group flex flex-row items-center gap-4">
      <Avatar id={30} h={50} w={50} style={"rounded-xl"} />
      <div className="flex flex-col gap-2 text-white">
        <span className="group-hover:text-red-500">Google Inc</span>
        <span className="text-sm text-textSecondary">5.55M Subscribers</span>
      </div>
    </Link>
  );
}
