// Required
import PerfectScrollbar from "react-perfect-scrollbar";

// Style
import "react-perfect-scrollbar/dist/css/styles.css";

// Components
import Autoplay from "./UI/Autoplay";
import VideoCard from "./Video/VideoCard";

export default function Rightbar() {
  const videos = [
    { name: "A beautiful Plant", author: "TiboInShape", views: "2.6M" },
    { name: "Cyberpunk Gameplay", author: "Charlotte White", views: "8.9M" },
    { name: "Beautiful Idian Sound", author: "Marion Cot", views: "500k" },
  ];

  return (
    <div className="hidden h-[calc(100dvh-130px)] w-[320px] flex-col gap-6 overflow-hidden pb-[20px] md:flex md:min-w-[230px] lg:min-w-[320px]">
      <PerfectScrollbar>
        <div className="flex flex-col gap-6">
          <Autoplay />
          {videos.map((item, id) => (
            <VideoCard key={id} item={item} id={id} />
          ))}
        </div>
      </PerfectScrollbar>
    </div>
  );
}
