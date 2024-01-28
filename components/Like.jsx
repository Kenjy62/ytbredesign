"use client";

// Icons
import { Heart } from "lucide-react";

// Required
import { useState } from "react";

export default function Like() {
  const [isLike, setIsLike] = useState(false);

  return (
    <div
      onClick={() => setIsLike(!isLike)}
      className={`flex w-fit cursor-pointer flex-row items-center gap-2 text-textSecondary hover:text-red-500 ${
        isLike ? "text-red-500" : null
      } `}
    >
      <Heart size={18} />
      <span className="text-sm">6.8k</span>
    </div>
  );
}
