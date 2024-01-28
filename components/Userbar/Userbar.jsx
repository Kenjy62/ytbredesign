// Components
import Avatar from "../Avatar";

// Icons
import { PlusSquare, LayoutGrid, Bell } from "lucide-react";

export default function Userbar() {
  return (
    <div className="flex flex-row items-center gap-8">
      <div className="flex flex-row gap-4">
        <PlusSquare size={18} className="text-white" />
        <LayoutGrid size={18} className="text-white" />
        <Bell size={18} className="text-white" />
      </div>
      <Avatar h={30} w={30} style={"rounded-lg"} />
    </div>
  );
}
