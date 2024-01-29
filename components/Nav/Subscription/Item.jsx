// Required
import Link from "next/link";

// Components
import Avatar from "../../UI/Avatar";

// Icons
import { Radio } from "lucide-react";

export default function Item({ user, id }) {
  return (
    <Link
      href={"#"}
      className={
        "flex flex-row items-center gap-8 text-white hover:text-red-500"
      }
    >
      <Avatar id={id} h={18} w={18} style={"rounded-full"} />
      <span className="whitespace-nowrap text-sm">{user.name}</span>
      {user.inLive && <Radio size={18} className="text-red-500" />}
      {user.newVideo && !user.inLive && (
        <div className="h-[6px] w-[6px] rounded-full bg-blue-400"></div>
      )}
    </Link>
  );
}
