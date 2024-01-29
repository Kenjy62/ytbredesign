"use client";

// Required
import { motion } from "framer-motion";
import { useState } from "react";

// Components
import Divider from "../UI/Divider";
import Main from "./Main";
import Secondary from "./Secondary";
import Subscription from "./Subscription";
import Misc from "./Misc";
import Header from "../UI/Header";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div
        initial={{ width: 280 }}
        animate={{ width: isOpen ? 280 : 70 }}
        className="hidden h-[100dvh] flex-col gap-12 overflow-hidden overflow-y-auto border-r border-bgSecondary p-6 text-white lg:flex"
      >
        <Header state={handleMenu} />
        <Main />
        <Divider />
        <Secondary />
        <Divider />
        <Subscription state={isOpen} />
        <Divider />
        <Misc state={isOpen} />
      </motion.div>
    </>
  );
}
