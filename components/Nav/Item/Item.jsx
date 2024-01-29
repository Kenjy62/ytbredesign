// Required
import Link from "next/link";

export default function Item({ name, icon }) {
  return (
    <Link
      href={"#"}
      className={
        "flex flex-row items-center gap-8 text-white hover:text-red-500"
      }
    >
      <div className="absolute">{icon}</div>
      <span className="ml-12 whitespace-nowrap text-sm">{name}</span>
    </Link>
  );
}
