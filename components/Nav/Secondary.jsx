// Components
import MenuItem from "./Item/Item";

// Icons
import { PlaySquare, History, Loader, Heart } from "lucide-react";

export default function Secondary() {
  const secondaryLink = [
    { name: "Library", icon: <PlaySquare size={18} /> },
    { name: "History", icon: <History size={18} /> },
    { name: "Watch Later", icon: <Loader size={18} /> },
    { name: "Likes Videos", icon: <Heart size={18} /> },
  ];

  return (
    <div className="flex flex-col gap-4">
      {secondaryLink.map((item, id) => (
        <MenuItem key={id} name={item.name} icon={item.icon} />
      ))}
    </div>
  );
}
