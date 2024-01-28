// Icons
import { Loader } from "lucide-react";

// Components
import Like from "../Like";

export default function Action() {
  return (
    <div className="flex flex-row gap-8">
      <div className="flex cursor-pointer flex-row items-center gap-4 text-textSecondary hover:text-red-500">
        <Loader size={18} />
        <span>Watch Later</span>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Like />
      </div>
    </div>
  );
}
