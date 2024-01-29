// Components
import Avatar from "../UI/Avatar";
import Action from "./Action";
import DotNotification from "./DotNotification";

export default function Userbar() {
  return (
    <div className="flex flex-row items-center gap-8">
      <Action />
      <div className="relative">
        <Avatar h={30} w={30} style={"rounded-lg"} />
        <DotNotification />
      </div>
    </div>
  );
}
