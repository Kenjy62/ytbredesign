// Required
import PerfectScrollbar from "react-perfect-scrollbar";

// Style
import "react-perfect-scrollbar/dist/css/styles.css";

// Components
import Autoplay from "./Autoplay";
import VideoCard from "./Video/VideoCard";

export default function Rightbar() {
  return (
    <div className="flex h-[calc(100dvh-200px)] w-[320px] min-w-[320px] flex-col gap-6 overflow-hidden">
      <PerfectScrollbar>
        <div className="flex flex-col gap-6">
          <Autoplay />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </PerfectScrollbar>
    </div>
  );
}
