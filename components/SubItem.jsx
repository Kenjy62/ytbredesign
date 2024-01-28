import Image from "next/image";
import Link from "next/link";
import Avatar from "./Avatar";
import { Radio } from "lucide-react";

export default function SubItem({ name, icon }) {
  return (
    <Link
      href={"#"}
      className={
        "flex flex-row gap-8 items-center text-white hover:text-red-500"
      }
    >
      <Avatar h={18} w={18} style={"rounded-full"} />
      <span className="text-sm whitespace-nowrap">Youtube</span>
      <Radio size={18} className="text-red-500" />
    </Link>
  );
}
