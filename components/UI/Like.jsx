"use client";

// Icons
import { Heart } from "lucide-react";

// Required
import { useState } from "react";

export default function Like({ count }) {
  const [isLike, setIsLike] = useState(false);

  return (
    <div
      onClick={() => setIsLike(!isLike)}
      className={`flex w-fit cursor-pointer flex-row items-center gap-2 hover:text-red-500 ${
        isLike ? "text-red-500" : "text-textSecondary"
      } `}
    >
      <Heart size={18} />
      <span className="text-sm">{count}</span>
    </div>
  );
}
