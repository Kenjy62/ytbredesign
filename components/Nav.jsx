"use client";

// Required
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

// Components
import Divider from "./Divider";
import Main from "./Nav/Main";
import Secondary from "./Nav/Secondary";
import Subscription from "./Nav/Subscription";
import Misc from "./Nav/Misc";

// Icons
import { Menu } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      initial={{ width: 280 }}
      animate={{ width: isOpen ? 280 : 75 }}
      className="flex h-[100dvh] flex-col gap-12 overflow-hidden overflow-y-auto border-r border-bgSecondary p-8 text-white"
    >
      <div className="flex flex-row items-center gap-8">
        <Menu
          className="absolute cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          size={18}
        />
        <Image
          src={"/logo.png"}
          height={570}
          width={2560}
          className="ml-12 h-auto w-[70px]"
        />
      </div>
      <Main />
      <Divider />
      <Secondary />
      <Divider />
      <Subscription state={isOpen} />
      <Divider />
      <Misc state={isOpen} />
    </motion.div>
  );
}
