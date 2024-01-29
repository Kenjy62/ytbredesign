// Components
import Like from "../UI/Like";
import WatchLater from "./Action/WatchLater";

export default function Action() {
  return (
    <div className="flex flex-row gap-4 md:gap-8">
      <WatchLater />
      <Like count={"18k"} />
    </div>
  );
}
