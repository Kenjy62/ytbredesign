"use client";

// Required
import { motion } from "framer-motion";

// Components
import List from "./Subscription/List";

export default function Subscription({ state }) {
  return (
    <div className="flex flex-col gap-4">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: state ? 1 : 0 }}
        className="text-xs text-textSecondary"
      >
        SUBSCRIPTIONS
      </motion.div>
      <List state={state} />
    </div>
  );
}
