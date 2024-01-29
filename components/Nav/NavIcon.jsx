"use client";

import { useContext } from "react";
import { MenuContext } from "@/context/menu";

// Icons
import { Menu } from "lucide-react";

export default function NavIcon() {
  const { isOpen, toggleMenu } = useContext(MenuContext);

  return (
    <Menu
      onClick={() => toggleMenu()}
      size={18}
      className="block text-white lg:hidden"
    />
  );
}
