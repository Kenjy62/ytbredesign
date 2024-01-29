// Required
import Image from "next/image";

// Icons
import { Menu } from "lucide-react";

export default function Header({ state }) {
  const handleMenu = () => {
    state();
  };

  return (
    <div className="flex flex-row items-center gap-8 p-6">
      <Menu
        className="absolute cursor-pointer"
        onClick={handleMenu}
        size={18}
      />
      <Image
        src={"/logo.png"}
        height={570}
        width={2560}
        className="ml-12 h-auto w-[70px]"
      />
    </div>
  );
}
