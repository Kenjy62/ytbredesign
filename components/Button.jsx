import { DollarSign } from "lucide-react";

export default function Button({ children }) {
  return (
    <div className="group flex h-fit w-fit cursor-pointer flex-row items-center gap-2 rounded-lg border-2 border-red-500 px-4 py-2 text-sm text-textSecondary duration-500 hover:bg-red-500 hover:text-white">
      <DollarSign size={15} className="hidden group-hover:block" />
      {children}
    </div>
  );
}
