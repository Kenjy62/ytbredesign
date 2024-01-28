// Icons
import { Compass, Flame, DollarSign } from "lucide-react";

// Components
import MenuItem from "../MenuItem";

export default function Main() {
  const mainLink = [
    { name: "Explorer", icon: <Compass size={18} /> },
    { name: "Trending", icon: <Flame size={18} /> },
    { name: "Subscription", icon: <DollarSign size={18} /> },
  ];

  return (
    <div className="flex flex-col gap-4">
      {mainLink.map((item, id) => (
        <MenuItem key={id} name={item.name} icon={item.icon} />
      ))}
    </div>
  );
}
