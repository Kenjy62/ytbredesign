// Icons
import { PlusSquare, LayoutGrid, Bell } from "lucide-react";

export default function Action() {
  return (
    <div className="hidden flex-row gap-4 md:flex ">
      <PlusSquare
        size={18}
        className="cursor-pointer text-white hover:text-red-500"
      />
      <LayoutGrid
        size={18}
        className="cursor-pointer text-white hover:text-red-500"
      />
      <Bell
        size={18}
        className="cursor-pointer text-white hover:text-red-500"
      />
    </div>
  );
}
