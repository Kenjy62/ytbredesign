// Components
import Avatar from "../UI/Avatar";
import Like from "../UI/Like";

// Required
import Link from "next/link";

export default function Comment({ id, item }) {
  return (
    <div className="flex flex-row gap-4 p-4 md:p-0">
      <div className="flex items-baseline justify-start">
        <Avatar id={id} h={50} w={50} style={"rounded-xl"} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <Link
            href="#"
            className="font-semibold text-white hover:text-red-500"
          >
            {item.name}
          </Link>
          <span className="text-sm text-textSecondary">{item.when}</span>
        </div>

        <span className="text-sm text-white">{item.message}</span>
        <Like count={item.like} />
      </div>
    </div>
  );
}
