// Components
import Avatar from "../Avatar";
import Like from "../Like";

export default function Comment() {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex items-baseline justify-start">
        <Avatar h={50} w={50} style={"rounded-xl"} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <span className="font-semibold text-white">Charlotte White</span>
          <span className="text-sm text-textSecondary">1 month ago</span>
        </div>
        <div className="text-sm text-white">
          A very slow, gentle, beautiful shamanic tantra love music. Ideal as as
          spiritual soundbath, yoga or deep tantric love experience music. With
          deep, warm yet firm sound of the shaman drum.
        </div>
        <Like />
      </div>
    </div>
  );
}
