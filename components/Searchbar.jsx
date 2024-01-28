// Icons
import { Mic } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="flex flex-row items-center gap-4">
      <Mic size={18} className="text-bgSecondary" />
      <input
        className="bg-transparent text-sm text-bgSecondary placeholder:text-bgSecondary"
        placeholder="Type to search"
      />
    </div>
  );
}
