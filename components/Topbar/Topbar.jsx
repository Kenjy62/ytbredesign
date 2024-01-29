// Components
import Userbar from "../Userbar/Userbar";
import Searchbar from "../Searchbar";
import NavIcon from "../Nav/NavIcon";

export default function Topbar() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-bgSecondary p-8">
      <NavIcon />
      <Searchbar />
      <Userbar />
    </div>
  );
}
