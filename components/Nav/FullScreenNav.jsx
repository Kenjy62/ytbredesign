"use client";

// Components
import Main from "./Main";
import Divider from "../UI/Divider";
import Secondary from "./Secondary";
import Subscription from "./Subscription";
import Misc from "./Misc";

// Required and Context
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { MenuContext } from "@/context/menu";
import PerfectScrollbar from "react-perfect-scrollbar";

// Style
import "react-perfect-scrollbar/dist/css/styles.css";

// Icons
import { MenuIcon } from "lucide-react";

export default function FullScreenNav() {
  const { isOpen, toggleMenu } = useContext(MenuContext);

  return (
    <motion.div
      initial={{ display: "none" }}
      animate={{ display: isOpen ? "block" : "none" }}
      className="fixed z-40 hidden h-[100dvh] w-full bg-black bg-opacity-50"
    >
      <motion.div
        className="h-full"
        initial={{ width: "0%" }}
        animate={{ width: isOpen ? "80%" : "0%" }}
        transition={{ duration: 0.3 }}
      >
        <PerfectScrollbar className="relative flex h-full w-[80%] flex-col gap-12 bg-bgPrimary p-8">
          <MenuIcon
            onClick={() => toggleMenu()}
            size={18}
            className="absolute left-8 top-8 text-white"
          />
          <div className="flex justify-center">
            <Image src={"/logo.png"} height={80} width={130} />
          </div>
          <Main />
          <Divider />
          <Secondary />
          <Divider />
          <Subscription state={true} />
          <Divider />
          <Misc state={true} />
        </PerfectScrollbar>
      </motion.div>
    </motion.div>
  );
}
