// Icons
import { Mic } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="flex w-fit flex-row items-center gap-4">
      <Mic
        size={18}
        className="cursor-pointer text-bgSecondary hover:text-red-500"
      />
      <input
        className="h-full w-fit bg-transparent text-sm text-white outline-none placeholder:text-bgSecondary"
        placeholder="Type to search"
      />
    </div>
  );
}
