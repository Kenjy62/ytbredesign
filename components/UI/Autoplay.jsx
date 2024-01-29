"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Autoplay() {
  const [autoPlay, setAutoPlay] = useState(false);

  return (
    <div className="flex flex-row justify-between text-white bg-bgSecondary w-[90%] px-4 py-3 rounded-lg items-center">
      <span>Autoplay</span>
      <div
        onClick={() => setAutoPlay(!autoPlay)}
        className="cursor-pointer w-[50px] h-6 rounded-full bg-[#2C2D38] flex"
      >
        <motion.div
          initial={{ left: 0 }}
          animate={{
            left: autoPlay ? 30 : 0,
            backgroundColor: autoPlay ? "red" : "transparent",
          }}
          className="h-6 w-6 rounded-full border-2 border-red-500 relative"
        ></motion.div>
      </div>
    </div>
  );
}
