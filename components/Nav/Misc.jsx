"use client";

// Required
import { motion } from "framer-motion";

// Components
import MenuItem from "./Item/Item";

// Icons
import { Settings, MessageSquareShare } from "lucide-react";

export default function Misc({ state }) {
  return (
    <div className="flex flex-col gap-4">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: state ? 1 : 0 }}
        className="text-xs text-textSecondary"
      >
        MORE FROM YOUTUBE
      </motion.div>
      <MenuItem name={"Settings"} icon={<Settings size={18} />} />
      <MenuItem
        name={"Send feedback"}
        icon={<MessageSquareShare size={18} />}
      />
    </div>
  );
}
