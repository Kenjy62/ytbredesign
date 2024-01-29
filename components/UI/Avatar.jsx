import Image from "next/image";

export default function Avatar({ id, h, w, style }) {
  return (
    <Image
      src={`https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${id}`}
      height={h}
      width={w}
      className={`${style} min-h-[18px] min-w-[18px]`}
      alt={"Image"}
    />
  );
}
