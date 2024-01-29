// Components
import TitleViews from "./TitleViews";
import Action from "./Action";

export default function VideoInformations() {
  return (
    <div className="flex flex-row justify-between p-4 text-white md:p-0">
      <TitleViews />
      <Action />
    </div>
  );
}
