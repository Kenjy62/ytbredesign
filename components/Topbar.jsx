// Components
import Userbar from "./Userbar/Userbar";
import Searchbar from "./Searchbar";

export default function Topbar() {
  return (
    <div className="flex flex-row justify-between border-b border-bgSecondary p-8">
      <Searchbar />
      <Userbar />
    </div>
  );
}
