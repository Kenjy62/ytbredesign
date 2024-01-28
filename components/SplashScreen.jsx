"use client";

import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ display: "fixed" }}
      animate={{ display: "none" }}
      transition={{ delay: 1.5 }}
      className="fixed z-50 h-[100dvh] w-full bg-transparent flex flex-row"
    >
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.35 }}
        className="w-[10%] h-full bg-red-500"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.25 }}
        className="w-[10%] h-full bg-red-500"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.1 }}
        className="w-[10%] h-full bg-red-500"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.45 }}
        className="w-[10%] h-full bg-red-500"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.18 }}
        className="w-[10%] h-full bg-red-500"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.27 }}
        className="w-[10%] h-full bg-red-500"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.25 }}
        className="w-[10%] h-full bg-red-500"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.25 }}
        className="w-[10%] h-full bg-red-500"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.25 }}
        className="w-[10%] h-full bg-red-500"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.25 }}
        className="w-[10%] h-full bg-red-500"
      ></motion.div>
    </motion.div>
  );
}
