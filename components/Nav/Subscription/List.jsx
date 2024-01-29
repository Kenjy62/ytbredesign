"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
// Components
import Item from "./Item";

// Required
import { motion } from "framer-motion";
import { useState } from "react";

export default function List({ state }) {
  const subs = [
    { name: "TiboInShape", inLive: true, newVideo: true },
    { name: "Charlotte White", inLive: false, newVideo: true },
    { name: "Marion Cot", inLive: false, newVideo: false },
    { name: "Simon Ray", inLive: false, newVideo: true },
    { name: "John Doe", inLive: false, newVideo: false },
    { name: "Ronny The King", inLive: true, newVideo: false },
  ];

  const [max, setMax] = useState(3);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    setMax(max === 3 ? subs.length : 3);
  };

  return (
    <div className="flex flex-col gap-6">
      {subs.slice(0, max).map((item, id) => (
        <Item key={id} user={item} id={id} />
      ))}
      <motion.div
        onClick={() => toggle()}
        className="flex cursor-pointer flex-row items-center justify-center gap-2 text-xs text-textSecondary"
      >
        <span className={`${state ? "block" : "hidden"}`}>
          {isOpen ? "SHOW MINUS" : "SHOW MORE"}
        </span>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          <ChevronUp size={14} />
        </motion.div>
      </motion.div>
    </div>
  );
}
