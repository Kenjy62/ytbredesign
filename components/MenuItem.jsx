import { Compass } from "lucide-react";
import Link from "next/link";

export default function MenuItem({ name, icon }) {
  return (
    <Link
      href={"#"}
      className={
        "flex flex-row gap-8 items-center text-white hover:text-red-500"
      }
    >
      <div className="absolute">{icon}</div>
      <span className="text-sm ml-12 whitespace-nowrap">{name}</span>
    </Link>
  );
}
