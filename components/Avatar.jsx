import Image from "next/image";

export default function Avatar({ h, w, style }) {
  return (
    <Image
      src={"https://api.dicebear.com/7.x/bottts-neutral/svg"}
      height={h}
      width={w}
      className={style}
    />
  );
}
