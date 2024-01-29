"use client";

// Required
import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ display: "fixed" }}
      animate={{ display: "none" }}
      transition={{ delay: 1.5 }}
      className="fixed z-50 flex h-[100dvh] w-full flex-row bg-transparent"
    >
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.35 }}
        className="h-full w-[10%] bg-red-500"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.25 }}
        className="h-full w-[10%] bg-red-500"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.1 }}
        className="h-full w-[10%] bg-red-500"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.45 }}
        className="h-full w-[10%] bg-red-500"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.18 }}
        className="h-full w-[10%] bg-red-500"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.27 }}
        className="h-full w-[10%] bg-red-500"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.25 }}
        className="h-full w-[10%] bg-red-500"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.25 }}
        className="h-full w-[10%] bg-red-500"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.25 }}
        className="h-full w-[10%] bg-red-500"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1, delay: 0.25 }}
        className="h-full w-[10%] bg-red-500"
      ></motion.div>
    </motion.div>
  );
}
