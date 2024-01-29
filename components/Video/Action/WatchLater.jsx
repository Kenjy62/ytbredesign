// Icons
import { Loader } from "lucide-react";

export default function WatchLater() {
  return (
    <div className="flex cursor-pointer flex-row items-center gap-4 text-textSecondary hover:text-red-500">
      <Loader size={18} />
      <span className="hidden md:block">Watch Later</span>
    </div>
  );
}
