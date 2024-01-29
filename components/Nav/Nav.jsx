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

import PerfectScrollbar from "react-perfect-scrollbar";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div
        initial={{ width: 280 }}
        animate={{ width: isOpen ? 280 : 60 }}
        className="hidden h-[100dvh] flex-col gap-8 overflow-hidden border-r border-bgSecondary text-white lg:flex"
      >
        <Header state={handleMenu} />
        <PerfectScrollbar className="flex w-full flex-col gap-10 p-6">
          <Main />
          <Divider />
          <Secondary />
          <Divider />
          <Subscription state={isOpen} />
          <Divider />
          <Misc state={isOpen} />
        </PerfectScrollbar>
      </motion.div>
    </>
  );
}
